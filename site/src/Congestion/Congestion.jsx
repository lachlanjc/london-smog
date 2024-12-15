// Hero via https://belgravesoflondon.com/blog/what-is-the-london-congestion-charge/
import hero from "./hero.jpg";

export default function Congestion() {
  return (
    <section className="grid grid-cols-[2fr_1fr]">
      <article className="intro container mx-auto flex flex-col gap-10 p-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          In 2003, London implemented <strong>congestion pricing</strong> on
          traffic in the city center. The goal was to reduce traffic and air
          pollution. The £5 charge (now £18) dropped traffic by 30%,
          dramatically reducing air pollution. London’s air quality is still far
          worse than New&nbsp;York’s, but improving.
        </p>
        <p>
          When this project began, New York City’s attempt at congestion
          pricing, first proposed in 2007, had been killed by Governor Kathy
          Hochul. It’s now planned to take effect January 5, with a $9 fee for
          cars in Lower Manhattan, promising some of the same benefits here.
          Lawsuits and the incoming president still threaten this progress.
        </p>
      </article>
      <img
        src={hero}
        alt="Landscape of congestion pricing zone in London signage"
        className="w-full h-screen object-cover object-center"
        width={2560}
        height={1704}
      />
    </section>
  );
}
