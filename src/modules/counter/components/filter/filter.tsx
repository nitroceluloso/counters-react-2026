import { useState, type KeyboardEvent } from "react";
import { Button } from "@/commons/components/button";
import { InputText } from "@/commons/components/input-text";

import "./filter.css";

interface FilterProps {
  query: string;
  onSearch: (query: string) => void;
}

export function Filter({ onSearch, query }: FilterProps) {
  const [showButton, setShowButton] = useState(false);
  const showCover = showButton && query.length === 0;

  const onSearchHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(ev.currentTarget.value);
  };

  const cleanup = () => {
    onSearch("");
    setShowButton(false);
  };

  const onKeyDownHandler = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key !== "Escape") return;
    cleanup();
  };

  return (
    <div className="filter">
      <InputText
        placeholder="Search counters"
        onChange={onSearchHandler}
        value={query}
        onClick={() => setShowButton(true)}
        onKeyDown={onKeyDownHandler}
      />
      {showButton && (
        <Button variant="TERTIARY" onClick={cleanup}>
          Cancelar
        </Button>
      )}
      {showCover && <div className="cover" />}
    </div>
  );
}
