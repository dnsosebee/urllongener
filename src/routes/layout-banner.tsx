import { component$, Slot } from "@builder.io/qwik";
import Banner from "~/components/header/banner";

export default component$(() => {
  return (
    <>
      <main>
        <Banner pro={false} />
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
