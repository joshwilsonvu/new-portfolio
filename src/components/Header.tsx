import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import DarkModeToggle from "./DarkModeToggle";
import clsx from "clsx";
import PrinterFilterToggle from "./PrinterFilterToggle";

function Header(props: { pathname: string }) {
  const [isScrollingDown, setIsScrollingDown] = createSignal(false);
  const [isAtTop, setIsAtTop] = createSignal(true);
  createEffect(() => {
    let lastScrollY = window.scrollY;
    const listener = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      setIsScrollingDown(currentScrollY > lastScrollY);
      setIsAtTop(currentScrollY < 1);
      lastScrollY = currentScrollY;
    };
    listener();
    window.addEventListener("scroll", listener, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", listener));
  });

  return (
    <header
      class={clsx(
        "group sticky top-0 z-10 mb-6 border-b-1 transition-[opacity,border-color,background-color]",
        isScrollingDown() && "opacity-0",
        isScrollingDown() || isAtTop()
          ? "border-transparent bg-transparent"
          : "border-ui bg-bg"
      )}
    >
      <nav class="mx-auto flex max-w-page items-center justify-start gap-6 overflow-x-auto px-6 py-4 xs:px-12">
        <a href="/">Home</a>
        {/* <a
          href="/writings"
          class={clsx(
            props.pathname.startsWith("/writings") ? "link" : "revealed-link"
          )}
        >
          Writings
        </a> */}
        <DarkModeToggle class="ml-auto opacity-0 transition-opacity group-hover:js:opacity-100 group-hfv:js:opacity-100" />
        <Show when={typeof window !== "undefined" && !window.NO_PRINTER_FILTER}>
          <PrinterFilterToggle class="text-xl font-bold opacity-0 transition-opacity group-hover:js:opacity-100 group-hfv:js:opacity-100" />
        </Show>
      </nav>
    </header>
  );
}

export default Header;
