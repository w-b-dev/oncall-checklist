# ON CALL TODO

## Tasks that are important to be manually checked

- Check scope of the changes to deploy
  - Offer to view the selecting a dropdown
  - Big button with one-click-copy the GH diff
- Show all the commits as CARDS, not list rows:
  - Highlight Authors (avatar) in the row -- Emphasize responsible committer
  - Highlight LOC affected per commit (and its contribution to overall % for the diff)
  - Add link to each commit

## Done Tasks

- [ ] TODO: Current Git SHA deployed

  - Using a custom GH action, deploys to GH pages **on push** (Commit #A).
  - The way this GH pages deploy work, Commit #A is built, detached to a **gh-pages branch**.
  - Once the branch is saved, it gets a new SHA (Commit #B), however the commit subject makes reference to Commit #A
    - `Deploying to gh-pages from @ w-b-dev/oncall-checklist@f8cef4bedac4401aa449cd5b163428752350330f 🚀`
  - Extracting this `@foo` portion, yields the target commit.
    - Call GH API for the branch `gh-pages`, and get the latest commit.
    - Parse the commit subject and get the information we want (Commit #1).
    - Save in the App State as the "current commit" prop (displaying it is wired up already).

- [x] Target Git SHA:

  - Dropdown with options

- [x] List diff once previous step is complete
  - Must check if SHA is valid (included in the log)
  - Must filter results from tip up to current SHA
