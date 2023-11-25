import React from "react";
import PriceCard from "../PriceCard";
import prices from "../../constants/prices";
import clsx from "clsx";

interface PriceProps {
  onClick: () => void;
}

const Pricing: React.FC<PriceProps> = ({ onClick }) => {
  return (
    <div
      className={clsx("relative flex w-full flex-col text-center")}
      id="Pricing"
    >
      <div className="flex justify-start w-full z-10 flex-col relative">
        <div className="text-center text-foreground">
          <h3 className="text-xl md:text-5xl mb-0 text-foreground">
            Billetpriser
          </h3>
          <p className="text-xs md:text-2xl text-[.7rem] leading-tight text-muted-foreground">{`Adgang til den årlige foreningsfest kræver medlemskab`}</p>
          <p className="text-xs md:text-2xl text-[.7rem] leading-tight text-muted-foreground">{`Hvilken slags Fælla er du?`}</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
          {prices.map((tqt, i) => (
            <PriceCard
              onClick={onClick}
              key={i}
              classes={{
                root: "flex flex-col min-h-full w-full p-2 ",
              }}
              title={tqt.title}
              features={Object.values(tqt.conditions)}
              price={tqt.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
