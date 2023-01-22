import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-w-0 flex-1">
      <h2 class="pt-10 sick text-4xl">
        Our <span class="italic">Mission</span>
      </h2>
      <p class="mt-1 text-sm text-gray-700 pt-3 pb-5">
        Urls were once a proud and long breed, frolicking in the fertile fields of the world wide
        web. Then the shortening companies came, reducing the once noble creature to unrecognizable,
        cookie-cutter pieces of garbage, all in the name of "efficiency". And for what? So that
        scammers can more easily dictate their malware URLs to your helpless grandma. We'd like to
        restore the dignity of the URL, we'd like to make sharing links more fun and more colorful,
        and we want to make the web... a longener place (tm).
      </p>
      <div class="flex justify-center">
        <img
          src="/meme.png"
          class="w-100 pt-3"
          style={{ width: "25rem", padding: "5px", border: "1px solid #021a40" }}
          alt="Winnie the Pooh approves of longened URLs."
        />
      </div>
      <h2 class="pt-10 sick text-2xl">
        Our <span class="italic">Tech</span>
      </h2>
      URL Longener is built with{" "}
      <a
        href="https://qwik.builder.io/"
        class="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener"
      >
        Qwik
      </a>{" "}
      and{" "}
      <a
        href="https://tailwindui.com"
        class="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener"
      >
        Tailwind UI
      </a>{" "}
      and uses decentralized storage (everything is stored in your URL bar, even your list of
      longened URLs).
      <br />
      Here's the{" "}
      <a
        href="https://github.com/dnsosebee/urllongener"
        class="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener"
      >
        Source Code
      </a>
      .<br />
      <br />
      Furiously maintained by{" "}
      <a
        href="https://www.twitter.com/dnsosebee"
        class="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener"
      >
        Daniel Sosebee
      </a>
      .
      <br />
      <div class="flex justify-center">
        <image src="/longener.svg" class="pt-3 self-center" style={{ width: "5rem" }} />
      </div>
      <div class="pb-5" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Longener",
  meta: [
    {
      name: "Mission",
      content: "This page contains the mission statement for the Url Longener project.",
    },
  ],
};
