// Source https://www.npr.org/2024/09/30/nx-s1-5133426/uk-quits-coal-climate-change
// Hero image https://www.theguardian.com/business/2024/sep/30/the-deep-history-of-british-coal-from-the-romans-to-the-ratcliffe-shutdown

import hero from "./hero.avif";
// import night from "./night.webp";
// import green from "./green.webp";
import truck from "./truck.webp";
import train from "./train.webp";

export default function Closure() {
  return (
    <section>
      <img
        src={hero}
        alt="Landscape of coal plant and yard"
        className="w-full"
        width={3800}
        height={2282}
      />
      <article className="intro container mx-auto flex flex-col pt-24 pb-16 text-3xl leading-10 tracking-tight text-white">
        <p className="flex items-center gap-3 font-mono text-lg opacity-50 mb-6">
          <svg
            width={24}
            height={24}
            viewBox="-2 -2 26 28"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <title>Pin</title>
            <path
              d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
        c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
        C20.1,15.8,20.2,15.8,20.2,15.7z`}
            />
          </svg>
          Nottinghamshire, England
        </p>
        <p>
          In October, the final coal-fired power station in the UK closed its
          doors. The UK was the first country to industrialize, and coal has
          been a key part of the country’s energy mix for over 200 years. The
          closure clears the air on a long history.
        </p>
      </article>
      <div className="container mx-auto pb-48">
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={truck}
            alt="Truck"
            width={1600}
            height={1079}
            className="aspect-[16_/_10] object-cover"
          />
          <img
            src={train}
            alt="Train"
            width={1920}
            height={1440}
            className="aspect-[16_/_10] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
