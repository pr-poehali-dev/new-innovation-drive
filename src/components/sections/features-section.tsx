import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ShutterAnimation() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-20 h-20">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-foreground/30 flex items-center justify-center"
          animate={{ scale: open ? 1 : 0.85 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="rounded-full bg-foreground/80"
            animate={{ width: open ? 8 : 32, height: open ? 8 : 32 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </div>
  )
}

function GenreAnimation() {
  const [genre, setGenre] = useState(0)
  const genres = ["Портрет", "Пейзаж", "Снимки людей"]

  useEffect(() => {
    const interval = setInterval(() => {
      setGenre((prev) => (prev + 1) % genres.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={genre}
        className="font-serif text-3xl md:text-4xl text-foreground text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {genres[genre]}
      </motion.span>
    </div>
  )
}

function LinkIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">∞</span>
      <span className="text-sm text-muted-foreground">Фотографий</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О портфолио
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shutter Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <ShutterAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Живые снимки</h3>
              <p className="text-muted-foreground text-sm mt-1">Каждое фото — пойманный момент, который останется навсегда.</p>
            </div>
          </motion.div>

          {/* Genre Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <GenreAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Разные жанры</h3>
              <p className="text-muted-foreground text-sm mt-1">Портрет, пейзаж, репортаж — найдите то, что вас трогает.</p>
            </div>
          </motion.div>

          {/* Collections Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <LinkIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Открытые коллекции</h3>
              <p className="text-muted-foreground text-sm mt-1">Все альбомы доступны по прямым ссылкам — удобно смотреть и делиться.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}