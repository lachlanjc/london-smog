import hero from "./battersea.webp";

export default function Intro() {
  return (
    <section>
      <header className="relative h-screen w-screen overflow-hidden">
        <h1 className="text-[25vh] tracking-[-14px] w-full text-neutral-100/30 font-bold text-center absolute z-1 bottom-14 left-2/4 -translate-x-1/2 leading-[1]">
          London Smog
        </h1>
        <img
          src={hero}
          alt="Landscape of London in smog"
          className="w-full h-full object-cover [object-position:center_25%]"
          width={3840}
          height={3989}
        />
      </header>
    </section>
  );
}
