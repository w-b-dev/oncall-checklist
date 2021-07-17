import { CommitList } from "../types";
import React from "react";

export function ListCommitDiff({
  log,
  currentSHA,
  targetSHA,
}: CommitList): JSX.Element {
  return (
    <ol style={{ display: "flex", flexDirection: "column-reverse" }}>
      {/*<ol>*/}
      {log
        .slice(
          log.findIndex((entry) => entry.sha === currentSHA) + 1,
          log.findIndex((entry) => entry.sha === targetSHA) + 1
        )
        .map((entry) => (
          <li key={entry.sha}>
            <code style={{ fontWeight: "bold", color: "blueviolet" }}>
              #{entry.sha}
            </code>
            <span
              style={{
                fontSize: "small",
              }}
            >
              {entry.message}
            </span>
          </li>
        ))}
      {/*.reverse()}*/}
    </ol>
  );
}
