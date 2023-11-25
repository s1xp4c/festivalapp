export const crewPlan = {
  id: "0",
  title: "Crew Fælla",
  price: 75,
  conditions: {
    alleDage: {
      title: "Alle dage",
      available: true,
    },
    mad: {
      title: "Mad",
      available: true,
    },
    parkering: {
      title: "Parkering",
      available: false,
    },
    rabat: {
      title: "Rabat",
      available: false,
    },
  },
};

export const gaestPlan = {
  id: "1",
  title: "Gæst Fælla",
  price: 775,
  conditions: {
    alleDage: {
      title: "Alle dage",
      available: true,
    },
    mad: {
      title: "Mad",
      available: false,
    },
    parkering: {
      title: "Parkering",
      available: false,
    },
    rabat: {
      title: "Rabat",
      available: false,
    },
  },
};

export const helaarsFaellaPlan = {
  id: "2",
  title: "Helårs Fælla",
  price: 775,
  conditions: {
    alleDage: {
      title: "Alle dage",
      available: true,
    },
    mad: {
      title: "Mad",
      available: false,
    },
    parkering: {
      title: "Parkering",
      available: false,
    },
    rabat: {
      title: "Rabat",
      available: true,
    },
    rabatProcent: {
      title: "10%",
      available: true,
    },
  },
};

export const helaarsCrewPlan = {
  id: "3",
  title: "Helårs Crew",
  price: 775,
  conditions: {
    alleDage: {
      title: "Alle dage",
      available: true,
    },
    mad: {
      title: "Mad",
      available: true,
    },
    parkering: {
      title: "Parkering",
      available: true,
    },
    rabat: {
      title: "Rabat",

      available: true,
    },
    rabatProcent: {
      title: "100%",
      available: true,
    },
  },
};

export default [
  crewPlan,
  gaestPlan,
  helaarsCrewPlan,
  helaarsFaellaPlan,
] as const;
