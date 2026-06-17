# Xiaohei QA Compatibility Reference

Canonical Xiaohei quality rules live at `references/ips/xiaohei/qa-checklist.md`.

## Migration Availability

- This root path remains available during migration for existing prompts and docs.
- Load `references/ips/xiaohei/qa-checklist.md` for current Xiaohei behavior.
- Treat the canonical file as the editable source of truth for pass checks, failure signals, iteration methods, and delivery judgment.

## Current Xiaohei Contract
# QA Checklist

## Pass Checks

- The image is 16:9 horizontal.
- The background is clean white.
- Xiaohei appears in the image.
- Xiaohei carries the core action, with legacy marker `小黑承担核心动作`.
- The composition avoids old case reproduction and creates a fresh metaphor for the current article.
- The image feels absurd, inventive, and interesting.
- The layout is clean, with the main subject covering no more than about 60% of the canvas.
- One image explains one core structure.
- Visible labels are sparse, short, readable, and copied in the user's language.
- Orange is used only for the main path or arrows.
- Red is used only for emphasis, problems, reminders, or results.
- Blue is used only for supporting notes, feedback, or system state.

## Failure Signals

Regenerate or locally edit when any of these appear:

- Top-left title such as "common pitfalls", "Workflow", "system architecture diagram", or "route map".
- Legacy failure marker: `小黑像吉祥物、表情包或可爱卡通`.
- PPT, course-slide, or formal-flowchart look.
- Too many elements, arrows, or nodes.
- Long explanatory text blocks.
- Paper texture, shadow, gradient, beige tint, or noise in the background.
- Real UI screenshot or tech-interface look.
- Severe label typos or unreadable labels.
- Stiff image with no absurd metaphor.
- Composition too similar to old cases in `assets/examples/`.

## Iteration Methods

- Too ordinary: make Xiaohei the action subject and add a strange but coherent metaphor.
- Too complex: remove nodes and keep one action with 3-5 short labels.
- Too cute: emphasize deadpan, blank serious expression, not cute, and not mascot.
- Too PPT-like: remove title, border, tidy grid, and excess arrows; convert it into a hand-drawn scene.
- Too close to an old case: keep the core idea, change the main object and Xiaohei action.
- Text errors: prefer local edit; if there are many errors, regenerate with fewer labels.

## Delivery Judgment

A high-quality image makes the reader feel that it is slightly strange, then understand the structure within one second.

The accepted image should read as an absurd product sketch on white paper.
