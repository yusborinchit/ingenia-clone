import type { PropsWithChildren } from "react";

function ServiceCardTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl leading-[1] font-bold">
      {children}
      <span className="text-blue-700">.</span>
    </h2>
  );
}

export default ServiceCardTitle;
