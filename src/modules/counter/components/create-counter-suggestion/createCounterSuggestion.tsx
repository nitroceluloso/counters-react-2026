import { Pill } from "@/commons/components/pill";
import { PILL_LIST } from "./constants";

import "./createCounterSuggestion.css";

interface CreateCounterSuggestionProps {
  goToNextStep: () => void;
  setSuggestedName: (param: string) => void;
}

export function CreateCounterSuggestion({
  setSuggestedName,
  goToNextStep,
}: CreateCounterSuggestionProps) {
  const clickHandler = (itemName: string) => {
    setSuggestedName(itemName);
    goToNextStep();
  };

  return (
    <div className="create-counter-suggestion">
      <p>Select an example to add it to your counters.</p>
      {PILL_LIST.map((row) => {
        return (
          <div key={row.title}>
            <h4>{row.title}</h4>
            <div className="pill-section">
              {row.items.map((item) => (
                <Pill value={item} key={item} onClick={clickHandler} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
