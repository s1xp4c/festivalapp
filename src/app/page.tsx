// non-relatives

// relatives
import HeroSection from ":/components/heroSection/HeroSection";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";

export default async function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center">
        <HeroSection />
        <div className=""></div>
      </MaxWidthWrapper>
    </>
  );
}
