import type { PropsWithChildren } from "react";

function AboutUsCardTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl leading-[1] font-bold underline decoration-blue-700 underline-offset-4 decoration-4">
      {children}
    </h2>
  );
}

export default AboutUsCardTitle;
