import { Button } from "src/components/button";
import "./wellcome.css";

export function WellCome() {
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
        <Button variant="SECONDARY">Get started</Button>
      </div>
    </div>
  );
}
