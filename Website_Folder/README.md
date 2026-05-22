# Modern Website Redesign (OpenClaw Agent Workflow)

This project was automatically refactored and redesigned using a multi-agent pipeline built with **OpenClaw** and **Claude Code**.

- **Planner Agent**: Analyzed legacy HTML/CSS structure and generated a modern redesign strategy.
- **Designer Agent**: Proposed Glassmorphism/Material-style component library.
- **Coder Agent**: Implemented responsive layouts, mobile adaptation, and accessibility improvements.

All pages were batch-processed through the agent pipeline with Claude Opus 4.6 model for complex layout reasoning. Final manual review pass only.

## Usage

To run the agent pipeline locally:

```bash
openclaw run pipeline --project ./redesign
```

![Terminal Execution Screenshot](./terminal-screenshot.jpg)
