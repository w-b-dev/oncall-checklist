import React, { SyntheticEvent, useState } from "react";
import { getCommits } from "../Api/fetchCommits";
import BaseCommitDisplay from "./BaseCommitDisplay";
import { ListCommitDiff } from "./ListCommitDiff";
import { CommitSelector } from "./CommitSelector";

function App(): JSX.Element {
  /*TODO: add Context to share state*/
  const currentSHA = "34";
  const log = getCommits(); /*TODO: Fetch*/
  const [selectedCommit, setSelectedCommit] = useState("");
  const handleCommitSelection = (event: SyntheticEvent<HTMLSelectElement>) => {
    const eventTarget = event.target as HTMLSelectElement;
    const optionSelected = eventTarget.selectedOptions.item(
      0
    ) as HTMLOptionElement;
    setSelectedCommit(optionSelected.value);
  };

  return (
    <main className="App">
      <BaseCommitDisplay currentSHA={currentSHA} />
      <CommitSelector
        log={log}
        onChange={handleCommitSelection}
        currentSHA={currentSHA}
        targetSHA={selectedCommit}
      />
      <ListCommitDiff
        log={log}
        currentSHA={currentSHA}
        targetSHA={selectedCommit}
      />
    </main>
  );
}

export default App;
