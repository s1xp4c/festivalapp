import ChristmasTree from ":/constants/allIcons";
import EasterEgg from ":/constants/allIcons";
import DungionIcon from ":/constants/allIcons";

export const allEventsData = {
  events: [
    {
      id: "0",
      title: "Fællestival",
      href: "events/Faellestival",
      eventIcon: DungionIcon,
      date: "10. nov. 2024",
      active: true,
    },
    {
      id: "1",
      title: "Julefrokost",
      href: "events/julefrokost",
      eventIcon: ChristmasTree,
      date: "10. nov. 2024",
      active: true,
    },
    {
      id: "2",
      title: "PåskeParty",
      href: "events/paaskeparty",
      eventIcon: EasterEgg,
      date: "10. nov. 2024",
      active: true,
    },
  ],
};

export default allEventsData;
