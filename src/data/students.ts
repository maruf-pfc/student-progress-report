import type { Student } from "@/types/student";

// Global students across all courses and batches
export const globalStudents: Student[] = [
  // Course 1: Competitive Programming Mastery
  {
    id: 101,
    name: "Rakib Hasan",
    university: "BUET",
    totalScore: 2850,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 102,
    name: "Nusrat Jahan",
    university: "Dhaka University",
    totalScore: 2720,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 103,
    name: "Sabbir Ahmed",
    university: "RUET",
    totalScore: 2680,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 104,
    name: "Mim Akter",
    university: "CUET",
    totalScore: 2590,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 105,
    name: "Hasan Mahmud",
    university: "KUET",
    totalScore: 2520,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 106,
    name: "Jannat Ferdous",
    university: "North South University",
    totalScore: 2480,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 107,
    name: "Tahmid Rahman",
    university: "BRAC University",
    totalScore: 2430,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 108,
    name: "Shamima Akter",
    university: "AIUB",
    totalScore: 2380,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 109,
    name: "Arif Hossain",
    university: "IUB",
    totalScore: 2340,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },
  {
    id: 110,
    name: "Mehedi Hasan",
    university: "Jagannath University",
    totalScore: 2290,
    batchId: 6,
    courseId: 1,
    courseName: "Competitive Programming Mastery",
  },

  // Course 2: Job Interview Course
  {
    id: 201,
    name: "Farhana Islam",
    university: "BUET",
    totalScore: 2920,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 202,
    name: "Mahfuz Anwar",
    university: "Dhaka University",
    totalScore: 2800,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 203,
    name: "Shorna Akter",
    university: "North South University",
    totalScore: 2750,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 204,
    name: "Asif Khan",
    university: "BRAC University",
    totalScore: 2650,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },
  {
    id: 205,
    name: "Maliha Chowdhury",
    university: "CUET",
    totalScore: 2580,
    batchId: 5,
    courseId: 2,
    courseName: "Job Interview Course",
  },

  // Course 3: Full Stack Development
  {
    id: 301,
    name: "Rafiul Karim",
    university: "RUET",
    totalScore: 2780,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 302,
    name: "Tanvir Alam",
    university: "KUET",
    totalScore: 2720,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 303,
    name: "Sumaiya Akter",
    university: "AIUB",
    totalScore: 2680,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 304,
    name: "Rakibul Hasan",
    university: "IUB",
    totalScore: 2620,
    batchId: 4,
    courseId: 3,
    courseName: "Full Stack Development",
  },
  {
    id: 305,
    name: "Nazia Rahman",
    university: "Jagannath University",
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
