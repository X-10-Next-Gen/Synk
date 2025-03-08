export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
  }
  

  export interface Developer {
    id: string;
    name: string;
    profileImage: string;
    skills: string; // A brief description of their skills or expertise
    location: string; // Optional, could be city or country
    rating: number; // Optional rating for developers
  }
  