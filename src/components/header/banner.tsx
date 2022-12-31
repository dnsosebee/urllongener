import { component$ } from "@builder.io/qwik";
import { UrlLongenerLogo } from "../icons/urllongener";

export default component$(({ pro }: { pro: boolean }) => {
  return (
    <div class="bg-indigo-600">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex flex-1 flex-shrink-0 items-center">
            <a href="/" class=" rounded-lg bg-indigo-800 p-2">
              <UrlLongenerLogo />
            </a>
            <p class="ml-3 truncate font-medium text-white">
              <span>
                Sent with
                <span class=" text-2xl sick">
                  {" "}
                  Url Longener <span class="italic">{pro ? "Pro" : "Xpress"}</span>
                </span>
              </span>
            </p>
          </div>
          <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://urllongener.com"
              class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Longening Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
