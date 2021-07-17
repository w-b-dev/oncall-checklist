import React from "react";

export function BaseCommitDisplay({
  currentSHA,
}: {
  currentSHA: string;
}): JSX.Element {
  return (
    <div>
      <label htmlFor="currentSHA">Current SHA:</label>
      <input id="currentSHA" type="text" disabled value={currentSHA} />
    </div>
  );
}
