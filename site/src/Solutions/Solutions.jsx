export default function Solutions() {
  return (
    <section className="relative">
      <article className="intro container mx-auto flex flex-col justify-start gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          Air pollution levels in London today are almost 40-times lower than
          their peak. Two forces primarily contributed:
        </p>
        <p>
          <strong>1. Policy:</strong> The London government regulated pollution,
          set fines for polluters, and more recently targets to reduce
          greenhouse gas emissions and vehicle emissions.
        </p>
        <p>
          The Public Health Act of 1891 began regulating smoke in London, and
          the conversation echoed what we hear today: claims that regulating
          pollution would lead to job losses. Following the Great Smog of 1952,
          the UK passed the Clean Air Act in 1956, banning open burning, and
          made stricter in 1968. (The U.S. Clean Air Act passed in 1963.) In
          both countries, quality of life and life expectancy have improved
          dramatically.
        </p>
        <details>
          <summary className="font-mono text-lg opacity-70 cursor-pointer">
            The Public Health Act of 1891
          </summary>
          <iframe
            src="https://archive.org/embed/publichealthlond00greaiala"
            width="512"
            height="680"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </details>

        <p>
          <strong>2. Technology:</strong> The country (& world) shifted away
          from coal to fossil gas, which burns cleaner, plus renewable energy
          sources like wind and solar.
        </p>
        <iframe
          src="https://ourworldindata.org/grapher/coal-output-uk-tonnes?tab=chart"
          loading="lazy"
          style={{
            width: "100%",
            height: 600,
            border: "none",
            filter: "invert(1) hue-rotate(180deg)",
          }}
          allow="web-share; clipboard-write"
        />
        <iframe
          src="https://ourworldindata.org/grapher/energy-consumption-by-source-and-country?country=~GBR&tab=chart"
          loading="lazy"
          style={{
            width: "100%",
            height: 600,
            border: "none",
            filter: "invert(1) hue-rotate(180deg)",
          }}
          allow="web-share; clipboard-write"
        />
      </article>
    </section>
  );
}
