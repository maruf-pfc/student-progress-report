import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, ExternalLink, Linkedin, Twitter } from "lucide-react";
import { getTeamHierarchy } from "@/data/team";
import type { TeamMember } from "@/types/team";

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card className="bg-gradient-secondary border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
    <CardHeader className="text-center space-y-4">
      <div className="mx-auto">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-primary font-medium">{member.role}</p>
        <Badge variant="outline" className="mt-2">
          {member.department}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground leading-relaxed">
        {member.bio}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">{member.experience}</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {member.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{member.skills.length - 3} more
            </Badge>
          )}
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        {member.linkedin && (
          <Button size="sm" variant="outline" className="flex-1">
            <Linkedin className="h-4 w-4" />
          </Button>
        )}
        {member.twitter && (
          <Button size="sm" variant="outline" className="flex-1">
            <Twitter className="h-4 w-4" />
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const TeamMembers = () => {
  const hierarchy = getTeamHierarchy();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-primary rounded-full shadow-elegant">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                The passionate educators and professionals behind RankWise
              </p>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Leadership</h2>
            <p className="text-muted-foreground">
              Visionary leadership driving educational excellence
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {hierarchy.ceo.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* Department Heads */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Department Heads</h2>
            <p className="text-muted-foreground">
              Leading our core departments with expertise and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hierarchy.heads.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Members by Department */}
        {hierarchy.heads.map((head) => {
          const teamMembers = hierarchy.team[head.id] || [];
          if (teamMembers.length === 0) return null;

          return (
            <div key={head.id} className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">
                  {head.department} Team
                </h2>
                <p className="text-muted-foreground">
                  Dedicated professionals under {head.name}'s leadership
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Join Our Team CTA */}
        <div className="text-center py-12">
          <Card className="bg-gradient-primary border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Want to Join Our Team?
              </h3>
              <p className="mb-6 text-lg">
                We're always looking for passionate educators and professionals
                to help us democratize quality programming education.
              </p>
              <Button size="lg">
                View Open Positions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
