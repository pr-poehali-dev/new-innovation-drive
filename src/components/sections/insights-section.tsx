import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const albums = [
  {
    title: "Фотоохота на людей",
    category: "Репортаж",
    image: "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/edce910d-c6da-4959-85d1-3e6c8c7824d2.JPG",
    link: "https://disk.yandex.ru/a/cdV2QtPnMTGszQ",
  },
  {
    title: "Фото косплеев",
    category: "Косплей",
    image: "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/files/c7ddaea2-0164-4b56-8eff-5ef4bfc4c276.jpg",
    link: "https://disk.yandex.ru/a/AdlCyjNVQ2p0Gw",
  },
  {
    title: "Рандомные фотографии",
    category: "Разное",
    image: "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/07168a54-c46e-4e6e-ac9d-8f117bbabb53.JPG",
    link: "https://disk.yandex.ru/a/vyZOfpSRhAh9Ow",
  },
  {
    title: "Мероприятия и поездки",
    category: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/81e066bd-b21d-4b3e-b041-e9f62c1c9af0.jpg",
    link: "https://disk.yandex.ru/d/aQIuKM5MhZ4i_Q",
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