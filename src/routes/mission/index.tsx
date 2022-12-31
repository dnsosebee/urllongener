import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-w-0 flex-1">
      <h2 class="pt-5 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Our Mission
      </h2>
      <p class="mt-1 text-sm text-gray-700 pt-3">
        Urls were once a proud and long breed, frolicking in the fertile fields of the world wide
        web. Then the shortening companies came, tearing helpless URLs to shreds with reckless
        abandon, reducing the once noble creature to unrecognizable, cookie-cutter pieces of
        garbage, all in the name of "efficiency". And for what? So that scammers can more easily
        dictate their malware URLs to your helpless grandma. At URL Longener, we'd like to restore
        the dignity of the URL. Join us, and together we can make the web a longener place.
      </p>
      <img src="/meme.jpg" class="pt-3" />
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
