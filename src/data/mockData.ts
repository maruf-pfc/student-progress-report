export interface Student {
  id: number;
  name: string;
  university: string;
  totalScore: number;
  batchId: number;
  rank?: number;
}

export interface StudentMetrics {
  assignments: {
    totalClasses: number;
    completedClasses: number;
    performanceScore: number;
    participationScore: number;
    progress: { week: string; completed: number; total: number }[];
  };
  topicContests: {
    totalContests: number;
    completedContests: number;
    performanceScore: number;
    participationScore: number;
    vjudgeRank: number;
    progress: { topic: string; score: number }[];
  };
  weeklyContests: {
    totalContests: number;
    completedContests: number;
    performanceScore: number;
    participationScore: number;
    vjudgeRank: number;
    weeklyScores: { week: string; score: number }[];
  };
  codeforcesContests: {
    totalSolved: number;
    solvedLastMonth: number;
    maxStreak: number;
    contestsParticipated: number;
    lastContest: string;
    maxRating: number;
    ratingHistory: { date: string; rating: number }[];
  };
}

export const mockStudents: Student[] = [
  {
    id: 101,
    name: "Alice Johnson",
    university: "MIT",
    totalScore: 2850,
    batchId: 6,
  },
  {
    id: 102,
    name: "Bob Smith",
    university: "Stanford",
    totalScore: 2720,
    batchId: 6,
  },
  {
    id: 103,
    name: "Carol Davis",
    university: "Harvard",
    totalScore: 2680,
    batchId: 6,
  },
  {
    id: 104,
    name: "David Wilson",
    university: "Berkeley",
    totalScore: 2590,
    batchId: 6,
  },
  {
    id: 105,
    name: "Emma Brown",
    university: "CalTech",
    totalScore: 2520,
    batchId: 6,
  },
  {
    id: 106,
    name: "Frank Miller",
    university: "CMU",
    totalScore: 2480,
    batchId: 6,
  },
  {
    id: 107,
    name: "Grace Lee",
    university: "Princeton",
    totalScore: 2430,
    batchId: 6,
  },
  {
    id: 108,
    name: "Henry Taylor",
    university: "Yale",
    totalScore: 2380,
    batchId: 6,
  },
  {
    id: 109,
    name: "Ivy Chen",
    university: "Columbia",
    totalScore: 2340,
    batchId: 6,
  },
  {
    id: 110,
    name: "Jack Anderson",
    university: "Cornell",
    totalScore: 2290,
    batchId: 6,
  },
];

// Add ranks to students
mockStudents.sort((a, b) => b.totalScore - a.totalScore);
mockStudents.forEach((student, index) => {
  student.rank = index + 1;
});

export const mockMetrics: Record<number, StudentMetrics> = {
  101: {
    assignments: {
      totalClasses: 24,
      completedClasses: 22,
      performanceScore: 92,
      participationScore: 95,
      progress: [
        { week: "Week 1", completed: 4, total: 4 },
        { week: "Week 2", completed: 3, total: 4 },
        { week: "Week 3", completed: 4, total: 4 },
        { week: "Week 4", completed: 4, total: 4 },
        { week: "Week 5", completed: 4, total: 4 },
        { week: "Week 6", completed: 3, total: 4 },
      ],
    },
    topicContests: {
      totalContests: 8,
      completedContests: 7,
      performanceScore: 88,
      participationScore: 87,
      vjudgeRank: 12,
      progress: [
        { topic: "Arrays", score: 95 },
        { topic: "Strings", score: 88 },
        { topic: "Trees", score: 92 },
        { topic: "Graphs", score: 85 },
        { topic: "DP", score: 78 },
      ],
    },
    weeklyContests: {
      totalContests: 12,
      completedContests: 10,
      performanceScore: 85,
      participationScore: 83,
      vjudgeRank: 8,
      weeklyScores: [
        { week: "Week 1", score: 85 },
        { week: "Week 2", score: 92 },
        { week: "Week 3", score: 78 },
        { week: "Week 4", score: 88 },
        { week: "Week 5", score: 95 },
        { week: "Week 6", score: 82 },
      ],
    },
    codeforcesContests: {
      totalSolved: 245,
      solvedLastMonth: 32,
      maxStreak: 15,
      contestsParticipated: 18,
      lastContest: "Codeforces Round #912",
      maxRating: 1650,
      ratingHistory: [
        { date: "Jan", rating: 1200 },
        { date: "Feb", rating: 1350 },
        { date: "Mar", rating: 1420 },
        { date: "Apr", rating: 1550 },
        { date: "May", rating: 1650 },
        { date: "Jun", rating: 1580 },
      ],
    },
  },
  // Add more mock data for other students as needed
  102: {
    assignments: {
      totalClasses: 24,
      completedClasses: 20,
      performanceScore: 88,
      participationScore: 90,
      progress: [
        { week: "Week 1", completed: 3, total: 4 },
        { week: "Week 2", completed: 4, total: 4 },
        { week: "Week 3", completed: 3, total: 4 },
        { week: "Week 4", completed: 4, total: 4 },
        { week: "Week 5", completed: 3, total: 4 },
        { week: "Week 6", completed: 3, total: 4 },
      ],
    },
    topicContests: {
      totalContests: 8,
      completedContests: 6,
      performanceScore: 82,
      participationScore: 80,
      vjudgeRank: 18,
      progress: [
        { topic: "Arrays", score: 88 },
        { topic: "Strings", score: 85 },
        { topic: "Trees", score: 78 },
        { topic: "Graphs", score: 82 },
        { topic: "DP", score: 75 },
      ],
    },
    weeklyContests: {
      totalContests: 12,
      completedContests: 9,
      performanceScore: 80,
      participationScore: 78,
      vjudgeRank: 15,
      weeklyScores: [
        { week: "Week 1", score: 78 },
        { week: "Week 2", score: 85 },
        { week: "Week 3", score: 72 },
        { week: "Week 4", score: 82 },
        { week: "Week 5", score: 88 },
        { week: "Week 6", score: 76 },
      ],
    },
    codeforcesContests: {
      totalSolved: 198,
      solvedLastMonth: 28,
      maxStreak: 12,
      contestsParticipated: 15,
      lastContest: "Educational Codeforces Round #165",
      maxRating: 1480,
      ratingHistory: [
        { date: "Jan", rating: 1100 },
        { date: "Feb", rating: 1280 },
        { date: "Mar", rating: 1320 },
        { date: "Apr", rating: 1450 },
        { date: "May", rating: 1480 },
        { date: "Jun", rating: 1420 },
      ],
    },
  },
};
