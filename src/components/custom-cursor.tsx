import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const TRAIL_LENGTH = 20

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const counterRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY }
      setPosition(pos)
      setIsVisible(true)
      counterRef.current += 1
      const id = counterRef.current
      setTrail((prev) => [...prev.slice(-(TRAIL_LENGTH - 1)), { ...pos, id }])
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrail([])
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    const clickables = document.querySelectorAll("a, button, [data-clickable]")
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block">
      {/* Trail dots */}
      {trail.map((point, i) => {
        const progress = i / trail.length
        const opacity = progress * 0.6
        const size = 2 + progress * 4
        return (
          <div
            key={point.id}
            style={{
              position: "fixed",
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: `hsl(43 74% 60% / ${opacity})`,
              boxShadow: `0 0 ${size * 2}px hsl(43 80% 68% / ${opacity * 0.5})`,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          />
        )
      })}

      {/* Main cursor dot */}
      <motion.div
        className="fixed left-0 top-0"
        animate={{
          x: position.x - (isHovering ? 20 : 4),
          y: position.y - (isHovering ? 20 : 4),
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 40 : 8,
            height: isHovering ? 40 : 8,
            backgroundColor: isHovering ? "transparent" : "hsl(43 74% 60%)",
            borderWidth: isHovering ? 1 : 0,
            borderColor: "hsl(43 74% 60%)",
            boxShadow: isHovering ? "0 0 12px hsl(43 74% 60% / 0.5)" : "0 0 6px hsl(43 74% 60% / 0.8)",
          }}
          transition={{ duration: 0.2 }}
          style={{ borderStyle: "solid" }}
        />
      </motion.div>
    </div>
  )
}
