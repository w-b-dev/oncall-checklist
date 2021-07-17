import { Log } from "../types";
import React from "react";

export function CommitSelector({ log }: Log): JSX.Element {
  return (
    <div>
      <label htmlFor="targetSHA">Target SHA:</label>
      <select name="targetSHA" id="targetSHA">
        {log.map((entry) => (
          <option value={entry.sha}>
            #{entry.sha}: {entry.message}
          </option>
        ))}
      </select>
    </div>
  );
}
