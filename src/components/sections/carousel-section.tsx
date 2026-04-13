import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/b36f7001-747b-4ef4-9da8-dd96770def94.JPG",
  "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/2d8b847d-1ffa-4ce9-b1be-989834b8ac64.JPG",
  "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/934513ab-c42d-4e58-a8ae-c4f9d26e9115.JPG",
  "https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/a29ffc61-8e9c-430a-b65e-b3934cc9e455.JPG",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Мои лучшие фото.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}