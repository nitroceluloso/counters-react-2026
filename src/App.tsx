import { useState } from "react";
import { WellCome } from "./pages/wellcome";
import { Counters } from "./pages/counter";

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
