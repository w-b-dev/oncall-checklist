import { Log } from "../types";
import React, { ReactEventHandler } from "react";
interface CommitSelectorProps extends Log {
  onChange: ReactEventHandler<HTMLSelectElement>;
  currentSHA: string;
  targetSHA: string;
}
export function CommitSelector({
  log,
  onChange,
  currentSHA,
  targetSHA,
}: CommitSelectorProps): JSX.Element {
  const currentIndex = log.findIndex((e) => e.sha === currentSHA);
  return (
    <div>
      <label htmlFor="targetSHA">Target SHA:</label>
      <select
        name="targetSHA"
        id="targetSHA"
        multiple={false}
        onChange={onChange}
        defaultValue={"N/A"}
      >
        <option disabled value={"N/A"}>
          -- list of commits --
        </option>
        {log
          .map((entry, i) => {
            return (
              <option
                key={entry.sha}
                value={entry.sha}
                disabled={i <= currentIndex}
              >
                {entry.sha.slice(0, 7)}
              </option>
            );
          })
          .reverse()}
      </select>
      <code style={{ display: "block", padding: "1em", fontSize: "0.8em" }}>
        {log.find((entry) => entry.sha === targetSHA)?.message ??
          `${log.length - 1 - currentIndex} commits waiting to be promoted`}
      </code>
    </div>
  );
}
