"use client";
// non-relatives

// relatives
import Pricing from ":/components/pricing/Pricing";
import HeroSection from ":/components/heroSection/HeroSection";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";
import router from "next/router";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="sticky w-full h-[28vh]">
          <HeroSection />
        </div>
        <div className="mx-auto  my-2">
          <Pricing onClick={() => router.push("/billetter")} />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
