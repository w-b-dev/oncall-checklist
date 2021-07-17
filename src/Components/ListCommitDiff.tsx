import { CommitList } from "../types";
import React from "react";

export function ListCommitDiff({
  log,
  currentSHA,
  targetSHA,
}: CommitList): JSX.Element {
  const currentIndex = log.findIndex((entry) => entry.sha === currentSHA);
  const targetIndex = log.findIndex((entry) => entry.sha === targetSHA);
  return (
    <ol>
      {log
        .slice(currentIndex + 1, targetIndex + 1)
        .map((entry) => (
          <li key={entry.sha} style={{ borderTop: "1px solid #33333399" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "blueviolet",
                overflow: "hidden",
                textTransform: "uppercase",
                fontFamily: "mono",
                whiteSpace: "nowrap",
              }}
            >
              {entry.sha.slice(0, 7)}
            </span>
            <span
              style={{
                fontSize: "small",
                paddingLeft: "1ch",
              }}
            >
              {entry.message}
            </span>
          </li>
        ))
        .reverse()}
    </ol>
  );
}
