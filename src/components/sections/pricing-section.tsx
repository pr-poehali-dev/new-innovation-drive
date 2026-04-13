import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const collections = [
  {
    name: "Google Фото",
    icon: "Image",
    description: "Основной архив работ",
    features: [
      "Портреты и люди",
      "Городской репортаж",
      "Пейзажи и природа",
      "Регулярные обновления",
    ],
    link: "#",
    linkLabel: "Открыть альбом",
  },
  {
    name: "Яндекс Диск",
    icon: "HardDrive",
    description: "Избранные серии",
    features: [
      "Архитектура городов",
      "Свадебная съёмка",
      "Коммерческие проекты",
      "Полноразмерные файлы",
    ],
    link: "#",
    linkLabel: "Открыть альбом",
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Все коллекции открыты</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Просматривайте полные альбомы прямо в облаке — удобно и без регистрации.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${col.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {col.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Рекомендуем
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <div className="flex justify-center mb-3">
                  <Icon name={col.icon as "Image"} size={32} fallback="Folder" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{col.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{col.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {col.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Icon name="Camera" size={16} fallback="Check" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={col.link}
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  col.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30"
                }`}
              >
                {col.linkLabel}
                <Icon name="ExternalLink" size={16} fallback="ArrowRight" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
