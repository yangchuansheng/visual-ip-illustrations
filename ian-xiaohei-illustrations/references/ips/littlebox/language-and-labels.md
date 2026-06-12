# Littlebox Language And Labels

## Response Language

Use the user's language for planning, delivery notes, and image descriptions.

## Prompt Language

Write every image-generation prompt in English for model consistency. Put visible labels in quoted exact text using the user's language.

Example:

```text
Visible handwritten labels, copied exactly in the user's language: "原始材料", "判断", "输出".
```

## Visible Label Rules

- Use 3-6 labels for most images.
- Prefer 1-4 words per label.
- Use nouns or short verb phrases.
- Keep labels in the user's language.
- Quote visible labels exactly in the prompt.
- For non-Latin scripts, say: `copy the label text exactly, preserve the script, do not translate it`.
- Reduce label count before making text tiny.
- Labels must look like rough handwritten marker text that belongs to the drawing.
- Keep label stroke weight close to Littlebox linework.
- Keep label style consistent across an image set.

## Label Vetoes

Regenerate or repair if labels become:

- full sentences inside the image
- bilingual labels without user request
- clean sans-serif typography
- bold poster type
- calligraphy
- vector text
- pasted-on digital typography
- heavier, cleaner, or more polished than the drawing

## When Text Fails

1. Regenerate with fewer labels.
2. Use shorter words.
3. Move labels farther apart.
4. Create blank label spaces and add text with deterministic tooling only when the final labels still look like rough handwritten marker text.
