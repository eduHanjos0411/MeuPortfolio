import { useEffect } from "react"

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  angle: number
  speed: number
}

export function useParticles() {
  useEffect(() => {
    const canvas = document.getElementById(
      "particles-canvas"
    ) as HTMLCanvasElement

    const ctx = canvas.getContext("2d")!

    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    /* =========================
       PARTÍCULAS
    ========================== */

    const particleCount = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 14000),
      160
    )

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.4,
        angle,
        speed: Math.random() * 0.3 + 0.15,
        vx: Math.cos(angle) * 0.2,
        vy: Math.sin(angle) * 0.2,
      }
    })

    /* =========================
       CURSOR (FUGA)
    ========================== */

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)

    /* =========================
       SCROLL (VENTO)
    ========================== */

    let lastScrollY = window.scrollY
    let scrollForce = 0

    const onScroll = () => {
      const currentScroll = window.scrollY
      scrollForce += (currentScroll - lastScrollY) * 0.002
      lastScrollY = currentScroll
    }

    window.addEventListener("scroll", onScroll)

    /* =========================
       GRADIENTE DINÂMICO
    ========================== */

    let hueShift = 0

    const createGradient = () => {
      const g = ctx.createLinearGradient(0, 0, width, 0)

      g.addColorStop(0, `hsl(${270 + hueShift}, 90%, 55%)`)
      g.addColorStop(0.5, `hsl(${295 + hueShift}, 90%, 55%)`)
      g.addColorStop(1, `hsl(${0 + hueShift}, 90%, 55%)`)

      return g
    }

    /* =========================
       ANIMAÇÃO
    ========================== */

    const maxDistance = 130

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const gradient = createGradient()
      hueShift = (hueShift + 0.04) % 360

      // amortecimento do scroll (vento some aos poucos)
      scrollForce *= 0.92

      particles.forEach((p) => {
        // movimento autônomo contínuo (drift)
        p.angle += (Math.random() - 0.5) * 0.01

        p.vx += Math.cos(p.angle) * p.speed * 0.02
        p.vy += Math.sin(p.angle) * p.speed * 0.02
        /* fuga do mouse */
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius
          p.vx += (dx / distance) * force * 0.6
          p.vy += (dy / distance) * force * 0.6
        }

        /* influência do scroll */
        p.vy += scrollForce

        /* movimento autônomo */
        p.x += p.vx
        p.y += p.vy

        /* amortecimento geral */
        p.vx *= 0.992
p.vy *= 0.992

        /* limites */
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      /* conexões */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            ctx.strokeStyle = gradient
            ctx.globalAlpha = 1 - dist / maxDistance
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}
