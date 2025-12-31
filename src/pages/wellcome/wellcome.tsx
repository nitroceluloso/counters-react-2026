import { Button } from "src/components/button";
import "./wellcome.css";

interface WellcomeProps {
  goToNextPage: () => void;
}

export function WellCome({ goToNextPage }: WellcomeProps) {
  return (
    <div id="WellCome-page">
      <div className="img-section">
        <img src="/wellcome.png" alt="" />
      </div>
      <div className="text-section">
        <h1>Welcome to Counters</h1>
        <p>
          Capture cups of lattes, frapuccinos, or anything else that can be
          counted.
        </p>
      </div>
      <div className="action">
        <Button onClick={goToNextPage} variant="SECONDARY">
          Get started
        </Button>
      </div>
    </div>
  );
}
