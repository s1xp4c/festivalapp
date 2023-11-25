import React from "react";
import PriceCard from ":/components/priceCard/PriceCard";
import allTickets, { PricingPlan } from ":/constants/prices";
import clsx from "clsx";

interface PriceProps {
  onClick: (plan: PricingPlan) => void;
}

const Pricing: React.FC<PriceProps> = ({ onClick }) => {
  const { title, subtitle1, subtitle2, plans } = allTickets;
  return (
    <div
      className={clsx("relative flex w-full flex-col text-center")}
      id="Pricing"
    >
      <div className="flex justify-start w-full z-10 flex-col relative">
        <div className="text-center text-foreground">
          <p className="text-sm md:text-5xl mb-0 text-foreground">{title}</p>
          <p className="sm:text-xs md:text-2xl text-[.6rem] leading-tight text-muted-foreground">
            {subtitle1}
          </p>
          <p className="sm:text-xs md:text-2xl text-[.6rem] leading-tight text-muted-foreground">
            {subtitle2}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2.5 w-full">
          {plans.map((plan) => (
            <PriceCard
              onClick={() => onClick(plan)}
              key={plan.id}
              classes={{
                root: "flex flex-col h-full w-full p-2 ",
              }}
              title={plan.title}
              features={Object.values(plan.conditions)}
              price={plan.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
