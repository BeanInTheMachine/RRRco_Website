# PRD: Reality Replacement Research Company Website

## Problem Statement

The Reality Replacement Research Company (RRRco) needs a website that doesn't feel like a website. Standard marketing pages betray the company's mysterious, classified nature. Visitors should enter an immersive experience that sells the fiction — a simulated secure terminal for a desert black-ops research facility. Casual visitors should be filtered out by the interface itself.

## Solution

A fully interactive command-line interface website styled as an amber-phosphor CRT terminal. Visitors boot into the system, log in, and navigate entirely by typing commands. Content (about, research, personnel, contact, classified blog) is surfaced through terminal output. No traditional navigation, no scrolling, no mobile support. The site is a single-page app built with vanilla HTML/CSS/JS split across composable files.

## User Stories

1. As a visitor, I want the site to boot up like a real terminal, so that I'm immersed before I even interact.
2. As a visitor, I want to see an ASCII art RRRco logo during boot, so that the branding is established immediately.
3. As a visitor, I want to hit a login gate, so that the experience feels secure and classified.
4. As a visitor, I want to enter any username at login, so that there's no friction but the session feels personalized.
5. As a visitor, I want my username remembered throughout the session, so that commands and output reference me by name.
6. As a visitor, I want a `help` command listing all available commands, so that I know what I can explore.
7. As a visitor, I want an `about` command, so that I can learn what RRRco does.
8. As a visitor, I want a `research` command, so that I can read about the company's projects.
9. As a visitor, I want a `personnel` command, so that I can see key figures (with appropriate redactions).
10. As a visitor, I want a `contact` command, so that I can learn how (or whether) to reach RRRco.
11. As a visitor, I want a `classified` command with `list` and `read [id]` subcommands, so that I can browse and read blog posts framed as leaked/classified files.
12. As a visitor, I want tab completion for commands, so that the terminal feels authentic and I can discover commands.
13. As a visitor, I want amber monospace text on a near-black background, so that the terminal feels like desert-era phosphor hardware.
14. As a visitor, I want subtle CRT scanlines and screen curvature, so that the visual immersion is deepened without hurting readability.
15. As a visitor, I want the writing tone to be corporate surreal (cheerfully dystopian government black ops), so that the company's personality shines through.
16. As a visitor, I want the boot sequence to be unskippable but short, so that immersion is preserved but I'm not waiting long.
17. As a visitor on mobile or a small screen, I want to see a message that the terminal requires a wider viewport, so that the illusion is never broken by a compromised layout.
18. As the site owner, I want to add new blog posts by adding an object to a JS data file, so that I don't need to touch HTML or the terminal core.
19. As the site owner, I want to add new commands by registering a handler in the command registry, so that the site is easily extensible.

## Implementation Decisions

### Architecture: Separate files for composability
- `index.html` — Shell, loads everything.
- `style.css` — All styling: amber palette, CRT effects, layout, animations.
- `script.js` — Entry point, bootstraps the terminal.
- `terminal.js` — Terminal core: prompt rendering, output buffer, command dispatch, tab completion.
- `commands.js` — Command registry and all command handler functions.
- `boot.js` — Boot sequence messages, ASCII art, login gate logic.
- `posts.js` — Classified blog post data (array of objects).
- `session.js` — Session state (username, current directory, discovered secrets).

### Content tone: Corporate surreal
All output text should read like internal memos from a dystopian but cheerful black-ops contractor. Clinical terminology mixed with absurd bureaucracy and unsettling implications. Nothing overtly sci-fi or fantastical — the horror is in the dry, professional presentation of impossible things.

### Visual style: Medium CRT with amber phosphor
- Foreground: amber `#ffb000` on near-black `#0a0a0a` background.
- Monospace font (CSS `font-family: monospace` stack or a loaded terminal font).
- Subtle CSS scanline overlay using repeating linear gradient.
- Slight `border-radius` on corners for screen curvature hint.
- Text glow via `text-shadow`.
- Blinking block cursor simulated in JS.
- No scrollbar. Terminal auto-scrolls, old output fades or persists upward.

### Command system
- Commands are registered as `{ name, handler, description }` objects.
- `help` lists all registered commands and their descriptions.
- Tab completion queries the registry for prefix matches.
- `classified` is a nested command: `classified list`, `classified read <id>`.
- No command history (arrow keys) — deemed unnecessary for this scope.

### Boot sequence → login → prompt flow
1. Page loads, terminal container is black with a loading tick.
2. Boot messages scroll in sequence with realistic timing (short, ~3-4 seconds total).
3. ASCII art RRRco logo appears.
4. System banner: "RRRco Secure Terminal v3.7 — Clearance: UMBRA-4"
5. Drops to `login:` prompt.
6. Any username accepted. Stored in session.
7. MOTD displayed.
8. Drops to command prompt: `username@rrrco:~$ _`

### Blog / Classified Files
Posts stored in `posts.js`:

```
posts = [
  {
    id: "rrr-001",
    title: "INCIDENT REPORT: PHASE DRIFT AT SITE 7",
    date: "2026-05-15",
    clearance: "UMBRA-4",
    content: "At 03:47 local time, personnel at Site 7 reported..."
  }
]
```

Commands: `classified list` (shows id, title, date, clearance) and `classified read <id>` (shows full post).

### Blog post ID scheme
Posts should use a `classification-prefix-number` scheme: `UMBRA-004`, `CIPHER-012`, `VOID-001`. This reinforces the classified file aesthetic and gives each post a unique terminal-friendly handle.

### Mobile: Blocked with message
A CSS media query at typical mobile widths shows: "TERMINAL REQUIRES MINIMUM 80-COLUMN VIEWPORT. ACCESS DENIED." The terminal itself is hidden. No responsive hackery.

### Hidden commands / Easter eggs
Deliberately out of scope for v1. The command registry is built to support `hidden: true` flags so commands can be added later that don't appear in `help`.

## Testing Decisions

No automated tests for this phase. The site is a static frontend with no complex state or business logic. Manual verification of each command, the boot flow, login flow, and visual rendering is sufficient.

If tests were to be added, the deep module to test would be the Terminal Core (`dispatch(command)` → output), since it encapsulates the command parser, router, tab completion, and output formatting behind a single testable interface.

## Out of Scope

- Mobile/responsive support (actively blocked)
- Command history (arrow keys)
- Hidden/easter egg commands
- Real authentication or backend
- Contact form submission (contact command shows text, not a form)
- Any server-side component or database
- Analytics or tracking
- SEO optimization
- Browser history/pushState integration

## Further Notes

- The `posts.js` file should be the only file a content author ever needs to touch. Adding a post should be as simple as appending an object to the array.
- Keep the terminal's DOM footprint minimal — output should be appended as plain `<pre>` or `<div>` elements inside the terminal container.
- CSS custom properties (variables) should be used for the color palette so the amber scheme can be toggled to green or another phosphor color by changing a few variables.
