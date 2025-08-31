export interface StudentMetrics {
  assignments: {
    totalClasses: number;
    completedClasses: number;
    performanceScore: number;
    participationScore: number;
    progress: { week: string; completed: number; total: number }[];
    details: {
      week: string;
      assignment: string;
      status: "completed" | "pending" | "late";
      score: number;
      maxScore: number;
      submittedAt?: string;
      feedback?: string;
    }[];
  };
  topicContests: {
    totalContests: number;
    completedContests: number;
    performanceScore: number;
    participationScore: number;
    vjudgeRank: number;
    progress: { topic: string; score: number }[];
    details: {
      contest: string;
      topic: string;
      date: string;
      rank: number;
      score: number;
      totalParticipants: number;
      problemsSolved: number;
      totalProblems: number;
    }[];
  };
  weeklyContests: {
    totalContests: number;
    completedContests: number;
    performanceScore: number;
    participationScore: number;
    vjudgeRank: number;
    weeklyScores: { week: string; score: number }[];
    details: {
      week: string;
      contest: string;
      date: string;
      rank: number;
      score: number;
      totalParticipants: number;
      problemsSolved: number;
      totalProblems: number;
      duration: string;
    }[];
  };
  codeforcesContests: {
    totalSolved: number;
    solvedLastMonth: number;
    maxStreak: number;
    contestsParticipated: number;
    lastContest: string;
    maxRating: number;
    ratingHistory: { date: string; rating: number }[];
    details: {
      contest: string;
      date: string;
      rank: number;
      rating: number;
      ratingChange: number;
      problemsSolved: number;
      totalProblems: number;
    }[];
  };
}
