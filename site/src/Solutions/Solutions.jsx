import population from "./population.jpg";

export default function Solutions() {
  return (
    <section className="relative">
      <article className="intro container mx-auto flex flex-col justify-start gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          Air pollution levels in London today are almost 40-times lower than
          their peak. 2 primary forces improved the air quality:
        </p>
        {/* <p>
          <strong>1. Dispersal:</strong> As the train network around London
          grew, people were able to work in the city but live in the suburbs,
          reducing the population/pollution density.
        </p> */}
        <p>
          <strong>1. Technology:</strong> The country (& world) shifted
          electricity generation from coal to fossil gas, which burns cleaner,
          plus renewable energy sources like wind and solar.
        </p>
        <p>
          <strong>2. Policy:</strong> The London government set fines for
          polluters, and more recently targets to reduce greenhouse gas
          emissions and vehicle emissions.
        </p>
        <details>
          <summary className="font-mono text-lg opacity-50">
            The Public Health Act of 1891 regulated the burning of coal in
            London
          </summary>
          <iframe
            src="https://archive.org/embed/publichealthlond00greaiala"
            width="512"
            height="680"
            frameBorder="0"
            webkitAllowFullscreen
            mozAllowFullscreen
            allowFullscreen
          />
        </details>
      </article>
    </section>
  );
}
