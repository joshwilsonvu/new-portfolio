import { createMemo, createSignal, JSX, Show } from "solid-js";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { createMediaQuery } from "@solid-primitives/media";

export interface DemoWrapperProps {
  wide?: boolean | null;
  class?: string;
  children?: JSX.Element;
}

// const isWide = createMediaQuery('(min-width: 48rem)');

export default function DemoWrapper(props: DemoWrapperProps) {
  // const visible = createMemo(() => {
  //   if (isWide()) {
  //     const observer = createVisibilityObserver({ rootMargin: '50% 0' })
  //   }
  // })

  const [el, setEl] = createSignal<HTMLDivElement>();
  const useVisibilityObserver = createVisibilityObserver({ threshold: 0.5 });
  const visible = useVisibilityObserver(el);

  return (
    <div ref={setEl} class={props.class}>
      <Show when={visible()}>{props.children}</Show>
    </div>
  );
}
