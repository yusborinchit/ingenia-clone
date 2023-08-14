import type { CSSProperties, PropsWithChildren } from "react";

interface AboutUsCardProps extends PropsWithChildren {
  img: string;
  order: string;
}

function AboutUsCard({ img, children, order }: AboutUsCardProps) {
  return (
    <article
      style={{ "--about-image": `url("${img}")` } as CSSProperties}
      className={`grid place-items-center rounded relative before:absolute before:filter before:grayscale px-8 before:-z-20 before:[background-image:var(--about-image)] before:bg-cover before:bg-center before:inset-0 before:brightness-[40%] hover:before:scale-110 overflow-hidden before:transition-all before:duration-300 before:hover:brightness-[30%] py-24 ${order}`}>
      <div className="text-white">{children}</div>
    </article>
  );
}

export default AboutUsCard;
