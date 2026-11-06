# Repository workflow

## Automatic local commits

The user's standing preference is to automatically commit completed, validated work locally in this repository. Apply this after user-requested implementation, fixes, and documentation changes unless the user explicitly asks not to commit. The user handles GitHub pushes manually; do not push automatically.

- Read and follow [.github/skills/conventional-commit-workflow/SKILL.md](.github/skills/conventional-commit-workflow/SKILL.md).
- Inspect the working tree and index before editing or staging. Preserve unrelated work and existing commits.
- Run checks appropriate to the change. Use the existing pre-commit and commit-msg hooks; do not bypass or disable hooks. Preserve the pre-push hook for the user's manual pushes. Build the Next.js app after changes that affect application behavior or styles.
- Stage only the exact files or hunks belonging to the completed task. Never use `git add .` or `git add -A`.
- Create one commit per coherent change. Use `feat` for new functionality, `fix` for corrections, `docs` for documentation, `refactor` for restructuring, `style` for formatting or visual-only changes, and `chore` for repository maintenance.
- Format the subject as `type(scope): imperative summary`, under 72 characters. Explain nontrivial changes in the body and include the co-author trailer required by the workflow skill.
- Do not fetch or push as part of the automatic commit workflow. Leave pushing to the user unless they explicitly request it for a task.
- Never force-push, amend published commits, or overwrite remote work. Do not create a remote, change repository visibility, or store credentials.
- If validation or a commit hook blocks progress, preserve the work and report the exact blocker.
- Verify the local commit succeeded and report its hash and subject. Make clear that it has not been pushed.

These instructions apply when an agent completes a task. They do not install a background file watcher or commit incomplete edits.
