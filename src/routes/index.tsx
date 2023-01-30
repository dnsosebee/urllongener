import { $, component$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";

const Page = component$(() => {
  return <Longener urls={[]} />;
});

export const Longener = component$(({ urls }: { urls: string[] }) => {
  const navigate = useNavigate();

  // useClientEffect$(() => {
  //   const f = document.getElementById("form");
  //   console.log("wiring up form");
  //   console.log(f);
  //   if (f) {
  //     f.addEventListener("submit", async (e) => {
  //       e.preventDefault();
  //       const form = e.target as HTMLFormElement;
  //       const url = form.url.value;
  //       console.log("submitting", url);
  //       await navigator.clipboard.writeText(longen(url));
  //       alert("Url longened and copied to clipboard!");
  //     });
  //   }
  //   const b = document.getElementById("example-url");
  //   if (b) {
  //     b.addEventListener("click", async () => {
  //       const url = "https://timecube.2enp.com/";
  //       await navigator.clipboard.writeText(longen(url));
  //       alert("Url longened and copied to clipboard!");
  //     });
  //   }
  // });

  return (
    <div class="min-w-0 flex-1 items-center">
      <p class="text-lg pt-10 ">
        <span class="sick text-4xl">
          Url Longener <span class="italic">Xpress</span>
        </span>
      </p>
      <p class="italic pt-3 pl-20 text-pink-900 pb-5 font-serif">
        "The preferred way to share websites on the internet."
      </p>
      <div class="mx-auto w-full max-w-xs">
        <form
          id="form"
          class="py-4 px-6 space-y-4 shadow-2xl rounded-3xl paradise"
          onSubmit$={async (event: Event) => {
            const form = event.target as HTMLFormElement;
            const url = form.url.value;
            if (urls.includes(url)) {
              alert("Url already longened!");
              return;
            }
            urls.push(url);
            await navigator.clipboard.writeText(longen(url));
            alert("Url longened and copied to clipboard!");
            navigate.path = `/${encodeURIComponent(JSON.stringify(urls))}`;
            console.log(urls);
          }}
          preventdefault:submit
        >
          <UrlInput />
          <button
            type="submit"
            id="submit-url"
            class="flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 shadow-xl"
          >
            Longen My Url
          </button>
        </form>
        <div class={urls.length > 0 ? "" : "h-5"} />
        <button
          onClick$={async () => {
            const url = "https://timecube.2enp.com/";
            if (urls.includes(url)) {
              alert("Url already longened!");
              return;
            }
            urls.push(url);
            await navigator.clipboard.writeText(longen(url));
            alert("Url longened and copied to clipboard!");
            navigate.path = `/${encodeURIComponent(JSON.stringify(urls))}`;
            console.log(urls);
          }}
          class={`italic font-serif shadow-xl flex justify-center py-1 px-2 border border-transparent shadow-sm text-lg font-medium rounded-2xl text-white bg-pink-500 hover:bg-pink-600 focus:ring-2 ${
            urls.length > 0 ? "hidden" : ""
          }`}
          id="example-url"
        >
          Or, show me an example
        </button>
      </div>
      {urls.length > 0 && (
        <div class="pt-8">
          <h3 class="text-xl font-bold text-blue-900 text-center pt-5 font-thin border-t-2">
            Your longened URLs. Share them far and wide!
          </h3>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6">
            {urls.map((url) => (
              <ListItem
                url={url}
                onDelete$={$(() => {
                  urls.splice(urls.indexOf(url), 1);
                  navigate.path = `/${encodeURIComponent(JSON.stringify(urls))}`;
                })}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export const longen = (url: string) => {
  return `https://urllongener.com/longened/${encodeURIComponent(url)}`;
};

export const ListItem = component$(({ url, onDelete$ }: { url: string; onDelete$: () => void }) => {
  return (
    <div key={url} class="col-span-1 divide-y divide-gray-200 rounded-lg paradise shadow-xl">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">
              <span class="select-none italic font-thin">short: </span>
              {url}
            </h3>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">
            <span class="select-none italic font-thin">long: </span>
            {longen(url)}
          </p>
        </div>
      </div>
      <div class="flex justify-between px-4 py-2">
        <iframe src={url} class="w-full h-32 border-2 border-slate-300" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1">
            <a
              href={longen(url)}
              target="_blank"
              rel="noopener noreferrer"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>

              <span class="ml-3">Visit your longened URL</span>
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <button
              onClick$={onDelete$}
              class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <span class="ml-3">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   key={url}
    //   class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    // >
    //   <div class="min-w-0 flex-1">
    //     <a href={longen(url)} class="focus:outline-none">
    //       <span class="absolute inset-0" aria-hidden="true" />
    //       <p class="text-sm font-medium text-gray-500 truncate line-through">{url}</p>
    //       <p class="truncate text-sm text-gray-900">{longen(url)}</p>
    //     </a>
    //   </div>
    //   <button
    //     type="button"
    //     class="absolute inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    //   >
    //     Button text
    //   </button>
    // </div>
  );
});

export const UrlInput = component$(() => {
  return (
    <div class="">
      <label class="ml-px block pl-4 text-xl font-semibold text-gray-700 rounded">
        Enter any URL below
      </label>
      <div class="mt-1">
        <input
          type="url"
          name="url"
          id="url"
          class="block w-full rounded-full border border-gray-300 px-6 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-md"
          placeholder="https://timecube.2enp.com/"
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

export default Page;
