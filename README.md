# ON CALL TODO

## Tasks that are important to be manually checked

- Check scope of the changes to deploy
  - Offer to view the selecting a dropdown
  - Big button with one-click-copy the GH diff
- Show all the commits as CARDS, not list rows:
  - Highlight Authors (avatar) in the row -- Emphasize responsible committer
  - Highlight LOC affected per commit (and its contribution to overall % for the diff)
  - Add link to each commit

## TODO

- [ ] Style the background
- [ ] Style the cards
- [ ] Implement link to each commit in Github
- [ ] Implement the one-click copy Github diff link feature
- [ ] Implement the progress bar feature
- [ ] Implement the avatar feature

## Done Tasks

- [x] TODO: Current Git SHA deployed

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

# Github actions

# First one

- Runs on push to master (meaning any merged pull request)
- This is the one that actually deploys an artifact to `gh-pages` branch and makes the website live.

# TODO: Second one

- all Pull Requests should deploy to another services (not GH Pages). Ideally moving towards a feature-branch model, but right now more like a prod/staging model.
- This could have a custom domain (such as [staging.codein.ca](https://staging.codein.ca))
- By definition, this staging has some commits on top of latest deploy (=== latest master), since whatever PR is an improvement
