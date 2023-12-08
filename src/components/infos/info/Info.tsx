// File: app/components/Info.tsx
import React from "react";
import InfoCard from ":/components/infos/infoCard/InfoCard";
import { infoCardsData } from ":/constants/heroInfoData";

const Info: React.FC = () => {
  const { ...infoData } = infoCardsData[0];

  return (
    <div className="flex flex-col w-full max-h-full text-center">
      <div className="">{infoData.title}</div>
      <div className="grid grid-rows-5 gap-2.5 w-full mx-auto my-auto">
        {infoData.content.map((contentData) => (
          <InfoCard
            key={contentData.id}
            {...contentData}
            classes={{ root: "flex flex-col w-full p-2" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
