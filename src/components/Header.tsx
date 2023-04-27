import { createEffect, createSignal, onCleanup } from "solid-js";
import DarkModeToggle from "./DarkModeToggle";
import clsx from "clsx";

function Header(props: { pathname: string }) {
  const [isScrollingDown, setIsScrollingDown] = createSignal(false);
  createEffect(() => {
    let lastScrollY = window.scrollY;
    const listener = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", listener, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", listener));
  });

  return (
    <header
      class={clsx(
        "sticky top-0 z-10 mb-6 bg-stone-50/60 backdrop-blur transition-all dark:bg-stone-900/40",
        isScrollingDown() && "opacity-0"
      )}
    >
      <nav class="mx-auto flex max-w-7xl items-center justify-start gap-6 overflow-x-auto px-6 py-4 underline-offset-4 xs:px-12">
        <a
          href="/"
          class={clsx(
            "link",
            !props.pathname.startsWith("/works") &&
              !props.pathname.startsWith("/writings") &&
              "underline"
          )}
        >
          Home
        </a>
        <a
          href="/works"
          class={clsx(
            "link",
            props.pathname.startsWith("/works") && "underline"
          )}
        >
          Works
        </a>
        <a
          href="/writings"
          class={clsx(
            "link",
            props.pathname.startsWith("/writings") && "underline"
          )}
        >
          Writings
        </a>
        <DarkModeToggle class="ml-auto [.noscript_&]:hidden" />
      </nav>
    </header>
  );
}

export default Header;
