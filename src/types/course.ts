export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  features: string[];
  image: string;
  popular?: boolean;
  modules: number;
  projects: number;
  mentorship: boolean;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
  value: string;
}
