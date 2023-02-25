import Quotes from "@/components/Quotes/page";
import React from "react";

function Testimonial() {
  const description = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { text: 'Vestibulum ante ipsum primis', type: 'italic' },
    { text: ' in faucibus orci luctus et ultrices posuere cubilia Curae; Sed dignissim leo eget sapien pulvinar, vitae commodo mauris bibendum.' },
  ];
  return (
    <>
      <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonials
        </h2>

        <Quotes
          quote=" Acme has always been there for me. Their Explorer rocket arrived in a wooden create as expected.Life-long customer! A++ shopping experience"
          author="Wile E. Coyote, Genius"
        />
        <Quotes
          quote={` The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
                        occassions.<span className="italic">This makes me very, very angry!</span> Nevertheless, K-9
                        and I have awarded Acme the
                        Martian contract for space exploration rockets based on Acme's quality and sturdy designs.`}
          author="Marvin The Martian &amp; K-9"
        />
        <Quotes
          quote=" I knew I not only wanted &#8212; I needed &#8212; Acme's Infinity
          Rocket for my mission in space. Acme delivered in one day! Nothing says Take
              me
              to your leader like Acme's Infinity Rocket! 💯"
          author=" Buzz Lightyear"
        />
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </> 
  );
}

export default Testimonial;
