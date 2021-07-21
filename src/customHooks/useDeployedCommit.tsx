import { getDeployedCommit } from "../Api/fetchCommits";
import { useEffect, useState } from "react";

const extractCommit = (commitMessage: string, startIndex: number) => {
  return commitMessage.slice(startIndex + 1, commitMessage.length - 3);
};

export const SEARCH_PATTERN = /@\d/;
// const SEARCH_PATTERN = "Updates"; //This will not work. No commit to parse

export const useDeployedCommit = (): string => {
  const [isValid, setIsValid] = useState(false);
  const [commitMessage, setCommitMessage] = useState("");
  const [startIndex, setStartIndex] = useState(-1);
  useEffect(() => {
    const asyncCall = async () => {
      const commit = await getDeployedCommit();
      const _commitMessage = commit?.message ?? "";
      setCommitMessage(_commitMessage);
      const _startIndex = _commitMessage.search(SEARCH_PATTERN) ?? -1;
      setStartIndex(_startIndex);
      setIsValid(!!_commitMessage && _startIndex !== -1);
    };
    asyncCall().then((x) => null);
  }, []);

  if (isValid) return extractCommit(commitMessage, startIndex);
  return "";
};
