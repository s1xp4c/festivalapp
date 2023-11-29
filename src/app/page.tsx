"use client";
// non-relatives

// relatives
import Pricing from ":/components/pricing/Pricing";
// import HeroSection from ":/components/heroSection/HeroSection";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";
import router from "next/router";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        {/* <HeroSection /> */}

        <Pricing onClick={() => router.push("/billetter")} />
      </MaxWidthWrapper>
    </>
  );
}
