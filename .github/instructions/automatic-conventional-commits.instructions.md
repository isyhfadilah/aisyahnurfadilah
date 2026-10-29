---
description: "Use for workspace implementation and file changes. Automatically create and push safe Conventional Commits after completed, validated tasks."
applyTo: "**"
---

# Automatic Conventional Commits

After finishing a requested implementation or workspace change, follow the [Conventional Commit Workflow](../skills/conventional-commit-workflow/SKILL.md) and the repository's [AGENTS.md](../../AGENTS.md).

- Validate the relevant changes before committing. Keep pre-commit and pre-push hooks enabled.
- Inspect the working tree and index first; do not include pre-existing or unrelated changes.
- Stage only files or hunks belonging to the completed task; never use `git add .` or `git add -A`.
- Use a specific Conventional Commit type, an optional scope, an imperative summary under 72 characters, and the required co-author trailer.
- Create one commit per coherent change. Do not amend commits.
- After a successful commit, fetch the configured remote and push the current branch to its upstream using a normal push.
- Never force-push, overwrite remote work, or change remotes or access settings.
- Respect explicit requests not to commit or push.
- If safe staging is ambiguous, ask before committing. If checks or push fail, preserve the work and report the blocker.
- Confirm the remote branch contains the commit before reporting GitHub synchronization as complete.
