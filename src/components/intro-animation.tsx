import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroAnimation() {
  const [phase, setPhase] = useState<"photo" | "flash" | "done">("photo")

  useEffect(() => {
    const flashTimer = setTimeout(() => setPhase("flash"), 2200)
    const doneTimer = setTimeout(() => setPhase("done"), 2900)
    return () => {
      clearTimeout(flashTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Фото фотографа */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "photo" ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/files/c99cb37a-093b-46a7-9bfb-5664e0264162.jpg"
              alt="intro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Текст поверх фото */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-3">Добро пожаловать</p>
              <h1 className="text-white font-serif text-4xl md:text-6xl tracking-tight">Фотограф</h1>
            </motion.div>

            {/* Анимация затвора камеры */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 0] }}
              transition={{ delay: 1.8, duration: 0.4, times: [0, 0.3, 0.6, 1] }}
            >
              <div className="w-32 h-32 rounded-full border-4 border-white/80 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Вспышка */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "flash" ? [0, 1, 1, 0] : 0,
            }}
            transition={{
              duration: 0.7,
              times: [0, 0.2, 0.5, 1],
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
