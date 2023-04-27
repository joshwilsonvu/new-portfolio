import { createSignal, onMount } from "solid-js";

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
  onMount(() => {
    setTimeout(() => setIsFadedIn(true), 700);
  });

  const [count, setCount] = createSignal(0);
  const [isHiding, setIsHiding] = createSignal(false);

  const handler = () => {
    setIsHiding(true);
    setTimeout(() => {
      setCount((c) => c + 1);
      setIsHiding(false);
    }, 300);
  };

  return (
    <p
      class={`inline-block min-w-[50%] cursor-pointer text-sm transition-opacity animate-in fade-in duration-300 ease-in-out fill-mode-backwards [.noscript_&]:cursor-default ${
        isHiding() ? "opacity-0" : ""
      }${isFadedIn() ? "" : "delay-700"}`}
      onMouseOver={handler}
      onClick={handler}
    >
      {lines[count() % lines.length]}
    </p>
  );
}

export default Tagline;
