import FaInfoCircle from ":/constants/allIcons";

import floatImages from "./floatImagesData";

// export const infoCardData = [
//   {
//     id: "0",
//     title: "Crew Fælla",
//     date: "10/11/2024",
//     featureHeader: "Some stuff",
//     features: [
//       { title: "Alle dage", available: true },
//       { title: "MoKost", available: true },
//       { title: "AfMad", available: false },
//       { title: "Parkering", available: false },
//     ],
//   },
//   {
//     id: "1",
//     title: "Gæste Fælla",
//     date: "10/11/2024",
//     featureHeader: "Dingleberry",
//     features: [
//       { title: "Alle dage", available: true },
//       { title: "MoKost", available: true },
//       { title: "AfMad", available: false },
//       { title: "Parkering", available: false },
//     ],
//   },
//   {
//     id: "2",
//     title: "Helårs Fælla",
//     date: "10/11/2024",
//     featureHeader: "Anger stuff",
//     features: [
//       { title: "Alle dage", available: true },
//       { title: "MoKost", available: true },
//       { title: "AfMad", available: false },
//       { title: "Parkering", available: true },
//     ],
//   },
//   {
//     id: "3",
//     title: "Dags Fælla",
//     date: "10/11/2024",
//     featureHeader: "Some julepis",
//     features: [
//       { title: "Alle dage", available: false },
//       { title: "MoKost", available: true },
//       { title: "AfMad", available: false },
//       { title: "Parkering", available: false },
//     ],
//   },
// ];

export const infoHeaderData = [
  {
    title: "Lidt om ås ...... ",
    subtitle1: "Fællestival er en . . . . .   👽",
    subtitle2:
      "Til højre kan du læse mere om forskellige typer af FÆLLAskab, eller hamre knappen i bund herunder med det samme.     💜",
    iconName: "FaInfoCircle",
  },
];

export const infoCardsData = [
  {
    title: "Om Fællestival",
    content: [
      {
        id: "0",
        title: "Om festivalen . . .",
        iconName: "TinyDancingManSvg",
        text: "Fællestival er en 100% non-profit festival og forening, og som man kan drage af titlen, er det en festival i fællesskabets ånd, hvor alle (som har lyst) hjælper til og er med til at skabe et lækkert årligt arrangement, og gennem året vedligeholde bygninger, og den fredede natur i området. Det betyder blandt andet også, at alle gæster giver en hånd med under festivalen med små hjælpeopgaver, og bl.a. er med til at rydde op efter sig selv og nattens dansefest, skænke en fadøl, eller eksempelvis være med til at slæbe øl. Det skaber fantastiske nye bekendtskaber og venner mens vi hygger os med opgaverne over en kold pils eller en vand.",
        floatImage: floatImages[0],
        lineClamp: "line-clamp-4",
        btnText: "Se billeder",
        href: "/billeder",
      },
      {
        id: "1",
        title: "Om deltagerne . . .",
        iconName: "FaPeopleCarryBox",
        text: "Musikere, gøglere, graffitimalere, kunstnere, 'gæsterne', arrangørerne, crewet, de 'ansvarlige' og det dedikerede helårscrew arbejder allesammen, sammen om at skabe rammerne for festivalen, hvor vi hygger, går amok, fjoller rundt, morer os, og passer på hinanden og naturen. Rammerne er sat for en undergrundsfestival med upcoming bands og fællesskabet i centrum, med stråtækt scene, barer, toiletter m.v. bygget i genbrugsmaterialer og træer fra skovrydning, i naturskønne omgivelser med små søer, en rindende å og de smukke fynske bakker til camping.Vi prøver at spænde vidt, og få et så bredt og broget program som muligt for en ligeså broget medlems skare.",
        floatImage: floatImages[1],
        lineClamp: "line-clamp-4",
        btnText: "Tilmeld dig",
        href: "/tilmelding",
      },
      {
        id: "2",
        title: "Om foreningen Fællestival . . .",
        iconName: "FaUnity",
        text: "Fællestivalen er en almennyttig frivillig forening, hvor I som deltager i årsfesten, og alle os andre der arbejder frivilligt gennem året er medlemmerne. Selve Fællestivalen er vores årlige store medlemsfest. ",
        floatImage: floatImages[2],
        lineClamp: "line-clamp-4",
        btnText: "Bliv medlem",
        href: "/medlemskab",
      },
      {
        id: "3",
        title: "Om kontingent og økonomi . . .",
        iconName: "FaBitcoin",
        text: "Medlemskontingentet som løber månedligt, eller årligt til det afmeldes, går til administration. Selve fest-tilmeldingsbetalingen til årsfesten går til musik, teknik, bespisning af frivillige samt opbygning af festen, og skulle der blive et overskud, går det ubeskåret til vedligehold af den fredede grund og bygninger samt udvikling af grønnere tiltag. \n\nFællestival er non-profit, og ingen har et økonomisk overskud fra arrangementet. Indtægterne fra boder, bar m.v. går udelukkende til at dække udgifter i forbindelse med Fællestival og til at generere almennyttgt indhold for værdigt musik- og fællesskabstrængende Fællaz",
        floatImage: floatImages[3],
        lineClamp: "line-clamp-4",
        btnText: "Bliv medlem",
        href: "/medlemskab",
      },
      {
        id: "4",
        title: "Om lokationen . . .",
        iconName: "FaLocationDot",
        text: "Fællestival befinder sig i en underskøn bakkedal, små 5 km fra Stenstrup på sydfyn. Huset på grunden som ejes af Helle og Jens er en gammel spejderhytte så grunden er ikke ubekendt med leg og støj",
        floatImage: floatImages[4],
        lineClamp: "line-clamp-4",
        btnText: "Se kort",
        href: "kort",
      },
    ],
  },
];
