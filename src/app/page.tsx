"use client";
// non-relatives

// relatives
// import FullScreen from ":/components/fullScreen/FullScreen";
import Pricing from ":/components/Pricing";
import Countdown from ":/components/countdown/Countdown/Countdown";
import HeroSection from ":/components/heroSection/HeroSection";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";
import router from "next/router";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-0 md:mt-28 sm:mt-20 flex flex-col items-center justify-center text-center mx-auto">
      {/* <FullScreen /> */}
      <HeroSection />
      <Countdown />
      <div className="">
        <Pricing onClick={() => router.push("/billetter")} />
      </div>
    </MaxWidthWrapper>
  );
}
