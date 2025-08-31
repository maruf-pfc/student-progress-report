export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  experience: string;
  skills: string[];
  linkedin?: string;
  twitter?: string;
  level: number; // 0: CEO, 1: Department heads, 2: Team members
  parentId?: number; // For hierarchy
}
