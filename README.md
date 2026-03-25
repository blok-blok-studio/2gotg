# website-builder-skill

Claude Code skill for building premium client websites at BlokBlok Studio.

## What's Inside

- **CLAUDE.md** — Project-level guidance for Claude Code (tech stack, design rules, build workflow)
- **`.claude/skills/blokblok-site-builder.md`** — Full lifecycle skill: design system generation, page assembly, CMS, SEO, deployment
- **`.claude/skills/ui-ux-pro-max/`** — Design intelligence engine with BM25 search across 67 styles, 96 palettes, 57 font pairings, and 13 tech stacks

## Usage

Install this skill into any Claude Code project by copying the `.claude/` directory and `CLAUDE.md` into the project root. The UUPM search engine runs locally with Python 3 — no external dependencies required.

```bash
# Generate a design system for a client
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fitness coaching" \
  --design-system --persist -p "Client Name" -f markdown
```
