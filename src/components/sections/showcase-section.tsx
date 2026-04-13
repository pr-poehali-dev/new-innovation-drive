import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

const showcaseItems = [
  {
    src: "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/edce910d-c6da-4959-85d1-3e6c8c7824d2.JPG",
    title: "Фотоохота на людей",
    description: "Живые эмоции незнакомцев, пойманные в объектив",
    link: "#",
  },
  {
    src: "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
    title: "Портрет",
    description: "Эмоции и характер в каждом взгляде",
    link: "#",
  },
  {
    src: "/interior-design-minimalist-living-room-natural-lig.jpg",
    title: "Интерьер",
    description: "Уют и стиль пространств, снятых с душой",
    link: "#",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all"
                    data-clickable
                  >
                    Смотреть альбом
                    <Icon name="ExternalLink" size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}