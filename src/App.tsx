import { useState } from "react";
import { Counters } from "@/counter/counters";
import { WellCome } from "@/wellcome";

function App() {
  const [showWellCome, setShowWellCome] = useState(true);
  return (
    <>
      {showWellCome && <WellCome goToNextPage={() => setShowWellCome(false)} />}
      {!showWellCome && <Counters />}
    </>
  );
}

export default App;
