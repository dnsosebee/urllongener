import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HeadlessDisclosure } from "~/integrations/react/headless-ui";

export default component$(() => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <HeadlessDisclosure
      imgSrc="/longener.svg"
      options={[
        { name: "Longener", href: "/", current: currentPath === "/" },
        { name: "Mission", href: "/mission/", current: currentPath === "/mission/" },
      ]}
    />
  );
});
