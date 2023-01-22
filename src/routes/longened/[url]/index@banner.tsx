import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const url = decodeURIComponent(location.params.url);
  return (
    <div class="h-screen w-screen flex flex-col sunset">
      <div class="sm:px-20">
        <h2 class="pt-5 sick text-4xl">
          Greetings, esteemed recipient of a <span class="italic font-serif">Longened</span> URL
        </h2>
        <h2 class="pt-3 text-2xl sick">
          Please enjoy this{" "}
          <span class="font-serif italic">deluxe webpage viewing experience!</span>
        </h2>
        <a
          href={url}
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-5"
        >
          <p class="truncate">{`...Or, click to directly visit ${url}`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-6 h-6 pl-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
        <iframe src={url} class="w-full h-screen border rounded-2xl border-white shadow-2xl" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Longener",
  meta: [
    {
      name: "Preview",
      content: "Url Longener Preview",
    },
  ],
};
