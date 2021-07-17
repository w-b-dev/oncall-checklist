import { Commit } from "../types";

export const getCommits = async (): Promise<Commit[]> => {
  const res = await fetchFromGithub();
  const commitList: Commit[] = res
    .map((entry: { sha: string; commit: { message: string } }) => ({
      sha: entry.sha,
      message: entry.commit.message,
    }))
    .reverse();
  return commitList;
  // return mockCommitList;
};

/*const mockCommitList: Commit[] = [
  { sha: "12", message: "first commit" },
  { sha: "34", message: "second commit" },
  { sha: "78", message: "c" },
  { sha: "56", message: "b" },
  {
    sha: "90",
    message: "most recent commit",
  },
];*/

const fetchFromGithub = async () => {
  const res = await fetch(
    "https://api.github.com/repos/w-b-dev/oncall-checklist/commits"
  );
  return await res.json();
};
