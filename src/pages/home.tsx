import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { WhatICover } from "@/components/what-i-cover";
import { Experience } from "@/components/experience";
import { HowIThink } from "@/components/how-i-think";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Impact />
      <WhatICover />
      <Experience />
      <HowIThink />
      <Education />
      <Contact />
    </Layout>
  );
}
