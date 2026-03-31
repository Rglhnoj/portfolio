import { HomeBanner } from "@/components/features/home/HomeBanner";
import { Projects } from "@/components/features/home/Project";
import { Skills } from "@/components/features/home/Skills";
import { Contact } from "@/components/features/home/Contact";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}