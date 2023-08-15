import type { PropsWithChildren } from "react";

function AboutUsCardTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="text-2xl leading-[1] font-bold underline decoration-blue-700 underline-offset-4 decoration-4">
      {children}
    </h3>
  );
}

export default AboutUsCardTitle;
