import React from "react";
import { getCommits } from "../Api/fetchCommits";
import { BaseCommitDisplay } from "./BaseCommitDisplay";
import { ListCommitDiff } from "./ListCommitDiff";
import { CommitSelector } from "./CommitSelector";

function App(): JSX.Element {
  const currentSHA = "456c";
  const targetSHA = "789";
  const log = getCommits();
  return (
    <main className="App">
      <BaseCommitDisplay currentSHA={currentSHA} />
      <CommitSelector log={log} />
      <ListCommitDiff log={log} currentSHA={currentSHA} targetSHA={targetSHA} />
    </main>
  );
}

export default App;
