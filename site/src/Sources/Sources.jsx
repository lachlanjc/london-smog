export default function Sources() {
  return (
    <footer>
      <article className="border-2 border-white/50 p-16 container max-w-3xl mx-auto flex flex-col gap-8 my-24 text-xl leading-8 tracking-tight text-white rounded-4xl">
        <h2 className="font-semibold text-4xl">Sources</h2>
        <p>
          Narrative and SPM data from Hannah Ritchie’s 2017{" "}
          <a href="https://ourworldindata.org/london-air-pollution">
            “What the history of London’s air pollution can tell us about the
            future of today’s growing megacities”
          </a>
          {" in "}
          Our World in Data.
        </p>
        <p>
          Power station map data collated from across{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_power_stations_in_England#Thermal">
            Wikipedia
          </a>
          .
        </p>
        <p className="font-semibold">Photos</p>
        <ul className="list-disc pl-8 -mt-4">
          <li>
            Cover slide: photo of the Battersea Power Station in London from{" "}
            <a href="https://historicengland.org.uk/images-books/photos/item/AA093777">
              Historic England
            </a>
          </li>
          <li>
            Coal: photo of Thames from{" "}
            <a href="https://www.ncm.org.uk/whats-on/the-hidden-lives-of-the-coal-traders/">
              National Coal Mining Museum
            </a>
          </li>
          <li>
            Coal: photo of smog over rooftops from{" "}
            <a href="https://wellcomecollection.org/works/h3cuknsg">
              Wellcome Collection
            </a>
          </li>
          <li>
            Map: Battersea Power Station from{" "}
            <a href="https://en.wikipedia.org/wiki/Battersea_Power_Station#/media/File:Battersea_Power_Station_from_the_river.jpg">
              Wikimedia
            </a>
          </li>
          <li>
            Map: Bankside Power Station photo from{" "}
            <a href="https://brownandmason.com/projects/bankside-power-station-current-tate-modern/">
              Brown and Mason
            </a>
          </li>
          <li>
            Great Smog: photos from the{" "}
            <a href="https://heritagecalling.com/2022/12/01/the-great-smog-of-london-1952/">
              Historic England Blog
            </a>
          </li>
          <li>
            Coal plant closure: hero image from{" "}
            <a href="https://www.theguardian.com/business/2024/sep/30/the-deep-history-of-british-coal-from-the-romans-to-the-ratcliffe-shutdown">
              Christopher Furlong/Getty Images
            </a>
          </li>
          <li>
            Congestion pricing: photo of London signage from{" "}
            <a href="https://belgravesoflondon.com/blog/what-is-the-london-congestion-charge">
              Belgraves of London
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
}
