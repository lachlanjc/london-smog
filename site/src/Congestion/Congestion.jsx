// Hero via https://belgravesoflondon.com/blog/what-is-the-london-congestion-charge/
import hero from "./hero.jpg";

export default function Congestion() {
  return (
    <section>
      <img
        src={hero}
        alt="Landscape of congestion pricing zone in London signage"
        className="w-full aspect-video object-cover object-center"
        width={2560}
        height={1704}
      />
      <article className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          In 2003, London implemented <strong>congestion pricing</strong> on
          traffic in the city center. The goal was to reduce traffic and air
          pollution. The charge was £5 per day (now £18), which dropped traffic
          by 30%, dramatically reducing air pollution. London’s air quality is
          still far worse than New&nbsp;York’s, but it’s improving.
        </p>
        <p>
          When this project began, New York’s attempt at congestion pricing had
          been killed by Governor Kathy Hochul. It’s now planned to take effect
          over the holidays, with a $9 fee for private cars, so we can see some
          of the same benefits.
        </p>
      </article>
    </section>
  );
}
