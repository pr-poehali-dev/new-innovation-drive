import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Волков Артемий
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-4 text-sm uppercase tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Фотограф
            </motion.p>
          </div>

          {/* Contacts */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Связаться со мной</p>

            <a
              href="mailto:pampom.12@mail.ru"
              className="group flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-clickable
            >
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center shrink-0">
                <Icon name="Mail" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">Email</p>
                <p className="font-medium">pampom.12@mail.ru</p>
              </div>
              <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="tel:+79514395142"
              className="group flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-clickable
            >
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center shrink-0">
                <Icon name="Phone" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">Телефон</p>
                <p className="font-medium">+7 951 439-51-42</p>
              </div>
              <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://vk.ru/avolk_74"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-clickable
            >
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center shrink-0">
                <Icon name="Users" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">ВКонтакте</p>
                <p className="font-medium">vk.ru/avolk_74</p>
              </div>
              <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">2025 Волков Артемий. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}