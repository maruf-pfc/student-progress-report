import type { TeamMember } from "@/types/team";

export const teamMembers: TeamMember[] = [
  // CEO Level (0)
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    department: "Leadership",
    image: "/user.jpg",
    bio: "Visionary leader with 15+ years in tech education. Former Google engineer passionate about democratizing quality programming education.",
    experience: "15+ years",
    skills: [
      "Leadership",
      "Product Strategy",
      "EdTech",
      "Competitive Programming",
    ],
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    level: 0,
  },

  // Department Heads Level (1)
  {
    id: 2,
    name: "Jane Smith",
    role: "Head of Training",
    department: "Training",
    image: "/user.jpg",
    bio: "Expert trainer with background from Microsoft. Specialized in competitive programming and algorithm design.",
    experience: "12+ years",
    skills: [
      "Algorithm Design",
      "Competitive Programming",
      "System Design",
      "Mentoring",
    ],
    linkedin: "https://linkedin.com/in/janesmith",
    level: 1,
    parentId: 1,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Head of Content",
    department: "Content",
    image: "/user.jpg",
    bio: "Content strategist and curriculum designer. Creates engaging learning experiences for complex technical topics.",
    experience: "10+ years",
    skills: [
      "Curriculum Design",
      "Content Strategy",
      "Technical Writing",
      "UX Design",
    ],
    linkedin: "https://linkedin.com/in/mikejohnson",
    level: 1,
    parentId: 1,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Head of Marketing",
    department: "Marketing",
    image: "/user.jpg",
    bio: "Digital marketing expert specializing in EdTech growth. Builds communities and drives student engagement.",
    experience: "8+ years",
    skills: [
      "Digital Marketing",
      "Community Building",
      "Growth Hacking",
      "Social Media",
    ],
    linkedin: "https://linkedin.com/in/sarahwilson",
    level: 1,
    parentId: 1,
  },

  // Trainers Level (2)
  {
    id: 5,
    name: "Alex Chen",
    role: "Senior Trainer",
    department: "Training",
    image: "/user.jpg",
    bio: "Competitive programming champion and software engineer. Mentors students for ICPC and job interviews.",
    experience: "8+ years",
    skills: [
      "Competitive Programming",
      "Data Structures",
      "Algorithms",
      "Interview Prep",
    ],
    linkedin: "https://linkedin.com/in/alexchen",
    level: 2,
    parentId: 2,
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "System Design Trainer",
    department: "Training",
    image: "/user.jpg",
    bio: "Former Netflix engineer with expertise in distributed systems and scalable architecture design.",
    experience: "10+ years",
    skills: [
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Cloud Architecture",
    ],
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    level: 2,
    parentId: 2,
  },

  // Teaching Assistants Level (2)
  {
    id: 7,
    name: "David Kim",
    role: "Teaching Assistant",
    department: "Training",
    image: "/user.jpg",
    bio: "Recent graduate from Stanford with strong competitive programming background. Helps students with practice problems.",
    experience: "2+ years",
    skills: [
      "Problem Solving",
      "Debugging",
      "Student Mentoring",
      "Code Review",
    ],
    linkedin: "https://linkedin.com/in/davidkim",
    level: 2,
    parentId: 2,
  },
  {
    id: 8,
    name: "Lisa Wang",
    role: "Teaching Assistant",
    department: "Training",
    image: "/user.jpg",
    bio: "Full-stack developer turned educator. Assists students with project development and technical guidance.",
    experience: "3+ years",
    skills: [
      "Full Stack Development",
      "Web Technologies",
      "Project Guidance",
      "Technical Support",
    ],
    linkedin: "https://linkedin.com/in/lisawang",
    level: 2,
    parentId: 2,
  },

  // Content Team Level (2)
  {
    id: 9,
    name: "Tom Martinez",
    role: "Content Designer",
    department: "Content",
    image: "/user.jpg",
    bio: "Creative designer focusing on educational content visualization and user experience design.",
    experience: "6+ years",
    skills: [
      "UI/UX Design",
      "Content Visualization",
      "Graphic Design",
      "Video Production",
    ],
    linkedin: "https://linkedin.com/in/tommartinez",
    level: 2,
    parentId: 3,
  },
  {
    id: 10,
    name: "Anna Taylor",
    role: "Video Editor",
    department: "Content",
    image: "/user.jpg",
    bio: "Video production specialist creating engaging educational content and tutorial videos.",
    experience: "5+ years",
    skills: [
      "Video Editing",
      "Motion Graphics",
      "Audio Production",
      "Content Creation",
    ],
    linkedin: "https://linkedin.com/in/annataylor",
    level: 2,
    parentId: 3,
  },

  // Marketing Team Level (2)
  {
    id: 11,
    name: "Chris Brown",
    role: "Social Media Manager",
    department: "Marketing",
    image: "/user.jpg",
    bio: "Social media strategist building engaged communities around programming education and career development.",
    experience: "4+ years",
    skills: [
      "Social Media Strategy",
      "Community Management",
      "Content Marketing",
      "Analytics",
    ],
    linkedin: "https://linkedin.com/in/chrisbrown",
    level: 2,
    parentId: 4,
  },
  {
    id: 12,
    name: "Maya Patel",
    role: "Digital Marketer",
    department: "Marketing",
    image: "/user.jpg",
    bio: "Performance marketing specialist focusing on student acquisition and conversion optimization.",
    experience: "6+ years",
    skills: [
      "Performance Marketing",
      "SEO/SEM",
      "Conversion Optimization",
      "Analytics",
    ],
    linkedin: "https://linkedin.com/in/mayapatel",
    level: 2,
    parentId: 4,
  },
];

// Helper function to get team hierarchy
export const getTeamHierarchy = () => {
  const ceo = teamMembers.filter((member) => member.level === 0);
  const heads = teamMembers.filter((member) => member.level === 1);
  const team = teamMembers.filter((member) => member.level === 2);

  return {
    ceo,
    heads,
    team: team.reduce((acc, member) => {
      const parentId = member.parentId;
      if (!acc[parentId!]) acc[parentId!] = [];
      acc[parentId!].push(member);
      return acc;
    }, {} as Record<number, TeamMember[]>),
  };
};
