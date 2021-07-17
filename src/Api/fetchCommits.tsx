import { Commit } from "../types";

export const getCommits = (): Commit[] => {
  /* TODO: mock this as a Promise */
  return mockCommitList;
};

const mockCommitList: Commit[] = [
  { sha: "12", message: "first commit" },
  { sha: "34", message: "second commit" },
  { sha: "78", message: "c" },
  { sha: "56", message: "b" },
  {
    sha: "90",
    message: "most recent commit",
  },
];
