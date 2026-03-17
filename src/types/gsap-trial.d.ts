declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: unknown[];
    words: unknown[];
    lines: unknown[];
    constructor(target: unknown, vars?: unknown);
    revert(): void;
  }

  export default SplitText;
}

