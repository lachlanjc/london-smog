// Rooftops source https://historicengland.org.uk/images-books/photos/item/AA072997
// Battersea source https://historicengland.org.uk/images-books/photos/item/AA093777
import Viz from "./Viz";

export default function Air() {
  return (
    <section>
      <article className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          Cities in most high-income countries have relatively low levels of
          local air pollution. This hasn’t always been true—look at London.
        </p>
        <p>
          Here are the average levels of{" "}
          <strong>suspended particulate matter (SPM)</strong> in London’s air
          from 1700 to 2016. SPM refers to fine particles suspended in the
          atmosphere, such as soot, smoke, dust, and pollen. Exposure to high
          SPM—especially very small particles, which infiltrate the respiratory
          system—has been strongly linked to negative health impacts and
          premature death.
        </p>
        <p>
          By 1891, SPM levels had risen to over{" "}
          <span className="text-accent">600 μg/m³.</span> The&nbsp;WHO’s
          recommended maximum:{" "}
          <span className="text-[var(--color-avocado-500)]">12 μg/m³</span>.
        </p>
      </article>
      <div className="container mx-auto">
        <Viz />
      </div>
    </section>
  );
}
