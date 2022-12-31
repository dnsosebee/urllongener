import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const url = decodeURIComponent(location.params.url);
  return (
    <div class="h-screen w-screen flex flex-col sunset">
      <div class="px-20">
        <h2 class="pt-10 sick text-4xl">
          Your website <span class="italic">Preview</span>
        </h2>
        <a
          href={url}
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-5"
        >
          <p class="truncate max-w-xs">{`Or, click here to directly visit ${url}`}</p>
        </a>
        <iframe src={url} class="w-full h-full border rounded-2xl border-white shadow-2xl" />
      </div>
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
