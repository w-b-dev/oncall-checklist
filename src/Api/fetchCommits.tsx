import { Commit } from "../types";
import { SEARCH_PATTERN } from "../customHooks/useDeployedCommit";

const GITHUB_PAGES_BRANCH = "gh-pages";

export const getCommits = async (branchOrSHA?: string): Promise<Commit[]> => {
  const res = await fetchFromGithub(branchOrSHA);
  return res.map((entry: { sha: string; commit: { message: string } }) => ({
    sha: entry.sha,
    message: entry.commit.message,
  }));
};

export const getDeployedCommit = async (): Promise<Commit | undefined> => {
  const res = await getCommits(GITHUB_PAGES_BRANCH);
  return res.find((commit) => {
    return commit.message.match(SEARCH_PATTERN);
  });
};

const fetchFromGithub = async (branchOrSHA?: string) => {
  const ifBranchOrSHAProvided = branchOrSHA
    ? `?${new URLSearchParams({
        sha: branchOrSHA,
      })}`
    : "";
  const response = await fetch(
    "https://api.github.com/repos/w-b-dev/oncall-checklist/commits" +
      ifBranchOrSHAProvided,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: process.env.REACT_APP_GITHUB_TOKEN ?? "", //Falls back to free tier
      },
    }
  );
  /*
   * A fetch() promise only rejects when a network error is encountered (which is usually when there’s a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
   * */
  return response.json();
};
