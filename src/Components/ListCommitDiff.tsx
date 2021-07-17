import { CommitList } from "../types";
import React from "react";

export function ListCommitDiff({
  log,
  currentSHA,
  targetSHA,
}: CommitList): JSX.Element {
  return (
    <ol style={{ display: "flex", flexDirection: "column-reverse" }}>
      {log
        .slice(
          log.findIndex((entry) => entry.sha === currentSHA) + 1,
          log.findIndex((entry) => entry.sha === targetSHA) + 1
        )
        .map((entry) => (
          <li>
            #{entry.sha}: {entry.message}
          </li>
        ))}
    </ol>
  );
}
