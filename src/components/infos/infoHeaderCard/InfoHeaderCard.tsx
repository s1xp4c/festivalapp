// InfoHeaderCard.tsx
import React from "react";
import Link from "next/link";

const checkIcon = (
  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
);
const forbidIcon = (
  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
);

interface InfoHeaderCardProps {
  key: string;
  title: string;
  href: string;
  EventIcon: React.ElementType;
  date: string;
  active: Boolean;
}

const InfoHeaderCard: React.FC<InfoHeaderCardProps> = ({
  key,
  title,
  href,
  EventIcon,
  date,
  active,
}) => {
  return (
    <li
      key={key}
      className=" block rounded-md hover:bg-accent hover:text-accent-foreground my-1 focus:bg-accent focus:text-accent-foreground bg-gradient-to-b from-muted/0 to-indigo-500/20 p-[0.05rem]"
    >
      <EventIcon />
      <svg
        className="h-3 w-3 mr-0 md:mr-3"
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="3"
        stroke="currentColor"
        fill={active ? "#1eeea5" : "grey"}
        viewBox="0 0 1792 1792"
      >
        {active ? checkIcon : forbidIcon}
      </svg>

      <Link href={href} passHref>
        <div className="space-y-0 no-underline flex flex-col">
          <div className="  w-full">
            <span className="text-xs font-medium">{title}</span>
            <div className="text-right ">
              <div className="text-[.55rem]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {date}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default InfoHeaderCard;
