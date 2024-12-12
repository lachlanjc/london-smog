// Rooftops source https://historicengland.org.uk/images-books/photos/item/AA072997
// Battersea source https://historicengland.org.uk/images-books/photos/item/AA093777
import Viz from "./Viz";

export default function Air() {
  return (
    <section>
      <article className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight text-white">
        <p>
          Cities in most high-income countries have relatively low levels of
          local air pollution. This, however, hasn’t always been the case.
        </p>
        <p>
          Here are the average levels of{" "}
          <strong>suspended particulate matter (SPM)</strong> in London’s air
          from 1700 to 2016. SPM refers to fine solid or liquid particles
          suspended in Earth’s atmosphere (such as soot, smoke, dust, and
          pollen). Exposure to SPM – especially very small particles, which
          infiltrate the respiratory system – has been strongly linked to
          negative health impacts and premature death.
        </p>
      </article>
      <div className="container mx-auto">
        <Viz />
      </div>
    </section>
  );
}
