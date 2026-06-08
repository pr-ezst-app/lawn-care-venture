
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Index from "./pages/Index";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showAdmin ? (
          <Admin onClose={() => setShowAdmin(false)} />
        ) : (
          <Index onAdminOpen={() => setShowAdmin(true)} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;