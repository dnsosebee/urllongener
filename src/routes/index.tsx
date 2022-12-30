import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1
        class=" text-3xl font-bold text-gray-900
    "
      >
        Url Longener
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Longener",
  meta: [
    {
      name: "Homepage",
      content: "Url Longener Homepage",
    },
  ],
};
