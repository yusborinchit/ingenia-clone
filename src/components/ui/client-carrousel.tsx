interface ClientCarrouselProps {
  clients: { img: string }[];
  direction?: "rtl" | "ltr";
}

function ClientCarrousel({ clients, direction = "rtl" }: ClientCarrouselProps) {
  const animationClass = `sponsors-carrousel-${direction}`;

  return (
    <div className="grid grid-cols-[repeat(3,max-content)]">
      <div className={`flex gap-8 pr-8 ${animationClass}`}>
        {clients.map((client) => (
          <a key={`${client.img}-1`} href="/">
            <img
              src={client.img}
              alt=""
              loading="lazy"
              className="h-12 object-contain"
            />
          </a>
        ))}
      </div>
      <div className={`flex gap-8 pr-8 ${animationClass}`}>
        {clients.map((client) => (
          <a key={`${client.img}-2`} href="/">
            <img
              src={client.img}
              alt=""
              loading="lazy"
              className="h-12 object-contain"
            />
          </a>
        ))}
      </div>
      <div className={`flex gap-8 pr-8 ${animationClass}`}>
        {clients.map((client) => (
          <a key={`${client.img}-2`} href="/">
            <img
              src={client.img}
              alt=""
              loading="lazy"
              className="h-12 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ClientCarrousel;
