export type SimpleSplitType = "chars" | "words";

type SplitTarget = Element | string | Array<Element | string>;

function resolveTargets(target: SplitTarget): Element[] {
  const raw = Array.isArray(target) ? target : [target];
  const els: Element[] = [];
  for (const item of raw) {
    if (typeof item === "string") {
      els.push(...Array.from(document.querySelectorAll(item)));
    } else if (item) {
      els.push(item);
    }
  }
  return els;
}

function splitElementIntoChars(el: Element) {
  const original = el.textContent ?? "";
  el.textContent = "";
  const chars: HTMLElement[] = [];
  for (const ch of Array.from(original)) {
    const span = document.createElement("span");
    span.className = "split-char";
    span.style.display = "inline-block";
    // preserve spacing
    span.textContent = ch === " " ? "\u00A0" : ch;
    el.appendChild(span);
    chars.push(span);
  }
  return { original, chars };
}

function splitElementIntoWords(el: Element) {
  const original = el.textContent ?? "";
  el.textContent = "";
  const words: HTMLElement[] = [];
  const parts = original.trim().length ? original.split(/\s+/) : [];
  parts.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "split-word";
    span.style.display = "inline-block";
    span.textContent = word;
    el.appendChild(span);
    words.push(span);
    if (idx !== parts.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });
  return { original, words };
}

export class SimpleSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  // compatibility: some code expects these
  lines: HTMLElement[] = [];

  private originals = new Map<Element, string>();

  constructor(target: SplitTarget, vars?: { type?: string; [key: string]: unknown }) {
    const type = vars?.type ?? "chars";
    const wantChars = type.includes("chars");
    const wantWords = type.includes("words");

    const els = resolveTargets(target);
    for (const el of els) {
      const original = el.textContent ?? "";
      this.originals.set(el, original);

      if (wantWords && !wantChars) {
        const { words } = splitElementIntoWords(el);
        this.words.push(...words);
        continue;
      }

      // default to chars (and allow chars+words by taking words from chars later if needed)
      const { chars } = splitElementIntoChars(el);
      this.chars.push(...chars);
      if (wantWords) {
        // treat each character span sequence as "words" groups is complex; for our usage, words-only is sufficient
      }
    }
  }

  revert() {
    for (const [el, original] of this.originals.entries()) {
      el.textContent = original;
    }
    this.originals.clear();
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

