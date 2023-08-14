import type { PropsWithChildren } from "react";

interface ServiceCardProps extends PropsWithChildren {
  img: string;
  alt: string;
  isInverted?: boolean;
}

function ServiceCard({
  img,
  alt,
  children,
  isInverted = false,
}: ServiceCardProps) {
  return (
    <article className="grid sm:grid-cols-2">
      <img
        src={img}
        alt={alt}
        className={`rounded h-full object-cover ${isInverted && "sm:order-2"}`}
      />
      <div
        className={`p-8 gap-4 h-full flex items-center justify-center flex-col ${
          isInverted && "sm:order-1"
        }`}>
        {children}
      </div>
    </article>
  );
}

export default ServiceCard;
