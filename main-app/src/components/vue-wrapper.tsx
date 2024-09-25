import { useRef, useEffect } from "react";
import { createApp, Component } from "vue";
import { vuetify } from "../utils/vuetify";

type VueWrapperProps = {
  component: Component;
};

export default function VueWrapper({ component, ...props }: VueWrapperProps) {
  const vueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("mounted");

    if (vueRef.current) {
      const vueApp = createApp(component, props);
      vueApp.use(vuetify);
      vueApp.mount(vueRef.current);

      return () => {
        vueApp.unmount();
      };
    }
  }, [component]);

  return <div ref={vueRef} />;
}
