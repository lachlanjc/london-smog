import hero from "./battersea.webp";

export default function Intro() {
  return (
    <section>
      <header className="relative h-screen w-screen overflow-hidden">
        <h1 className="text-[20vh] tracking-[-12px] text-neutral-400/50 font-bold text-center absolute z-1 top-4 left-2/4 -translate-x-1/2">
          London
        </h1>
        <img
          src={hero}
          alt="Landscape of London in smog"
          className="w-full h-full object-cover object-top"
          width={3840}
          height={3989}
        />
      </header>
      <article className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          Cities in most high-income countries have relatively low levels of
          local air pollution. This, however, hasn’t always been the case.
        </p>
      </article>
    </section>
  );
}
