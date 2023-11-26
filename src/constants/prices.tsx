// import DungionIcon from ":/constants/icons";
import { FaTicketAlt } from "react-icons/fa";

export const headerInfoLinks = [
  {
    id: "0",
    title: "Gæst og Crew FÆLLAS",
    href: "info/gaest",
    subText:
      "Et helt almindeligt gæste og Crew Fælla medlemskab er for dig der bare gerne vil holde en kæmpe fest, en enkelt gang om året i Snævren, uge 29.\nDet skal koste dig ovenstående symbolske beløb af inflationsramte dubloner årligt fra du melder dig ind i foreningen. Ønsker du ik' længere at støtte eller deltage i Fællestival's foreningsliv, kan du selvfølgelig bare afmelde dig, og dit kontingent stopper når det udløber.\n\nFor denne formue, får du udover lov til at købe billet til årsfesten, selvfølgelig ås et løbende nyhedsbrev ind i din valgte e-brevbakke, med alt hvad der tumler i communitiet og Snævren gennem året.",
    rate: 25,
    currency: "kr.",
    interval: "år.",
  },
  {
    id: "1",
    title: "Support FÆLLAS",
    href: "info/support",
    subText:
      "For Fællas der gerne vil ha' mulighed for at fange den årlige fest i Snævren i uge 29, men har lyst og mulighed for at støtte foreningen og sammenholdet med den ekstra mønt. Kontingentet koster 'fri' donation månedligt af inflationsramte stakater. (Dog sefølig minimum almindelig gæstemedlemskontingent)\n Ønsker du ik' længere at støtte eller deltage i Fællestival, kan du selvfølgelig bare afmelde dig, og dit kontingent stopper når det udløber.\n\nFor denne formuebeskattede rundbarbering, får du udover lov til at købe billet til årsfesten, selvfølgelig ås et løbende nyhedsbrev ind i din overfyldte e-brevbakke, med alt hvad der brænder af stort og småt i FÆLLA's communitiet og Snævren gennem året.",
    rate: 25,
    currency: "kr.",
    interval: "md",
  },
  {
    id: "2",
    title: "HelårsCrew FÆLLAS",
    href: "info/aarsgaest",
    subText:
      "De gæve kæmper, bestående af Arrangører, Bestyrelsen og Crewet der gennem hele året lægger den tunge indsats med vedligeholdelse, byggerier, administration og generel najsliggørelse af Snævren så vi allesammen kan nyde, og fyre den af sammen i den smukke, fredede bakkedal på sydfyn. Det er sefølig ås for dig der ønsker medindflydelse, og bare ønsker at få brugt kroppen, og når støvet har lagt sig - Fyre den af med dine medFÆLLAS til alle byggeweekender, jule og påskefrokoster og alle de andre events vi fyrer af gennem året. Ovenstående '1 fadbamse i byen'-pris er en månedlig affære som er med til at dække Snævrens løbende udgifter ved at ha' os rendende i tide og utide og forstyrre Helle og Jens på deres undervurderede perle af en gammel spejdergrund",
    rate: 50,
    currency: "kr.",
    interval: "md",
  },
];

export const headerCtaButtonInfo = {
  id: "CtaMedlemskab",
  title: "★ BLIV FÆLLA NU ★",
  href: "medlemskab/",
};

export const priceHeaderInfo = {
  headerInfo: [
    {
      title: "BILLETTER",
      subtitle1:
        "For at deltage i foreningningsevents skal man være medlem.   👽",
      subtitle2:
        "Til højre kan du læse mere om forskellige typer af FÆLLAskab, eller hamre knappen i bund herunder med det samme.     💜",
      headerInfoIcon: FaTicketAlt,
      headerInfoLinks: headerInfoLinks,
    },
  ],
};
export const allTickets = {
  plans: [
    {
      id: "0",
      title: "Crew Fælla",
      price: 0,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: true },
        { title: "Parkering", available: false },
      ],
    },
    {
      id: "1",
      title: "Gæste Fælla",
      price: 890,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: false },
      ],
    },
    {
      id: "2",
      title: "Helårs Fælla",
      price: 0,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: true },
        { title: "Parkering", available: true },
      ],
    },
    {
      id: "3",
      title: "Dags Fælla",
      price: 295,
      conditions: [
        { title: "Alle dage", available: false },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: false },
      ],
    },
  ],
};
export default allTickets;
