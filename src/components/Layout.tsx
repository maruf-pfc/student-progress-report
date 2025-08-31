import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-bold text-primary">
            CP Course
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/batch-ranklist" className="hover:text-primary">
              Batch Ranklist
            </Link>
            <Link to="/global-leaderboard" className="hover:text-primary">
              Leaderboard
            </Link>
            <Link to="/team" className="hover:text-primary">
              Team
            </Link>
            <Link to="/profile/101" className="hover:text-primary">
              My Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} CP Course. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
