import type { Student } from "@/types/student";

// Global students across all courses and batches
export const globalStudents: Student[] = [
  // Course 1: Competitive Programming Mastery
  {
    id: 101,
    name: "Alice Johnson",
    university: "MIT",
    totalScore: 2850,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 102,
    name: "Bob Smith",
    university: "Stanford",
    totalScore: 2720,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 103,
    name: "Carol Davis",
    university: "Harvard",
    totalScore: 2680,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 104,
    name: "David Wilson",
    university: "Berkeley",
    totalScore: 2590,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 105,
    name: "Emma Brown",
    university: "CalTech",
    totalScore: 2520,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 106,
    name: "Frank Miller",
    university: "CMU",
    totalScore: 2480,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 107,
    name: "Grace Lee",
    university: "Princeton",
    totalScore: 2430,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 108,
    name: "Henry Taylor",
    university: "Yale",
    totalScore: 2380,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 109,
    name: "Ivy Chen",
    university: "Columbia",
    totalScore: 2340,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 110,
    name: "Jack Anderson",
    university: "Cornell",
    totalScore: 2290,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },

  // Course 2: Job Interview Course
  {
    id: 201,
    name: "Luna Martinez",
    university: "MIT",
    totalScore: 2920,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 202,
    name: "Max Thompson",
    university: "Stanford",
    totalScore: 2800,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 203,
    name: "Nina Rodriguez",
    university: "Harvard",
    totalScore: 2750,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 204,
    name: "Oscar Kim",
    university: "Berkeley",
    totalScore: 2650,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 205,
    name: "Penny Chang",
    university: "CalTech",
    totalScore: 2580,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },

  // Course 3: Full Stack Development
  {
    id: 301,
    name: "Quinn Johnson",
    university: "MIT",
    totalScore: 2780,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 302,
    name: "Ryan Miller",
    university: "Stanford",
    totalScore: 2720,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 303,
    name: "Sarah Wilson",
    university: "Harvard",
    totalScore: 2680,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 304,
    name: "Tyler Davis",
    university: "Berkeley",
    totalScore: 2620,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 305,
    name: "Uma Patel",
    university: "CalTech",
    totalScore: 2550,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
];

// Sort by total score and assign global ranks
globalStudents.sort((a, b) => b.totalScore - a.totalScore);
globalStudents.forEach((student, index) => {
  student.globalRank = index + 1;
  student.overallPercentage = Math.round((student.totalScore / 3000) * 100); // Global percentage
});

// Get batch-specific students
export const getBatchStudents = (batchId: number) => {
  const batchStudents = globalStudents.filter((s) => s.batchId === batchId);

  // Sort by totalScore
  batchStudents.sort((a, b) => b.totalScore - a.totalScore);

  // Assign batch rank and batch-specific percentage
  batchStudents.forEach((student, index) => {
    student.rank = index + 1; // Batch rank
    student.overallPercentage = Math.round((student.totalScore / 3000) * 100); // Batch percentage
  });

  return batchStudents;
};

export const currentUser = {
  id: 101,
  batchId: 6,
  courseId: 1,
};
