import React from "react";
import PriceCard from ":/components/price/priceCard/PriceCard";
import allTickets, {
  priceHeaderInfo,
  headerCtaButtonInfo,
} from ":/constants/pricesData";
import clsx from "clsx";
import PriceHeader from ":/components/price/priceHeader/PriceHeader";

interface PriceProps {
  onClick: (plan: PricingPlanTypes) => void;
}

interface PricingPlanTypes {
  id: string;
  title: string;
  price: number;
  conditions: { title: string; available: boolean }[];
}

const Pricing: React.FC<PriceProps> = ({ onClick }) => {
  const { title, subtitle1, subtitle2, headerInfoIcon, headerInfoLinks } =
    priceHeaderInfo.headerInfo[0];
  const { plans } = allTickets;

  return (
    <div
      className={clsx("flex max-h-full w-full flex-col text-center")}
      id="Pricing"
    >
      <div className="mx-auto my-auto">
        <PriceHeader
          title={title}
          subtitle1={subtitle1}
          subtitle2={subtitle2}
          ctaBtnInfo={headerCtaButtonInfo}
          headerInfoLinks={headerInfoLinks}
          headerInfoIcon={headerInfoIcon as React.ElementType}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-2.5 w-full mx-auto my-auto">
        {plans.map((plan) => (
          <PriceCard
            onClick={() => onClick(plan)}
            key={plan.id}
            classes={{ root: "flex flex-col  w-full p-2 " }}
            title={plan.title}
            features={Object.values(plan.conditions)}
            price={plan.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
