import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Star, TrendingUp, Trophy, Users } from "lucide-react";
import { getBatchStudents, currentUser } from "@/data/students";

type SortField =
  | "rank"
  | "name"
  | "university"
  | "totalScore"
  | "overallPercentage";
type SortOrder = "asc" | "desc";

const BatchRanklist = () => {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const batchStudents = useMemo(
    () => getBatchStudents(currentUser.batchId),
    []
  );

  // Filter by search query (name OR university)
  const filteredStudents = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return batchStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.university.toLowerCase().includes(query)
    );
  }, [batchStudents, searchQuery]);

  const sortedStudents = useMemo(() => {
    return [...filteredStudents].sort((a, b) => {
      const aValue: any = a[sortField] ?? 0;
      const bValue: any = b[sortField] ?? 0;

      if (typeof aValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  }, [filteredStudents, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleNameClick = (studentId: number) => {
    navigate(`/profile/${studentId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text">
              Batch {currentUser.batchId} Ranklist
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Performance rankings for all students in Batch {currentUser.batchId}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
          <Card className="bg-gradient-secondary border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex justify-center items-center gap-3 pb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Total Students</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-primary">
                {sortedStudents.length}
              </div>
              <p className="text-sm text-muted-foreground">
                Across all courses
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex justify-center items-center gap-3 pb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Average Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-primary">
                {Math.round(
                  sortedStudents.reduce((acc, s) => acc + s.totalScore, 0) /
                    sortedStudents.length
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Global performance metric
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex justify-center items-center gap-3 pb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Top Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-primary">
                {sortedStudents[0]?.totalScore.toLocaleString() ?? "-"}
              </div>
              <p className="text-sm text-muted-foreground">
                Highest achievement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search by name or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Ranklist Table */}
        <Card className="shadow-soft border-0">
          <div className="p-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="w-20">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort("rank")}
                      className="font-semibold text-muted-foreground hover:text-primary"
                    >
                      Rank <ArrowUpDown className="ml-1 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort("name")}
                      className="font-semibold text-muted-foreground hover:text-primary"
                    >
                      Name <ArrowUpDown className="ml-1 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort("university")}
                      className="font-semibold text-muted-foreground hover:text-primary"
                    >
                      University <ArrowUpDown className="ml-1 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort("totalScore")}
                      className="font-semibold text-muted-foreground hover:text-primary"
                    >
                      Total Score <ArrowUpDown className="ml-1 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort("overallPercentage")}
                      className="font-semibold text-muted-foreground hover:text-primary"
                    >
                      Percentage <ArrowUpDown className="ml-1 h-4 w-4" />
                    </Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    className="hover:bg-muted/50 transition-colors cursor-pointer border-border/30"
                    onClick={() => handleNameClick(student.id)}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {student.rank === 1 && (
                          <Trophy className="h-4 w-4 text-yellow-500" />
                        )}
                        {student.rank === 2 && (
                          <Trophy className="h-4 w-4 text-gray-400" />
                        )}
                        {student.rank === 3 && (
                          <Trophy className="h-4 w-4 text-amber-600" />
                        )}
                        <span
                          className={`${
                            student.rank && student.rank <= 3
                              ? "font-bold text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          #{student.rank ?? "-"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <button
                        className="font-medium text-primary hover:underline text-left hover:cursor-pointer"
                        onClick={() => handleNameClick(student.id)}
                      >
                        {student.name}
                        {student.id === currentUser.id && (
                          <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </button>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {student.university}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {student.totalScore.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-mono font-medium">
                      {student.overallPercentage && (
                        <span
                          className={`${
                            student.overallPercentage >= 80
                              ? "text-green-600 font-semibold"
                              : "text-muted-foreground"
                          }`}
                        >
                          {student.overallPercentage != null
                            ? `${student.overallPercentage}%`
                            : "-"}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BatchRanklist;
