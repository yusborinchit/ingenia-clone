interface Client {
  img: string;
}

interface ClientCarrouselProps {
  clients: Client[];
  direction?: "rtl" | "ltr";
}

function ClientCarrousel({ clients, direction = "rtl" }: ClientCarrouselProps) {
  const animation =
    direction === "rtl" ? "animate-carrousel-rtl" : "animate-carrousel-ltr";

  return (
    <div className="grid grid-cols-[repeat(3,max-content)]">
      <div className={`flex gap-8 pr-8 ${animation}`}>
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
      <div className={`flex gap-8 pr-8 ${animation}`}>
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
      <div className={`flex gap-8 pr-8 ${animation}`}>
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
