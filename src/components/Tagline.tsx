import clsx from "clsx";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

const lines = [
  "The Classic Work, Newly Updated and Revised",
  "A Cornerstone of the Literary Canon",
  "A Testament to Intellectual Rigor",
  "The Historic Legacy of a Visionary",
  "The Seminal Work, Meticulously Crafted",
  "An Insightful Masterpiece",
  "A Scholarly Achievement in Prose",
  "A Playful Ruse, Intended to Amuse and Delight",
];

function Tagline() {
  const [isFadedIn, setIsFadedIn] = createSignal(false);

  const [count, setCount] = createSignal(0);
  const [isHiding, setIsHiding] = createSignal(false);

  // every so often, change the tagline
  let changeId: ReturnType<typeof setTimeout>;

  const handler = () => {
    clearTimeout(changeId);
    setIsHiding(true);

    setTimeout(() => {
      clearTimeout(changeId);
      setCount((c) => c + 1);
      setIsHiding(false);
      changeId = setTimeout(() => handler(), 15_000); // every so often, change the tagline
    }, 300);
  };

  // start timeouts on mount
  createEffect(() => {
    changeId = setTimeout(() => handler(), 15_000);

    const fadeInId = setTimeout(() => setIsFadedIn(true), 700);
    onCleanup(() => {
      clearTimeout(changeId);
      clearTimeout(fadeInId);
    });
  });

  return (
    <button
      type="button"
      class={clsx(
        "block cursor-pointer appearance-none text-sm italic transition-opacity duration-300 ease-in-out animate-in fade-in fill-mode-backwards [.noscript_&]:cursor-default",
        isHiding() ? "opacity-0" : "",
        isFadedIn() ? "" : "delay-700"
      )}
      onClick={handler}
    >
      {lines[count() % lines.length]}
    </button>
  );
}

export default Tagline;
