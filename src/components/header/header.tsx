import { component$ } from "@builder.io/qwik";
import { HeadlessDisclosure } from "~/integrations/react/headless-ui";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default component$(() => {
  return <HeadlessDisclosure imgSrc="/longener.svg" options={[{ name: "Home", href: "/" }]} />;
});
