import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrciffee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false,
  },
  {
    propertyName: "Sunset Paradise Villa",
    location: {
      street: "456 Beachfront Lane",
      city: "Cancun",
      country: "Mexico",
    },
    rate: 4.85,
    currency: "$",
    amount: 750,
    favorite: true,
  },
  {
    propertyName: "Golden Sands Retreat",
    location: {
      street: "789 Coastal Road",
      city: "Gold Coast",
      country: "Australia",
    },
    rate: 4.92,
    currency: "$",
    amount: 900,
    favorite: false,
  },
  {
    propertyName: "Azure Horizon Cottage",
    location: {
      street: "321 Seaside Avenue",
      city: "Nice",
      country: "France",
    },
    rate: 4.78,
    currency: "$",
    amount: 680,
    favorite: false,
  },
  {
    propertyName: "Palm Haven Villa",
    location: {
      street: "654 Palm Street",
      city: "Bali",
      country: "Indonesia",
    },
    rate: 4.88,
    currency: "$",
    amount: 1200,
    favorite: true,
  },
  {
    propertyName: "Ocean Breeze Mansion",
    location: {
      street: "987 Marina Drive",
      city: "Dubai",
      country: "UAE",
    },
    rate: 4.95,
    currency: "$",
    amount: 2500,
    favorite: false,
  },
  {
    propertyName: "Seaside Serenity House",
    location: {
      street: "147 Ocean View Road",
      city: "Phuket",
      country: "Thailand",
    },
    rate: 4.81,
    currency: "$",
    amount: 1500,
    favorite: false,
  },
  {
    propertyName: "Coral Reef Villa",
    location: {
      street: "258 Coral Lane",
      city: "Maldives",
      country: "Maldives",
    },
    rate: 4.89,
    currency: "$",
    amount: 850,
    favorite: false,
  },
  {
    propertyName: "Tropical Bliss Retreat",
    location: {
      street: "369 Palm Beach Road",
      city: "Maui",
      country: "USA",
    },
    rate: 4.83,
    currency: "$",
    amount: 720,
    favorite: false,
  },
  {
    propertyName: "Emerald Bay Cottage",
    location: {
      street: "741 Bayfront Avenue",
      city: "Santorini",
      country: "Greece",
    },
    rate: 4.9,
    currency: "$",
    amount: 780,
    favorite: true,
  },
];

const FILTERS: string[] = [
  "Mansion",
  "CountrySide",
  "Villa",
  "Tropical",
  "New",
  "Amazing",
  "Beachfront",
  "Luxury",
  "Family-Friendly",
  "Pet-Friendly",
  "Secluded",
];

// Data for types of accommodation
export const TypesOfAcommodation: AcommodationProps[] = [
  {
    name: "Rooms",
    image: "/assets/logos/living-room 1.png",
  },
  {
    name: "Mansion",
    image: "/assets/logos/mansion 1.png",
  },
  {
    name: "Countryside",
    image: "/assets/logos/farm 1.png",
  },
  {
    name: "Villa",
    image: "/assets/logos/villa 1.png",
  },
  {
    name: "Tropical",
    image: "/assets/logos/palm-tree 1.png",
  },
  {
    name: "New",
    image: "/assets/logos/key-chain 1.png",
  },
  {
    name: "Amazing pool",
    image: "/assets/logos/swimming-pool 1.png",
  },
  {
    name: "Beech house",
    image: "/assets/logos/vacations 1.png",
  },
  {
    name: "Island",
    image: "/assets/logos/island (1) 1.png",
  },
  {
    name: "Camping",
    image: "/assets/logos/tent 1.png",
  },
  {
    name: "Apartement",
    image: "/assets/logos/apartment 1.png",
  },
  {
    name: "House",
    image: "/assets/logos/home 1.png",
  },
  {
    name: "Lake front",
    image: "/assets/logos/cottage 1.png",
  },
  {
    name: "Farm house",
    image: "/assets/logos/barn 1.png",
  },
  {
    name: "Tree house",
    image: "/assets/logos/treehouse (1) 1.png",
  },
  {
    name: "Cabins",
    image: "/assets/logos/cabin 1.png",
  },
  {
    name: "Castles",
    image: "/assets/logos/castle-tower 1.png",
  },
  {
    name: "Lakeside",
    image: "/assets/logos/farm 1-1.png",
  },
];

export { SAMPLE_DATA, FILTERS };
