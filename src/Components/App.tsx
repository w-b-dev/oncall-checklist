import React, { SyntheticEvent, useEffect, useState } from "react";
import { getCommits } from "../Api/fetchCommits";
import BaseCommitDisplay from "./BaseCommitDisplay";
import { ListCommitDiff } from "./ListCommitDiff";
import { CommitSelector } from "./CommitSelector";
import { Commit } from "../types";

function App(): JSX.Element {
  /*TODO: add Context to share state*/
  const [currentSHA, setCurrentSHA] = useState<string>("");
  const [log, setLog] = useState<Commit[]>([]);
  useEffect(() => {
    getCommits().then((res) => setLog(res));
  }, []);

  /*TODO: replace this useEffect with real info from Deploy/Netlify endpoint*/
  useEffect(() => {
    const rand = Math.random();
    const randInitialCommit = Math.round(rand * log.length);
    if (log.length) setCurrentSHA(log[randInitialCommit].sha);
  }, [log]);
  /*Above useEffect is temporary*/
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
