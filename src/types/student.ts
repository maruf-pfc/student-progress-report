export interface Student {
  id: number;
  name: string;
  university: string;
  totalScore: number;
  batchId: number;
  courseId: number;
  courseName: string;
  rank?: number;
  globalRank?: number;
  overallPercentage?: number;
}
