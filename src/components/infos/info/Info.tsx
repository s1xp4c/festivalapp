import React from "react";
import InfoHeader from ":/components/infos/infoHeader/InfoHeader";
import InfoCard from ":/components/infos/infoCard/InfoCard";
import allInfos, {
  infoHeaderInfo,
  headerCtaButtonInfo,
} from ":/constants/heroInfo";

const Info: React.FC = () => {
  const { headerInfo } = infoHeaderInfo;
  const { InfoTypes } = allInfos;

  return (
    <div className="flex max-h-full w-full flex-col text-center">
      <InfoHeader
        {...headerInfo[0]}
        ctaBtnInfo={headerCtaButtonInfo}
        onClick={() => {
          /* Function implementation */
        }}
      />
      <div className="grid grid-rows-4 gap-2.5 w-full mx-auto my-auto">
        {InfoTypes.map((infoType) => (
          <InfoCard
            key={infoType.id}
            {...infoType}
            onClick={() => {
              /* Function implementation */
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
