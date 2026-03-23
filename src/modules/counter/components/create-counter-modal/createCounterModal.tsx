import { Button } from "@/commons/components/button";
import { Modal } from "@/commons/components/modal";

import { useState } from "react";
import { CreateCounter } from "@/counter/components/create-counter";
import { CreateCounterSuggestion } from "@/counter/components/create-counter-suggestion";

interface CreateCounterModal {
  isOpen: boolean;
  close: () => void;
}

// ? This could be improved, changing how the modal is created, if you can "stack" modal
// ? (but not the background) this could be simplified.

/**
 * Modal that handles two components for the counter creation flow.
 */
export function CreateCounterModal({ isOpen, close }: CreateCounterModal) {
  const [step, setStep] = useState<"input" | "suggestion">("input");
  const [suggestedName, setSuggestedName] = useState("");
  const [isFormInvalid, setFormInvalid] = useState(true);

  const closeHandler = () => {
    setSuggestedName("");
    setStep("input");
    setFormInvalid(true);
    close();
  };

  const modalTitle = step === "input" ? "create counter" : "examples";

  const option =
    step === "input" ? (
      <Button
        variant="PRIMARY"
        // disabled={isFormInvalid || isCreating}
        disabled={isFormInvalid}
        type="submit"
        form="CREATE_COUNTER"
      >
        Save
      </Button>
    ) : null;

  return (
    <Modal
      isOpen={isOpen}
      title={modalTitle}
      close={closeHandler}
      option={option}
    >
      {step === "input" && (
        <CreateCounter
          setFormInvalid={setFormInvalid}
          goToNextStep={() => setStep("suggestion")}
          suggestedName={suggestedName}
          close={closeHandler}
        />
      )}

      {step === "suggestion" && (
        <CreateCounterSuggestion
          setSuggestedName={setSuggestedName}
          goToNextStep={() => setStep("input")}
        />
      )}
    </Modal>
  );
}
