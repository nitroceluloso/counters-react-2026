import queryClient from "@/commons/lib/tanstack-query";
import { Counters } from "@/counter";
import { WellCome } from "@/wellcome";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [showWellCome, setShowWellCome] = useState(true);
  return (
    <>
      {showWellCome && <WellCome goToNextPage={() => setShowWellCome(false)} />}
      {!showWellCome && (
        <QueryClientProvider client={queryClient}>
          <Counters />{" "}
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
