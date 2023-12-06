import React from "react";
import InfoHeader from ":/components/infos/infoHeader/InfoHeader";
import InfoCard from ":/components/infos/infoCard/InfoCard";
import { infoCardsData, infoHeaderData } from ":/constants/heroInfoData";

interface CardProps {
  onClick: () => void;
}

export interface InfoCardTypes {
  title: string;
  content: {
    id: string;
    title: string;
    text: string;
    lineClamp: string;
    btnText: string;
    href: string;
    floatImage: {
      id: string;
      width: number;
      height: number;
      src: string;
    };
    iconName: string;
  }[];
}
const Info: React.FC<CardProps> = ({ onClick }) => {
  const { ...infoData } = infoCardsData[0];

  //  const { headerData } = infoHeaderData[0];

  return (
    <div className="flex flex-col w-full max-h-full text-center">
      <div className="">{infoData.title}</div>
      {/* <InfoHeader InfoHeaderCardProps={...headerData} /> */}
      <div className="grid grid-rows-4 gap-2.5 w-full mx-auto my-auto">
        {infoData.content.map((contentData) => (
          <InfoCard
            id={contentData.id}
            title={contentData.title}
            iconName={contentData.iconName}
            text={contentData.text}
            floatImage={contentData.floatImage}
            lineClamp={contentData.lineClamp}
            btnText={contentData.btnText}
            href={contentData.href}
            onClick={onClick}
            classes={{ root: "flex flex-col w-full p-2" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
