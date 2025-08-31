import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Trophy,
  Star,
  CheckCircle,
  Clock,
  Building,
  Quote,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { currentUser, getBatchStudents } from "@/data/students";
import { courses, highlights } from "@/data/courses";
import { studentReviews } from "@/data/reviews";

const Home = () => {
  const batchStudents = getBatchStudents(currentUser.batchId);
  const currentStudent = batchStudents.find((s) => s.id === currentUser.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-6 rounded-full bg-primary shadow-lg">
              <GraduationCap className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                CPS Academy
              </h1>
              <p className="text-2xl text-muted-foreground mt-3">
                Master Programming Skills with Expert Mentorship
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their programming
            careers with our comprehensive courses, competitive programming
            training, and personalized mentorship.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/global-leaderboard">View Global Rankings</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>

          {currentStudent && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Badge className="text-lg px-4 py-2">
                Welcome back, {currentStudent.name.split(" ")[0]}!
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose RankWise?</h2>
          <p className="text-xl text-muted-foreground">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const iconMap: Record<string, any> = {
              Users,
              Trophy,
              Star,
              Building,
            };
            const IconComponent = iconMap[highlight.icon];

            return (
              <Card
                key={index}
                className="border bg-card shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <CardHeader className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {highlight.value}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive programs designed to accelerate your programming
            career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="border bg-card shadow-md hover:shadow-lg transition-all duration-300 group relative"
            >
              {course.popular && (
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="space-y-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-4">
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {course.modules}
                    </div>
                    <div className="text-xs text-muted-foreground">Modules</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {course.projects}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {course.mentorship ? "✓" : "×"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mentorship
                    </div>
                  </div>
                </div>

                <Button className="w-full shadow-md cursor-pointer">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Student Reviews Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground">
            Success stories from students who transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentReviews.slice(0, 6).map((review) => (
            <Card
              key={review.id}
              className="border bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.role} at {review.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="relative">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-4">
                    {review.review}
                  </p>
                </div>

                <Badge variant="outline" className="mt-4 text-xs">
                  {review.course}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help you start your programming
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border bg-card shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  shahriar@cpsacademy.io
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border bg-card shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border bg-card shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Education St, Learning City
                </p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
