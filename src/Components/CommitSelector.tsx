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
          -- select an option --
        </option>
        {log
          .map((entry, i) => {
            return (
              <option
                key={entry.sha}
                value={entry.sha}
                disabled={i <= currentIndex}
              >
                {entry.sha}
              </option>
            );
          })
          .reverse()}
      </select>
      <span>
        {log.find((entry) => entry.sha === targetSHA)?.message ??
          "Try selecting a commit"}
      </span>
    </div>
  );
}
