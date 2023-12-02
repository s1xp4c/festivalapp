// InfoHeaderCard.tsx
import React from "react";
import Link from "next/link";

interface InfoHeaderCardProps {
  title: string;
  href: string;
  subText: string;
  date: string;
  month: string;
  year: string;
}

const InfoHeaderCard: React.FC<InfoHeaderCardProps> = ({
  title,
  href,
  subText,
  date,
  month,
  year,
}) => {
  return (
    <li className=" block rounded-md hover:bg-accent hover:text-accent-foreground my-1 focus:bg-accent focus:text-accent-foreground bg-gradient-to-b from-muted/0 to-indigo-500/20 ">
      <Link href={href} passHref>
        <div className="space-y-0 no-underline flex flex-col">
          <div className="flex justify-between  items-center w-full">
            <span className="text-xs font-medium">{title}</span>
            <div className="text-right flex">
              <div className="text-[.55rem]  font-bold text-purple-600/80">
                {date}
              </div>
              <div className="text-[.55rem]   font-bold text-violet-600/80">
                {" "}
                {month}
              </div>
              <div className="text-[.55rem] ml-[.11rem] font-bold text-indigo-600/80">
                {" "}
                {year}
              </div>
            </div>
          </div>
          <p className="line-clamp-2 text-[.6rem] leading-snug text-muted-foreground text-left">
            {subText}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default InfoHeaderCard;
