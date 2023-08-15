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
    <article className="grid sm:grid-cols-2 sm:gap-4">
      <div className={`relative ${isInverted && "sm:order-2"}`}>
        <div
          className={`bg-gradient-to-t from-white via-transparent to-transparent absolute inset-0 ${
            isInverted
              ? "sm:bg-gradient-to-r sm:via-white/30"
              : "sm:bg-gradient-to-l sm:via-white/30"
          }`}
        />
        <img src={img} alt={alt} className="rounded h-full object-cover" />
      </div>
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
