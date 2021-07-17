import { Commit } from "../types";

export const getCommits = (): Commit[] => {
  /* TODO: mock this as a Promise */
  return mockCommitList;
};

const mockCommitList: Commit[] = [
  { sha: "123", message: "first commit" },
  { sha: "456", message: "second commit" },
  { sha: "456b", message: "b - second commit" },
  { sha: "456c", message: "c - second commit" },
  {
    sha: "789",
    message: "most recent commit",
  },
];
