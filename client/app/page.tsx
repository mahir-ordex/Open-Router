import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
import { FeaturedModels } from "@/components/home/FeaturedModels";
import { GetStarted } from "@/components/home/GetStarted";
import { ApiSnippet } from "@/components/home/ApiSnippet";
import { SiteFooter } from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="w-full">
        <Hero />
        <Stats />
        <Features />
        <FeaturedModels />
        <GetStarted />
        <ApiSnippet />
      </main>
      <SiteFooter />
    </div>
  );
}
