"use client";
import React, { lazy, Suspense } from "react";
import HeroSection from ":/components/heroSection/HeroSection";
import Info from ":/components/infos/info/Info";

const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedInfo = React.memo(Info);

interface HomeProps {
  id: string;
  title: string;
  date: string;
  features: string;
  featureHeader: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemoizedHeroSection />
      <MemoizedInfo
        id={""}
        title={""}
        date={""}
        features={[]}
        featureHeader={""}
      />
    </Suspense>
  );
};

export default Home;
