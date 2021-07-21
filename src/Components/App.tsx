import React, { SyntheticEvent, useEffect, useState } from "react";
import { getCommits } from "../Api/fetchCommits";
import BaseCommitDisplay from "./BaseCommitDisplay";
import { ListCommitDiff } from "./ListCommitDiff";
import { CommitSelector } from "./CommitSelector";
import { Commit } from "../types";
import { useDeployedCommit } from "../customHooks/useDeployedCommit";

function App(): JSX.Element {
  /*TODO: add Context to share state*/
  const [log, setLog] = useState<Commit[]>([]);
  const currentSHA = useDeployedCommit();
  useEffect(() => {
    getCommits().then((res) => setLog(res.reverse()));
  }, []);

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
