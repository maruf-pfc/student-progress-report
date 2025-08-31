import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BatchRanklist from "./pages/BatchRanklist";
import GlobalLeaderboard from "./pages/GlobalLeaderboard";
import TeamMembers from "./pages/TeamMembers";
import ProfileDashboard from "./pages/ProfileDashboard";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Wrap all main pages with Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/batch-ranklist" element={<BatchRanklist />} />
              <Route
                path="/global-leaderboard"
                element={<GlobalLeaderboard />}
              />
              <Route path="/team" element={<TeamMembers />} />
              <Route path="/profile/:id" element={<ProfileDashboard />} />
            </Route>
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
