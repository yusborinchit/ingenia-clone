import type { PropsWithChildren } from "react";

function ServiceCardTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="text-2xl leading-[1] font-bold">
      <span>{children}</span>
      <span className="text-blue-700 inline-block">.</span>
    </h3>
  );
}

export default ServiceCardTitle;
