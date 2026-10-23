---
description: "Use for workspace implementation and file changes. Automatically prepare one safe Conventional Commit after each completed, validated task."
applyTo: "**"
---

# Automatic Conventional Commits

After finishing a requested implementation or workspace change, follow the [Conventional Commit Workflow](../skills/conventional-commit-workflow/SKILL.md) and create one commit for that task.

- Validate the relevant changes before committing.
- Inspect the worktree first and do not include pre-existing or unrelated changes.
- Stage only files or hunks belonging to the completed task; never use `git add .` or `git add -A`.
- Use the repository's Conventional Commit format and include the required co-author trailer.
- Do not amend commits. Respect an explicit request not to commit.
- If safe staging is ambiguous, ask before committing.
