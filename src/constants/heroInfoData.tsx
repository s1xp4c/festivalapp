// import DungionIcon from ":/constants/icons";
import { FaInfoCircle } from "react-icons/fa";
import festivalFloatImage from "../../public/hero/1.jpg";
import deltagerFloatImage from "../../public/hero/2.jpg";
import foreningenFloatImage from "../../public/hero/3.jpg";
import medlemmerFloatImage from "../../public/hero/5.jpg";
import kortFloatImage from "../../public/hero/6.jpg";

export const headerInfoLinks = [
  {
    id: "0",
    title: "Fællestival",
    href: "events/Faellestival",
    subText:
      "Et helt almindeligt gæste og Crew Fælla medlemskab er for dig der bare gerne vil holde en kæmpe fest, en enkelt gang om året i Snævren, uge 29.\nDet skal koste dig ovenstående symbolske beløb af inflationsramte dubloner årligt fra du melder dig ind i foreningen. Ønsker du ik' længere at støtte eller deltage i Fællestival's foreningsliv, kan du selvfølgelig bare afmelde dig, og dit kontingent stopper når det udløber.\n\nFor denne formue, får du udover lov til at købe billet til årsfesten, selvfølgelig ås et løbende nyhedsbrev ind i din valgte e-brevbakke, med alt hvad der tumler i communitiet og Snævren gennem året.",
    date: "10. nov. 2024",
    month: "",
    year: "",
  },
  {
    id: "1",
    title: "Julefrokost",
    href: "events/julefrokost",
    subText:
      "For Fællas der gerne vil ha' mulighed for at fange den årlige fest i Snævren i uge 29, men har lyst og mulighed for at støtte foreningen og sammenholdet med den ekstra mønt. Kontingentet koster 'fri' donation månedligt af inflationsramte stakater. (Dog sefølig minimum almindelig gæstemedlemskontingent)\n Ønsker du ik' længere at støtte eller deltage i Fællestival, kan du selvfølgelig bare afmelde dig, og dit kontingent stopper når det udløber.\n\nFor denne formuebeskattede rundbarbering, får du udover lov til at købe billet til årsfesten, selvfølgelig ås et løbende nyhedsbrev ind i din overfyldte e-brevbakke, med alt hvad der brænder af stort og småt i FÆLLA's communitiet og Snævren gennem året.",
    date: "10. nov. 2024",
    month: "",
    year: "",
  },
  {
    id: "2",
    title: "PåskeParty",
    href: "events/paaskeparty",
    subText:
      "De gæve kæmper, bestående af Arrangører, Bestyrelsen og Crewet der gennem hele året lægger den tunge indsats med vedligeholdelse, byggerier, administration og generel najsliggørelse af Snævren så vi allesammen kan nyde, og fyre den af sammen i den smukke, fredede bakkedal på sydfyn. Det er sefølig ås for dig der ønsker medindflydelse, og bare ønsker at få brugt kroppen, og når støvet har lagt sig - Fyre den af med dine medFÆLLAS til alle byggeweekender, jule og påskefrokoster og alle de andre events vi fyrer af gennem året. Ovenstående '1 fadbamse i byen'-pris er en månedlig affære som er med til at dække Snævrens løbende udgifter ved at ha' os rendende i tide og utide og forstyrre Helle og Jens på deres undervurderede perle af en gammel spejdergrund",
    date: "10. nov. 2024",
    month: "",
    year: "",
  },
];

export const headerCtaButtonInfo = {
  id: "CtaMedlemskab",
  title: "★ BLIV FÆLLA ★",
  href: "medlemskab/",
};

export const infoHeaderInfo = {
  headerInfo: [
    {
      title: "Lidt om ås ...... ",
      subtitle1: "Fællestival er en . . . . .   👽",
      subtitle2:
        "Til højre kan du læse mere om forskellige typer af FÆLLAskab, eller hamre knappen i bund herunder med det samme.     💜",
      headerInfoIcon: FaInfoCircle,
      headerInfoLinks: headerInfoLinks,
    },
  ],
};
export const allInfos = {
  InfoTypes: [
    {
      id: "0",
      title: "Crew Fælla",
      date: "10/11/2024",
      featureHeader: "Some stuff",
      features: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: false },
      ],
    },
    {
      id: "1",
      title: "Gæste Fælla",
      date: "10/11/2024",
      featureHeader: "Dingleberry",
      features: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: false },
      ],
    },
    {
      id: "2",
      title: "Helårs Fælla",
      date: "10/11/2024",
      featureHeader: "Anger stuff",
      features: [
        { title: "Alle dage", available: true },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: true },
      ],
    },
    {
      id: "3",
      title: "Dags Fælla",
      date: "10/11/2024",
      featureHeader: "Some julepis",
      features: [
        { title: "Alle dage", available: false },
        { title: "MoKost", available: true },
        { title: "AfMad", available: false },
        { title: "Parkering", available: false },
      ],
    },
  ],
};

