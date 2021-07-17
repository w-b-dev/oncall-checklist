import React from "react";
import { getCommits } from "../Api/fetchCommits";
import { BaseCommitDisplay } from "./BaseCommitDisplay";
import { ListCommitDiff } from "./ListCommitDiff";
import { CommitSelector } from "./CommitSelector";

function App(): JSX.Element {
  /*TODO: add Context to share state*/
  const currentSHA = "456c";
  const targetSHA = "789";
  const log = getCommits(); /*TODO: Fetch*/
  return (
    <main className="App">
      <BaseCommitDisplay currentSHA={currentSHA} />
      <CommitSelector log={log} />
      {/* TODO: should emit event that notified parent of selection */}
      <ListCommitDiff log={log} currentSHA={currentSHA} targetSHA={targetSHA} />
      {/*TODO: should update target based on selection change*/}
    </main>
  );
}

export default App;
