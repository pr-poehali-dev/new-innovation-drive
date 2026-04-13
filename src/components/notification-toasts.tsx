import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const notifications = [
  {
    id: 1,
    icon: "MapPin",
    title: "Контакты",
    text: "Вся контактная информация находится в конце сайта. Также подписывайтесь на ВКонтакте!",
    delay: 5000,
    link: "https://vk.ru/avolk_74",
    linkText: "ВКонтакте →",
  },
  {
    id: 2,
    icon: "Heart",
    title: "Поддержать автора",
    text: "Вы можете поддержать меня по номеру +7 951 439-51-42. Все средства пойдут на улучшение сайта, покупку объективов и качества фото. Спасибо!",
    delay: 8500,
    link: undefined,
    linkText: undefined,
  },
]

export function NotificationToasts() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    const timers = notifications.map((n) =>
      setTimeout(() => {
        setVisible((prev) => [...prev, n.id])
      }, n.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const dismiss = (id: number) => {
    setVisible((prev) => prev.filter((v) => v !== id))
  }

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 items-end">
      <AnimatePresence>
        {notifications
          .filter((n) => visible.includes(n.id))
          .map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[300px] bg-background border border-border rounded-2xl shadow-xl p-4 flex gap-3 items-start"
            >
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <Icon name={n.icon as "MapPin" | "Heart"} size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{n.text}</p>
                {n.link && (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-medium mt-2 inline-block hover:underline"
                    data-clickable
                  >
                    {n.linkText}
                  </a>
                )}
              </div>
              <button
                onClick={() => dismiss(n.id)}
                className="shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
                data-clickable
              >
                <Icon name="X" size={14} />
              </button>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  )
}