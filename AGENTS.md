# Repository workflow

## Automatic commits and GitHub pushes

The user's standing preference is to automatically commit and push completed, validated work in this repository. Apply this after user-requested implementation, fixes, and documentation changes unless the user explicitly asks not to commit or push.

- Read and follow [.github/skills/conventional-commit-workflow/SKILL.md](.github/skills/conventional-commit-workflow/SKILL.md).
- Inspect the working tree and index before editing or staging. Preserve unrelated work and existing commits.
- Run checks appropriate to the change. Use the existing pre-commit and pre-push hooks; do not bypass them. Build the Next.js app after changes that affect application behavior or styles.
- Stage only the exact files or hunks belonging to the completed task. Never use `git add .` or `git add -A`.
- Create one commit per coherent change. Use `feat` for new functionality, `fix` for corrections, `docs` for documentation, `refactor` for restructuring, `style` for formatting or visual-only changes, and `chore` for repository maintenance.
- Format the subject as `type(scope): imperative summary`, under 72 characters. Explain nontrivial changes in the body and include the co-author trailer required by the workflow skill.
- Before pushing, fetch the configured remote and inspect divergence. Push the current branch to its configured upstream using a normal push.
- If the branch has no upstream, use the configured GitHub remote and the same branch name. Do not create a remote, change repository visibility, or store credentials.
- Never force-push, amend published commits, disable hooks, or overwrite remote work. If validation, authentication, branch protection, or a conflicting remote change blocks progress, preserve the local commit and report the exact blocker.
- Verify the push succeeded and report the commit hash, subject, and destination branch. A local commit alone is not a successful GitHub push.

These instructions apply when an agent completes a task. They do not install a background file watcher or commit incomplete edits.
