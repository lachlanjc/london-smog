// Source: https://www.ncm.org.uk/whats-on/the-hidden-lives-of-the-coal-traders/
import boats from "./boats.webp";
// import rooftops from "./rooftops.webp";
import landscape from "./landscape.webp";
// import Viz from "./Viz";

export default function Coal() {
  return (
    <section className="max-w-screen relative pt-24">
      <article className="intro container mx-auto relative pb-24">
        <div className="grid grid-cols-[auto_1fr] gap-10 text-3xl leading-10 tracking-tight text-white">
          <p>
            London’s air quality from 1700 onwards worsened every decade: SPM
            doubled in nearly two centuries. The central cause of this
            pollution? <strong>Coal.</strong>
          </p>
          <div />
          <p>
            Britain has mined coal since the Roman empire, to heat baths and
            smelt iron, but primarily burned wood for energy. As the country ran
            out of forests, in 1712, Thomas Savery invented the first steam
            engine to (inefficiently) pump water out of coal mines, accelerating
            extraction.
          </p>
          {/* <img
            src={thomas}
            alt="Thomas Savery"
            width={768 / 2}
            height={492 / 2}
            className="w-full"
          /> */}
          <div />
          <div>
            <p className="mb-10">
              In 1769, James Watt improved and patented the steam engine. In
              1882, the first coal-fired power station was built in London,
              followed by a national grid. Barges of coal came streaming up the
              Thames.
            </p>
            <p>
              These steps kicked off the Industrial Revolution, which
              transformed Britain from a rural society into an urban one. Every
              household that could afford it burned coal for heating and
              cooking, industrial plants belched emissions, and coal-fired
              trains and ships ran everywhere. Thick, toxic{" "}
              <strong>air pollution</strong> enveloped London and its
              inhabitants.
            </p>
          </div>

          <img
            src={boats}
            alt="Boats"
            width={1920 / 4}
            height={1080 / 4}
            className="w-full"
          />
          {/* <img
            src={rooftops}
            alt="Rooftops"
            width={1802}
            height={1200}
            className="w-full"
          /> */}
        </div>
      </article>

      <img
        src={landscape}
        alt="Landscape of rooftops covered in smog"
        width={2143}
        height={1239}
        className="w-full"
      />
      {/* <div className="mx-auto mt-12 w-3xl">
        <Viz />
      </div> */}
    </section>
  );
}
