import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AboutSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Обо мне
        </motion.p>

        {/* Camera button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group cursor-pointer focus:outline-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Узнать обо мне"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 scale-110" />

          {/* Camera SVG */}
          <div className="relative w-28 h-28 rounded-full bg-secondary flex items-center justify-center border-2 border-border group-hover:border-primary transition-colors duration-300 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground group-hover:text-primary transition-colors duration-300"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>

            {/* Shutter flash on click */}
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </div>

          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            Нажми, чтобы познакомиться
          </motion.p>
        </motion.button>

        {/* About card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-10 w-full max-w-2xl bg-secondary rounded-2xl overflow-hidden shadow-xl border border-border"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Photo — cropped to portrait */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/bucket/02ecf55b-f462-4bcc-8923-231b0d2f9e31.jpg"
                  alt="Волков Артемий"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div className="px-8 pb-10 pt-4 text-left">
                <h3 className="text-2xl font-serif text-foreground mb-4">Артемий Волков</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Я начинающий фотограф, влюблённый в своё дело. Фотография для меня — это не просто нажать кнопку,
                  а поймать момент, выстроить кадр и вдохнуть в него жизнь через постобработку. Да, я ещё в начале
                  пути и не обременён горой дорогого оборудования — но я искренне убеждён: всё лучшее впереди.
                  Надеюсь, мои работы тронут вас, и однажды вы захотите увидеть себя в объективе моей камеры.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
