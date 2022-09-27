import partners from "../../data/partners.json";

export default function Partners() {
  return (
    <>
      {partners.map((partners) => (
        <div className="partner-item">
          <a href={partners.link}>
            <img
              src={`/assets/imgs/partners/` + partners.img}
              alt={partners.name}
            />
          </a>
        </div>
      ))}
    </>
  );
}
