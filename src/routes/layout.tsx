import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Slot />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
});
