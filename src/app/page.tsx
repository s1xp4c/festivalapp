"use client";
import HeroSection from ":/components/heroSection/HeroSection";
import Info from ":/components/infos/info/Info";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Info id={""} title={""} date={""} features={[]} featureHeader={""} />
    </>
  );
}
