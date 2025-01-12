import { createEffect, createSignal } from "solid-js";
interface Props {
  class?: string;
}

function PrinterFilterToggle(props: Props) {
  const [isActive, setIsActive] = createSignal(true);
  createEffect(() => {
    const main = document.getElementById("main");
    if (main) {
      setIsActive(main.classList.contains("printer-filter"));
    }
  });
  const altText = () =>
    isActive()
      ? "Remove page distortion effect"
      : "Restore page distortion effect";
  return (
    <button
      type="button"
      class={props.class}
      aria-label={altText()}
      title={altText()}
      onClick={() => {
        const main = document.getElementById("main");
        if (main) {
          main.classList.toggle("printer-filter");
          setIsActive(main.classList.contains("printer-filter"));
        }
      }}
    >
      {isActive() ? "~" : "−"}
    </button>
  );
}

export default PrinterFilterToggle;
