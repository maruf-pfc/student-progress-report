import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy, Medal, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { globalStudents } from "@/data/students";

const GlobalLeaderboard = () => {
  const [search, setSearch] = useState("");

  // Filter students by name or university
  const filteredStudents = globalStudents.filter((student) => {
    const nameMatch = student.name.toLowerCase().includes(search.toLowerCase());
    const uniMatch = student.university
      .toLowerCase()
      .includes(search.toLowerCase());
    return nameMatch || uniMatch;
  });

  const topPerformers = filteredStudents.slice(0, 3);

  const trophyColors = ["text-yellow-500", "text-gray-400", "text-amber-600"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-primary rounded-full shadow-soft">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text">
                Global Leaderboard
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                Top performers across all courses and batches
              </p>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name or university..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Top 3 Winners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPerformers.map((student, index) => {
            const icons = [Trophy, Medal, Award];
            const IconComponent = icons[index];

            const colors = [
              "text-yellow-500",
              "text-gray-400",
              "text-amber-600",
            ];
            const bgColors = [
              "bg-yellow-500/10",
              "bg-gray-400/10",
              "bg-amber-600/10",
            ];

            return (
              <Card
                key={student.id}
                className="bg-gradient-secondary border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group"
              >
                <CardHeader className="text-center space-y-4">
                  <div
                    className={`p-4 ${bgColors[index]} rounded-full mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${colors[index]}`} />
                  </div>
                  <div>
                    <Badge className="bg-gradient-primary border-0 text-primary text-lg px-3 py-1 mb-2">
                      Rank #{student.globalRank ?? "-"}
                    </Badge>
                    <h3 className="text-2xl font-bold">{student.name}</h3>
                    <p className="text-muted-foreground">
                      {student.university}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {student.totalScore.toLocaleString()}
                  </div>
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-sm">
                      {student.courseName}
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      Batch {student.batchId}
                    </Badge>
                  </div>
                  <Button
                    asChild
                    className="w-1/3 bg-gradient-primary hover:bg-gradient-accent border text-primary shadow-elegant mt-4"
                  >
                    <Link to={`/profile/${student.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Full Leaderboard Table */}
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" />
              Complete Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>University</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow
                      key={student.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-1">
                          {student.globalRank && student.globalRank <= 3 && (
                            <Trophy
                              className={`h-5 w-5 ${
                                trophyColors[student.globalRank - 1]
                              }`}
                            />
                          )}
                          <Badge variant="secondary">
                            #{student.globalRank ?? "-"}
                          </Badge>
                        </div>
                      </TableCell>

                      <TableCell>
                        <Link
                          to={`/profile/${student.id}`}
                          className="font-medium text-primary hover:underline"
                        >
                          {student.name}
                        </Link>
                      </TableCell>

                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {student.courseName}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <Badge variant="secondary" className="text-xs">
                          Batch {student.batchId}
                        </Badge>
                      </TableCell>

                      <TableCell className="text-muted-foreground">
                        {student.university}
                      </TableCell>

                      <TableCell className="text-right font-mono font-medium">
                        {student.totalScore.toLocaleString()}
                      </TableCell>

                      <TableCell className="text-right">
                        {student.overallPercentage != null ? (
                          <span
                            className={`${
                              student.overallPercentage >= 80
                                ? "text-green-600 font-semibold"
                                : "text-muted-foreground"
                            }`}
                          >
                            {student.overallPercentage}%
                          </span>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalLeaderboard;
