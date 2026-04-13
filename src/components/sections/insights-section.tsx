import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const albums = [
  {
    title: "Городская жизнь — Москва 2024",
    category: "Репортаж",
    image: "/visual-storytelling-design-article.jpg",
    link: "#",
  },
  {
    title: "Портреты незнакомцев",
    category: "Портрет",
    image: "/personal-branding-digital-marketing.jpg",
    link: "#",
  },
  {
    title: "Природа и тишина",
    category: "Пейзаж",
    image: "/typography-trends-modern-fonts.jpg",
    link: "#",
  },
  {
    title: "Архитектура городов",
    category: "Архитектура",
    image: "/modern-architecture-building-exterior-minimal.jpg",
    link: "#",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Альбомы
        </motion.p>

        <div className="divide-y divide-border">
          {albums.map((album, i) => (
            <motion.a
              key={i}
              href={album.link}
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{album.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {album.title}
                </h3>
              </div>
              <Icon name="ExternalLink" size={20} fallback="ArrowRight" />
            </motion.a>
          ))}
        </div>

        {/* Floating hover image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={albums[hoveredIndex].image || "/placeholder.svg"}
                alt={albums[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
