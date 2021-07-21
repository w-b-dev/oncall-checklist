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
    getCommits("gh-pages").then((res) => {
      const parsedCommit = res
        .reverse()
        .find((commit) => commit.message.search(/@\d/));
      const commitMessage = parsedCommit?.message ?? "";
      const startIndex = commitMessage.search(/@\d/) ?? -1;
      const isValid = parsedCommit !== undefined && startIndex !== -1;
      setCurrentSHA(
        isValid
          ? commitMessage.slice(startIndex + 1, commitMessage.length - 3)
          : ""
      );
    });
  }, []);

  // useEffect(() => {
  //   console.log({ currentSHA });
  // });

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
      <h1>v3: deploy on **push-to-master** only</h1>
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
