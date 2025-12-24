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

    if (!canvas) return
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
      120
    )

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 0.4 + 0.2 
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.5,
        angle,
        speed,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      }
    })

    /* =========================
       SCROLL (IMPULSO MOMENTÂNEO)
    ========================== */

    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    const onScroll = () => {
      const currentScroll = window.scrollY
      scrollVelocity = (currentScroll - lastScrollY) * 0.05
      lastScrollY = currentScroll
    }

    window.addEventListener("scroll", onScroll)

    /* =========================
       GRADIENTE ESTÁTICO (FIXO)
    ========================== */

    const createGradient = () => {
      // Cria o gradiente conforme solicitado: #6300b2, #930dc2, #ff0000
      const g = ctx.createLinearGradient(0, 0, width, 0)
      g.addColorStop(0, "#6300b2")
      g.addColorStop(0.5, "#930dc2")
      g.addColorStop(1, "#ff0000")
      return g
    }

    /* =========================
       ANIMAÇÃO
    ========================== */

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const gradient = createGradient()
      scrollVelocity *= 0.9 // Amortecimento do scroll

      particles.forEach((p) => {
        // Movimento de flutuação suave
        p.angle += (Math.random() - 0.5) * 0.02
        
        const targetVx = Math.cos(p.angle) * p.speed
        const targetVy = Math.sin(p.angle) * p.speed
        
        p.vx += (targetVx - p.vx) * 0.03
        p.vy += (targetVy - p.vy) * 0.03

        // Posição + impacto do scroll
        p.x += p.vx
        p.y += p.vy + scrollVelocity

        // Limites da tela com rebate (garante que não "caiam")
        if (p.x <= 0) {
          p.x = 0
          p.vx *= -1
          p.angle = Math.atan2(p.vy, p.vx)
        } else if (p.x >= width) {
          p.x = width
          p.vx *= -1
          p.angle = Math.atan2(p.vy, p.vx)
        }

        if (p.y <= 0) {
          p.y = 0
          p.vy *= -1
          p.angle = Math.atan2(p.vy, p.vx)
        } else if (p.y >= height) {
          p.y = height
          p.vy *= -1
          p.angle = Math.atan2(p.vy, p.vx)
        }

        // Desenho da partícula com o novo gradiente
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}