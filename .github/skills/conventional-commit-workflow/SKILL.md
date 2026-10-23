---
name: conventional-commit-workflow
description: 'Create safe, well-structured Conventional Commits after completed code changes. Use when implementing a change, preparing a commit, or choosing feat/fix/docs/refactor/chore commit types.'
argument-hint: 'Optional scope or commit intent'
---

# Conventional Commit Workflow

Create one clear, best-practice Conventional Commit for each coherent completed change.

## Commit Format

Use:

`<type>(<optional-scope>): <short imperative summary>`

Choose the most accurate type:

- `feat`: add user-facing functionality
- `fix`: correct a defect
- `docs`: documentation-only changes
- `style`: formatting or styling changes without behavior changes
- `refactor`: restructure code without changing behavior
- `perf`: improve performance
- `test`: add or update tests
- `build`: build system or dependency changes
- `ci`: CI configuration changes
- `chore`: maintenance that does not fit another type
- `revert`: revert an earlier change

Use a concise, specific, imperative subject; keep it under 72 characters. Add a scope when it clarifies the affected area. Follow the repository's existing language and commit conventions. Include a `BREAKING CHANGE:` footer when required.

## Automatic Commit Procedure

After completing an implementation or other requested workspace change:

1. Inspect `git status` and the diff before staging. Separate changes made for the current task from pre-existing or unrelated work.
2. Run the smallest relevant checks. Do not commit a change that has known failing checks; report the blocker instead.
3. Review the exact files and hunks to be committed. Never stage with `git add -A` or `git add .`.
4. Stage only paths changed for the current task. If a file mixes current work with unrelated edits, stage only the relevant hunks or ask the user before proceeding.
5. Create one commit for the coherent task using the format above. Do not amend existing commits.
6. Include this trailer unless the user explicitly opts out:

   `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`

7. Verify the commit succeeded and check that unrelated changes remain unstaged.

Do not create a commit if the user explicitly asks not to, if the change contains secrets or sensitive data, or if ownership of pending changes is unclear. Ask before committing ambiguous pre-existing changes.

## Examples

- `feat(portfolio): add project filtering`
- `fix(cursor): preserve native text selection`
- `docs: explain local development setup`
- `refactor(nav): share active section logic`
