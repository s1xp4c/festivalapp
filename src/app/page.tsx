// non-relatives

// relatives
// import FullScreen from ":/components/fullScreen/FullScreen";
import Countdown from ":/components/countdown/Countdown/Countdown";
import HeroSection from ":/components/heroSection/HeroSection";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      {/* <FullScreen /> */}
      <MaxWidthWrapper className="mb-12 mt-0 md:mt-28 sm:mt-20 flex flex-col items-center justify-center text-center mx-auto">
        <HeroSection />
        <Countdown />
        <div className=""></div>
      </MaxWidthWrapper>
    </>
  );
}