export const floatImage = {
  images: [
    {
      id: "0",
      alt: "Festivalen",
      image: festivalFloatImage,
    },
    {
      id: "1",
      alt: "Deltagerne",
      image: deltagerFloatImage,
    },
    {
      id: "2",
      alt: "Foreningen",
      image: foreningenFloatImage,
    },
    {
      id: "3",
      alt: "Økonomi",
      image: medlemmerFloatImage,
    },
    {
      id: "4",
      alt: "Kort",
      image: kortFloatImage,
    },
  ],
};

export const generelInfo = {
  header: [
    {
      title: "Om Fællestival",
    },
  ],
  content: [
    {
      id: "0",
      title: "Om festivalen . . .",
      icon: FaInfoCircle,
      text: "Fællestival er en 100% non-profit festival og forening, og som man kan drage af titlen, er det en festival i fællesskabets ånd, hvor alle (som har lyst) hjælper til og er med til at skabe et lækkert årligt arrangement, og gennem året vedligeholde bygninger, og den fredede natur i området. Det betyder blandt andet også, at alle gæster giver en hånd med under festivalen med små hjælpeopgaver, og bl.a. er med til at rydde op efter sig selv og nattens dansefest, skænke en fadøl, eller eksempelvis være med til at slæbe øl. Det skaber fantastiske nye bekendtskaber og venner mens vi hygger os med opgaverne over en kold pils eller en vand.",
      floatImage: floatImage.images[0],
      lineCap: 4,
      btnText: "Se billeder",
    },
    {
      id: "1",
      title: "Om deltagerne . . .",
      icon: FaInfoCircle,
      text: "Musikere, gøglere, graffitimalere, kunstnere, 'gæsterne', arrangørerne, crewet, de 'ansvarlige' og det dedikerede helårscrew arbejder allesammen, sammen om at skabe rammerne for festivalen, hvor vi hygger, går amok, fjoller rundt, morer os, og passer på hinanden og naturen. Rammerne er sat for en undergrundsfestival med upcoming bands og fællesskabet i centrum, med stråtækt scene, barer, toiletter m.v. bygget i genbrugsmaterialer og træer fra skovrydning, i naturskønne omgivelser med små søer, en rindende å og de smukke fynske bakker til camping.Vi prøver at spænde vidt, og få et så bredt og broget program som muligt for en ligeså broget medlems skare.",
      floatImage: floatImage.images[1],
      lineCap: 4,
      btnText: "Tilmeld dig",
    },
    {
      id: "2",
      title: "Om foreningen Fællestival . . .",
      icon: FaInfoCircle,
      text: "Fællestivalen er en almennyttig frivillig forening, hvor I som deltager i årsfesten, og alle os andre der arbejder frivilligt gennem året er medlemmerne. Selve Fællestivalen er vores årlige store medlemsfest. ",
      floatImage: floatImage.images[2],

      lineCap: 4,
      btnText: "Bliv medlem",
    },
    {
      id: "3",
      title: "Om kontingent og økonomi . . .",
      icon: FaInfoCircle,
      text: "Medlemskontingentet som løber månedligt, eller årligt til det afmeldes, går til administration. Selve fest-tilmeldingsbetalingen til årsfesten går til musik, teknik, bespisning af frivillige samt opbygning af festen, og skulle der blive et overskud, går det ubeskåret til vedligehold af den fredede grund og bygninger samt udvikling af grønnere tiltag. \n\nFællestival er non-profit, og ingen har et økonomisk overskud fra arrangementet. Indtægterne fra boder, bar m.v. går udelukkende til at dække udgifter i forbindelse med Fællestival og til at generere almennyttgt indhold for værdigt musik- og fællesskabstrængende Fællaz",
      floatImage: floatImage.images[3],
      lineCap: 4,
      btnText: "Bliv medlem",
    },
    {
      id: "4",
      title: "Om lokationen . . .",
      icon: FaInfoCircle,
      text: "Fællestival befinder sig i en underskøn bakkedal, små 5 km fra Stenstrup på sydfyn. Huset på grunden som ejes af Helle og Jens er en gammel spejderhytte så grunden er ikke ubekendt med leg og støj",
      floatImage: floatImage.images[4],
      lineCap: 4,
      btnText: "Se kort",
      href: "kort",
    },
  ],
};

export default allInfos;
