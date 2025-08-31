import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { User, BookOpen, Target, Calendar, Code, Award } from "lucide-react";
import { mockStudents, mockMetrics } from "@/data/mockData";
import { currentUser } from "@/data/user";

const ProfileDashboard = () => {
  const { id } = useParams<{ id: string }>();
  const studentId = Number(id ?? 0);
  const student = mockStudents.find((s) => s.id === studentId);
  const metrics = mockMetrics[studentId];
  const isOwnProfile = studentId === currentUser.id;

  if (!student || !metrics) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Student not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 bg-gradient-primary rounded-full">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                {student.name}
              </h1>
              <div className="flex items-center justify-center gap-4 mt-2">
                <Badge variant="secondary" className="text-sm">
                  {student.university}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Rank #{student.rank}
                </Badge>
                <Badge className="text-sm">
                  {student.totalScore} pts
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid - Visible to All */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Assignment Progress */}
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Assignment Progress</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Overall Progress
                  </span>
                  <span className="text-sm font-medium">
                    {metrics.assignments.completedClasses}/
                    {metrics.assignments.totalClasses}
                  </span>
                </div>
                <Progress
                  value={
                    (metrics.assignments.completedClasses /
                      metrics.assignments.totalClasses) *
                    100
                  }
                  className="h-2"
                />
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={metrics.assignments.progress}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="week"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar
                      dataKey="completed"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Topic-wise Contests */}
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Topic-wise Contests</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Vjudge Rank
                  </span>
                  <Badge variant="outline">
                    #{metrics.topicContests.vjudgeRank}
                  </Badge>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={metrics.topicContests.progress}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="topic"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar
                      dataKey="score"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Contests */}
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Weekly Contests</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Vjudge Rank
                  </span>
                  <Badge variant="outline">
                    #{metrics.weeklyContests.vjudgeRank}
                  </Badge>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={metrics.weeklyContests.weeklyScores}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="week"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{
                        fill: "hsl(var(--primary))",
                        strokeWidth: 2,
                        r: 4,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Codeforces Contests */}
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Codeforces Progress</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {metrics.codeforcesContests.totalSolved}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Total Solved
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {metrics.codeforcesContests.maxRating}
                    </div>
                    <p className="text-xs text-muted-foreground">Max Rating</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={metrics.codeforcesContests.ratingHistory}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="date"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{
                        fill: "hsl(var(--primary))",
                        strokeWidth: 2,
                        r: 4,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics - Only visible to the logged-in student */}
        {isOwnProfile && (
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">
                  Detailed Performance Metrics
                </CardTitle>
                <Badge className="ml-auto bg-gradient-primary border-0 text-primary-foreground">
                  Private
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Assignments */}
                <AccordionItem value="assignments">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Module 1 Assignments</span>
                      <Badge variant="outline" className="ml-2">
                        {metrics.assignments.completedClasses}/
                        {metrics.assignments.totalClasses} completed
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.assignments.totalClasses}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Total Classes
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.assignments.completedClasses}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Completed Classes
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.assignments.performanceScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Performance Score
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.assignments.participationScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Participation Score
                        </p>
                      </div>
                    </div>

                    {/* Weekly Progress */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                        Weekly Progress
                      </h4>
                      <ResponsiveContainer width="100%" height={150}>
                        <BarChart data={metrics.assignments.progress}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="week"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                            }}
                          />
                          <Bar
                            dataKey="completed"
                            fill="hsl(var(--primary))"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Topic-wise Contests */}
                <AccordionItem value="topic-contests">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Topic-wise Contests</span>
                      <Badge variant="outline" className="ml-2">
                        Rank #{metrics.topicContests.vjudgeRank}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.topicContests.totalContests}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Total Contests
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.topicContests.completedContests}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Completed Contests
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.topicContests.performanceScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Performance Score
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.topicContests.participationScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Participation Score
                        </p>
                      </div>
                    </div>

                    {/* Topic Scores */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                        Topic Scores
                      </h4>
                      <ResponsiveContainer width="100%" height={150}>
                        <BarChart data={metrics.topicContests.progress}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="topic"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                            }}
                          />
                          <Bar
                            dataKey="score"
                            fill="hsl(var(--primary))"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Weekly Contests (Detailed) */}
                <AccordionItem value="weekly-contests">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Weekly Contests</span>
                      <Badge variant="outline" className="ml-2">
                        Rank #{metrics.weeklyContests.vjudgeRank}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Summary cards — show only numeric fields here */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.weeklyContests.totalContests}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Total Contests
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.weeklyContests.completedContests}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Completed Contests
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.weeklyContests.performanceScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Performance Score
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.weeklyContests.participationScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Participation Score
                        </p>
                      </div>
                    </div>

                    {/* Weekly Scores list */}
                    <div className="mt-6 space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground">
                        Weekly Scores
                      </h4>
                      {metrics.weeklyContests.weeklyScores.map((ws) => (
                        <div key={ws.week} className="flex justify-between">
                          <span className="font-medium">{ws.week}</span>
                          <span className="text-sm text-muted-foreground">
                            {ws.score}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Weekly Scores chart */}
                    <div className="mt-4">
                      <ResponsiveContainer width="100%" height={150}>
                        <LineChart data={metrics.weeklyContests.weeklyScores}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="week"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="score"
                            stroke="hsl(var(--primary))"
                            strokeWidth={3}
                            dot={{
                              fill: "hsl(var(--primary))",
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Codeforces Contests */}
                <AccordionItem value="codeforces-contests">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Codeforces Contests</span>
                      <Badge variant="outline" className="ml-2">
                        {metrics.codeforcesContests.maxRating} rating
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.codeforcesContests.totalSolved}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Total Solved Problems
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.codeforcesContests.solvedLastMonth}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Solved (Last Month)
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.codeforcesContests.maxStreak}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Max Streak
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.codeforcesContests.contestsParticipated}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Contests Participated
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-primary">
                          {metrics.codeforcesContests.lastContest}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last Contest
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {metrics.codeforcesContests.maxRating}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Max Contest Rating
                        </p>
                      </div>
                    </div>

                    {/* Rating History */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                        Rating History
                      </h4>
                      <ResponsiveContainer width="100%" height={150}>
                        <LineChart
                          data={metrics.codeforcesContests.ratingHistory}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="date"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="rating"
                            stroke="hsl(var(--primary))"
                            strokeWidth={3}
                            dot={{
                              fill: "hsl(var(--primary))",
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfileDashboard;
