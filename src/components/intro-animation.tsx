import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroAnimation() {
  const [phase, setPhase] = useState<"photo" | "flash" | "done">("photo")

  useEffect(() => {
    const flashTimer = setTimeout(() => setPhase("flash"), 3500)
    const doneTimer = setTimeout(() => setPhase("done"), 4800)
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
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Фото фотографа */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "photo" ? 1 : 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <img
              src="https://cdn.poehali.dev/projects/4ab5cf7f-c33d-4431-8cba-ec52c5633722/files/bb69465c-9898-4024-8423-cc3e639ef99c.jpg"
              alt="intro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* Анимация затвора камеры */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1.05, 1.1] }}
              transition={{ delay: 2.2, duration: 1.2, times: [0, 0.2, 0.5, 0.8, 1] }}
            >
              <div className="w-40 h-40 rounded-full border-4 border-white/80 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border-2 border-white/60 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40" />
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
              duration: 1.3,
              times: [0, 0.15, 0.5, 1],
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
