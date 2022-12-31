import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return (
    <div class="h-screen w-screen">
      <iframe src={decodeURIComponent(location.params.url)} class="h-screen w-screen" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Longener",
  meta: [
    {
      name: "Mission",
      content: "Url Longener Mission Statement",
    },
  ],
};
