import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { FooterSection } from "@/components/sections/footer-section"
import { IntroAnimation } from "@/components/intro-animation"
import { NotificationToasts } from "@/components/notification-toasts"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <IntroAnimation />
        <NotificationToasts />
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index