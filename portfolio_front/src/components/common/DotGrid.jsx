'use client'

import { useRef, useEffect, useCallback, useMemo } from 'react'
import { gsap } from 'gsap'
import './DotGrid.css'

const throttle = (func, limit) => {
  let lastCall = 0
  return function (...args) {
    const now = performance.now()
    if (now - lastCall >= limit) {
      lastCall = now
      func.apply(this, args)
    }
  }
}

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  if (!m) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  }
}

const DotGrid = ({
  dotSize = 8,
  gap = 25,
  baseColor = '#5227FF',
  activeColor = '#a855f7',
  proximity = 150,
  bulgeStrength = 25,
  className = '',
  style
}) => {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const dotsRef = useRef([])
  const pointerRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor])
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor])

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null
    const p = new Path2D()
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2)
    return p
  }, [dotSize])

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const { width, height } = wrap.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (ctx) ctx.scale(dpr, dpr)

    const cell = dotSize + gap
    const cols = Math.floor(width / cell)
    const rows = Math.floor(height / cell)

    const gridW = cols * cell - gap
    const gridH = rows * cell - gap
    const startX = (width - gridW) / 2 + dotSize / 2
    const startY = (height - gridH) / 2 + dotSize / 2

    const dots = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          baseX: startX + x * cell,
          baseY: startY + y * cell,
          x: startX + x * cell,
          y: startY + y * cell,
          size: dotSize
        })
      }
    }
    dotsRef.current = dots
  }, [dotSize, gap])

  // Animation loop with bulging effect
  useEffect(() => {
    if (!circlePath) return

    const draw = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: px, y: py } = pointerRef.current
      const proxSq = proximity * proximity

      for (const dot of dotsRef.current) {
        const dx = dot.baseX - px
        const dy = dot.baseY - py
        const distSq = dx * dx + dy * dy
        const dist = Math.sqrt(distSq)

        // Bulging effect - dots move away from cursor
        let offsetX = 0
        let offsetY = 0
        let scale = 1

        if (distSq < proxSq && dist > 0) {
          const force = (1 - dist / proximity) * bulgeStrength
          offsetX = (dx / dist) * force
          offsetY = (dy / dist) * force
          scale = 1 + (1 - dist / proximity) * 0.5
        }

        // Smooth animation back to base position
        dot.x += (dot.baseX + offsetX - dot.x) * 0.15
        dot.y += (dot.baseY + offsetY - dot.y) * 0.15
        dot.size += (dotSize * scale - dot.size) * 0.15

        // Color transition based on proximity
        let color = baseColor
        if (distSq < proxSq) {
          const t = 1 - dist / proximity
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t)
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t)
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t)
          color = `rgb(${r},${g},${b})`
        }

        // Draw dot
        ctx.save()
        ctx.translate(dot.x, dot.y)
        ctx.scale(dot.size / dotSize, dot.size / dotSize)
        ctx.fillStyle = color
        ctx.fill(circlePath)
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [circlePath, baseColor, activeColor, baseRgb, activeRgb, proximity, bulgeStrength, dotSize])

  // Build grid on mount and resize
  useEffect(() => {
    buildGrid()
    const ro = new ResizeObserver(buildGrid)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [buildGrid])

  // Track mouse position
  useEffect(() => {
    const onMove = throttle(e => {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return
      pointerRef.current.x = e.clientX - rect.left
      pointerRef.current.y = e.clientY - rect.top
    }, 16)

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className={`dot-grid ${className}`} style={style}>
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  )
}

export default DotGrid