import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, User, Home } from "lucide-react";
import { currentUser } from "@/data/user";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: Home,
    },
    {
      to: "/batch-ranklist",
      label: "Batch Ranklist",
      icon: Trophy,
    },
    {
      to: "/global-leaderboard",
      label: "Leaderboard",
      icon: Trophy,
    },
    {
      to: `/profile/${currentUser.id}`,
      label: "My Profile",
      icon: User,
    },
  ];

  return (
    <Card className="bg-gradient-secondary border-0 shadow-soft">
      <div className="p-4">
        <nav className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.to;

            return (
              <Button
                key={item.to}
                asChild
                variant={isActive ? "default" : "ghost"}
                className={`${
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                    : "hover:bg-background/50"
                } transition-all duration-300`}
              >
                <Link to={item.to} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </Card>
  );
};

export default Navigation;
