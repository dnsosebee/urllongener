import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

const Longener = component$(() => {
  const urls = useStore<string[]>([], { recursive: true });
  return (
    <div class="min-w-0 flex-1 items-center">
      <h2 class="pt-5 sick text-4xl">
        Url Longener <span class="italic">Lite</span>
      </h2>
      <div class="mx-auto w-full max-w-xs">
        <form
          class="pt-8 space-y-4"
          onSubmit$={(event: Event) => {
            const form = event.target as HTMLFormElement;
            const url = form.url.value;
            urls.push(url);
            console.log(urls);
          }}
          preventdefault:submit
        >
          <UrlInput />
          <button
            type="submit"
            class="flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Longen My Url!
          </button>
        </form>
      </div>
      {urls.length > 0 && (
        <div class="pt-8">
          <h3 class="text-lg font-medium text-gray-900">Your Longened Urls</h3>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {urls.map((url) => (
              <ListItem url={url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export const longen = (url: string) => {
  return `https://urllongener.com/${encodeURIComponent(url)}`;
};

export const ListItem = component$(({ url }: { url: string }) => {
  return (
    <div
      key={url}
      class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div class="min-w-0 flex-1">
        <a href={longen(url)} class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-500 truncate line-through">{url}</p>
          <p class="truncate text-sm text-gray-900">{longen(url)}</p>
        </a>
      </div>
    </div>
  );
});

export const UrlInput = component$(() => {
  return (
    <div class="">
      <label class="ml-px block pl-4 text-md font-medium text-gray-700">Your Plain Url</label>
      <div class="mt-1">
        <input
          type="url"
          name="url"
          id="url"
          class="block w-full rounded-full border border-gray-300 px-6 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-md"
          placeholder="https://www.example.com"
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Longener",
  meta: [
    {
      name: "Longener",
      content: "Url Longener Homepage",
    },
  ],
};

export default Longener;
