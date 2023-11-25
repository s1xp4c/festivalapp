export interface Condition {
  title: string;
  available: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  conditions: Condition[];
}

export const allTickets = {
  title: "BILLETPRISER",
  subtitle1: "Indgang til den årlige foreningsfest kræver medlemskab",
  subtitle2: "Hvilken slags Fælla er du?",
  plans: [
    {
      id: "0",
      title: "Crew Fælla",
      price: 75,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "Mad", available: true },
        { title: "Parkering", available: false },
        { title: "Rabat", available: false },
      ],
    },
    {
      id: "1",
      title: "Gæst Fælla",
      price: 775,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "Mad", available: false },
        { title: "Parkering", available: false },
        { title: "Rabat", available: false },
      ],
    },
    {
      id: "2",
      title: "Helårs Fælla",
      price: 775,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "Mad", available: false },
        { title: "Parkering", available: true },
        { title: "Rabat", available: true },
      ],
    },
    {
      id: "3",
      title: "Helårs Crew",
      price: 775,
      conditions: [
        { title: "Alle dage", available: true },
        { title: "Mad", available: true },
        { title: "Parkering", available: true },
        { title: "Rabat", available: true },
      ],
    },
  ],
};
export default allTickets;
