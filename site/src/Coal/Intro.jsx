import thomas from "./thomas.webp";
import Viz from "./Viz";

export default function Coal() {
  return (
    <section className="max-w-screen relative py-24">
      <article className="intro container mx-auto flex flex-col justify-start gap-10 relative">
        <div className="contents text-3xl leading-10 tracking-tight text-white">
          <p>
            London’s air quality from 1700 onwards worsened every decade: SPM
            doubled in nearly two centuries. The central reason for this
            decline? <strong>Coal.</strong>
          </p>
          <p>
            Britain began mining coal in the Roman empire, to heat baths and
            smelt iron, but primarily burned wood for energy. As the country ran
            out of forests, in 1712, Thomas Savery invented the first steam
            engine to (inefficiently) pump water out of coal mines, accelerating
            extraction.
          </p>
          <img
            src={thomas}
            alt="Thomas Savery"
            width={768 / 2}
            height={492 / 2}
            className="md:absolute right-0 md:top-36"
          />
          <p>
            In 1769, James Watt improved and patented the steam engine. In 1882,
            the first coal-fired power station was built in London, followed by
            a national grid.
          </p>
          <p>
            These steps kicked off the Industrial Revolution, which transformed
            Britain from a rural society into an urban one. Every household that
            could afford it burned coal for heating and cooking, industrial
            plants belched emissions, and coal-fired trains and ships ran
            everywhere. Thick, toxic <strong>air pollution</strong> enveloped
            London and its inhabitants.
          </p>
        </div>
        <Viz />
      </article>
    </section>
  );
}
