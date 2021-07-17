export interface Commit {
  sha: string;
  message: string;
}

export interface Log {
  log: Commit[];
}

export interface CommitList extends Log {
  currentSHA: string;
  targetSHA: string;
}
