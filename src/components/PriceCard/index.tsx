import React from "react";
import clsx from "clsx";
import Button from ":/components/buttons/Button";
import CallToActionButton from "../buttons/CallToActionButton";

const checkIcon = (
  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
);
const forbidIcon = (
  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
);

interface Props {
  title: string;
  price: number;
  features: { title: string; available: boolean }[];
  classes?: Partial<Record<"root", string>>;
  onClick: () => void;
}

const PriceCard: React.FunctionComponent<Props> = (props, { onClick }) => {
  const { features, title, price, classes } = props;

  const handleAddToCart = () => {
    // Placeholder for now, but this is where you'd add the item to the cart
    console.log("Add to cart:", { title, price, features });
    onClick(); // This should be replaced with a real cart handling function
  };

  return (
    <div className="my-0">
      <div
        className={clsx(
          "flex h-full w-full select-none flex-col justify-start rounded-lg bg-gradient-to-b from-muted/20 to-muted p-0 no-underline outline-none focus:shadow-md",
          classes?.root
        )}
      >
        <div className="center p-0 w-full">
          <div className="text-center w-full ">
            <span className="rounded-full flex mb-0 mt-0 text-sm mx-auto my-auto font-medium ">
              {title}
            </span>
          </div>
          <div className="mt-0 text-sm text-center font-extrabold text-indigo-600/80 w-full">
            {`${price}Kr.`}
          </div>
        </div>
        {/* <p className="text-sm mt-1 text-orange">Billetten inkluderer:</p> */}
        <ul className="text-[.6rem]/[.8] md:text-lg w-full mt-0 mb-1 text-foreground">
          {features.map((feature, i) => (
            <li className="mb-[.12rem]  flex items-center gap-2" key={i}>
              <svg
                className="h-3 w-3 mr-0 md:mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                stroke="currentColor"
                fill={feature.available ? "#1eeea5" : "#ee7e31"}
                viewBox="0 0 1792 1792"
              >
                {feature.available ? checkIcon : forbidIcon}
              </svg>
              {feature.title}
            </li>
          ))}
        </ul>

        <CallToActionButton onClick={handleAddToCart}>
          <span className="text-[.5rem] ">FYR I KURV</span>
        </CallToActionButton>
      </div>
    </div>
  );
};

export default PriceCard;
