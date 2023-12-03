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
    <div className="flex flex-col w-full max-h-full text-center">
      <InfoHeader
        {...headerInfo[0]}
        ctaBtnInfo={headerCtaButtonInfo}
        onClick={() => {
          /* Function implementation */
        }}
        className="mx-auto my-auto" // Adjust this class as per your original styling
      />
      <div className="grid grid-rows-4 gap-2.5 w-full mx-auto my-auto">
        {InfoTypes.map((infoType) => (
          <InfoCard
            key={infoType.id}
            {...infoType}
            onClick={() => {
              /* Function implementation */
            }}
            classes={{ root: "flex flex-col w-full p-2" }} // Preserving your styling
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
