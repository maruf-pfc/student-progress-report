import type { Course, Highlight } from "@/types/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Competitive Programming",
    description:
      "Master data structures, algorithms, and competitive programming. From basics to advanced problem-solving techniques.",
    price: 299,
    originalPrice: 399,
    duration: "16 weeks",
    level: "Beginner to Intermediate",
    features: [
      "200+ Practice Problems",
      "Weekly Live Sessions",
      "1-on-1 Mentorship",
      "Contest Participation",
      "Industry-Ready Portfolio",
      "Placement Assistance",
    ],
    image: "/courses/cpc.png",
    popular: true,
    modules: 8,
    projects: 5,
    mentorship: true,
  },
  {
    id: 2,
    title: "Job Interview Preparation",
    description:
      "Learn to design scalable systems like Netflix, Uber, and Amazon. Master distributed systems and microservices.",
    price: 399,
    originalPrice: 499,
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    features: [
      "Real System Case Studies",
      "Hands-on Projects",
      "Architecture Reviews",
      "Mock Interviews",
      "Industry Expert Sessions",
      "Certificate of Completion",
    ],
    image: "/courses/jipc.png",
    modules: 6,
    projects: 3,
    mentorship: true,
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Build modern web applications with React, Node.js, and databases. From frontend to deployment.",
    price: 249,
    originalPrice: 349,
    duration: "20 weeks",
    level: "Beginner to Intermediate",
    features: [
      "5+ Full Stack Projects",
      "Modern Tech Stack",
      "Database Design",
      "API Development",
      "Cloud Deployment",
      "Job Preparation",
    ],
    image: "/courses/full-stack-development.jpg",
    modules: 10,
    projects: 8,
    mentorship: false,
  },
];

export const highlights: Highlight[] = [
  {
    icon: "Users",
    title: "Students Trained",
    description: "Successfully mentored and guided",
    value: "5000+",
  },
  {
    icon: "Trophy",
    title: "Placement Rate",
    description: "Students placed in top companies",
    value: "95%",
  },
  {
    icon: "Star",
    title: "Course Rating",
    description: "Average student satisfaction",
    value: "4.9/5",
  },
  {
    icon: "Building",
    title: "Partner Companies",
    description: "Hiring our graduates",
    value: "200+",
  },
];
