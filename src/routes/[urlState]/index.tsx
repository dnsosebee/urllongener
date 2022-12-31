import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Longener } from "..";

export default component$(() => {
  const location = useLocation();
  const state = useStore<{ urls: string[] }>({ urls: [] }, { recursive: true });
  useTask$(({ track }) => {
    track(() => location.params.urlState);
    state.urls = JSON.parse(decodeURIComponent(location.params.urlState));
  });
  return <Longener urls={state.urls} />;
});
