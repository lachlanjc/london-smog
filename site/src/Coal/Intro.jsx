import thomas from "./thomas.webp";
import Viz from "./Viz";

export default function Coal() {
  return (
    <section className="max-w-screen relative py-24">
      <article className="intro container mx-auto flex flex-col justify-start gap-10 relative">
        <div className="contents text-3xl leading-10 tracking-tight text-white">
          <p>
            The central reason for this air quality? <strong>Coal.</strong>
          </p>
          <p>
            Britain began mining coal in the Roman empire, to heat baths and
            smelt iron. In 1712, Thomas Savery invented the first steam engine,
            which (inefficiently) pumped water out of coal mines, accelerating
            mining. Steam engines could also power machinery in factories, then
            electricity.
          </p>
          <img
            src={thomas}
            alt="Thomas Savery"
            width={768 / 2}
            height={492 / 2}
            className="md:absolute right-0 top-0"
          />
          <p>
            In 1769, James Watt improved and patented the steam engine. In 1882,
            the first coal-fired power station was built in London, followed by
            a national grid.
          </p>
          <p>
            These steps kicked off the Industrial Revolution, which transformed
            Britain from a rural society into an urban one. And with that came
            worsening <strong>air pollution</strong>.
          </p>
        </div>
        <Viz />
      </article>
    </section>
  );
}
