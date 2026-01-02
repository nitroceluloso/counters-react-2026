import { useState } from "react";
import { Button } from "@/commons/components/button";
import { InputText } from "@/commons/components/input-text";

import "./filter.css";

interface FilterProps {
  // isQueryEmpty: boolean;
  query: string;
  onSearch: (query: string) => void;
}

export function Filter({ onSearch, query }: FilterProps) {
  const [showButton, setShowButton] = useState(false);
  const cleanup = () => {
    onSearch("");
    setShowButton(false);
  };

  return (
    <div className="filter">
      <InputText
        placeholder="Search counters"
        onChange={(ev) => onSearch(ev.currentTarget.value)}
        value={query}
        onClick={() => setShowButton(true)}
      />
      {showButton && (
        <Button variant="TERTIARY" onClick={cleanup}>
          Cancelar
        </Button>
      )}
      {showButton && query.length === 0 && <div className="cover" />}
    </div>
  );
}
