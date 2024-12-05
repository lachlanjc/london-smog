// Source https://heritagecalling.com/2022/12/01/the-great-smog-of-london-1952/
import pedestrians from "./pedestrians.webp";
import parliament from "./parliament.webp";

export default function Smog() {
  return (
    <section>
      <article className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p className="border-l border-l-accent border-l-8 pl-8 ">
          “London experienced frequent and severe fogs. Such fogs were often so
          dense that they halted railway journeys, interrupted general economic
          activities, and even contributed to London becoming a breeding ground
          for crime (crime rates rose sharply during these fog periods). London
          averaged 80 dense fog days per year, with some areas recording up to
          180 in 1885.”
        </p>
        <p>
          Pollution came to a breaking point. In the{" "}
          <strong>“Great&nbsp;Smog of 1952,”</strong> an estimated 12,000 people
          died in the span of 4&nbsp;days, and 100,000 became ill. Traffic
          wholly stopped. It&nbsp;was caused by household coal heating and
          industrial pollution mixed with unusually cold, still weather.
        </p>
      </article>
      <div className="px-12 mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={pedestrians}
            alt="Pedestrians"
            width={964}
            height={706}
            className="aspect-[16_/_10] w-full object-cover"
          />
          <img
            src={parliament}
            alt="Parliament"
            width={1536}
            height={914}
            className="aspect-[16_/_10] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
