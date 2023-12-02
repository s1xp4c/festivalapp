import React from "react";
import allInfo, {
  infoHeaderInfo,
  headerCtaButtonInfo,
} from ":/constants/heroInfo";
import clsx from "clsx";
import InfoHeader from ":/components/infos/infoHeader/InfoHeader";
import InfoCard from ":/components/infos/infoCard/InfoCard";

interface InfoProps {
  id: string;
  title: string;
  date: String;
  features: { title: string; available: boolean }[];
  featureHeader: string;
}

const Info: React.FC<InfoProps> = ({}) => {
  const { title, subtitle1, subtitle2, headerInfoIcon, headerInfoLinks } =
    infoHeaderInfo.headerInfo[0];
  const { InfoTypes } = allInfo;
  function handleClick() {
    console.log("test");
  }
  return (
    <div
      className={clsx("flex max-h-full w-full flex-col text-center")}
      id="Pricing"
    >
      <div className="mx-auto my-auto flex">
        <InfoHeader
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
      <div className="grid grid-rows-4 gap-2.5 w-full mx-auto my-auto">
        {InfoTypes.map((infoType) => (
          <InfoCard
            onClick={() => handleClick()}
            key={infoType.id}
            classes={{ root: "flex flex-col  w-full p-2 " }}
            title={infoType.title}
            features={Object.values(infoType.features)}
            featureHeader={infoType.featureHeader}
            date={infoType.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
