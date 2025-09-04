import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

export const HomeHorizontalSection = () => {
  useEffect(() => {
    // ScrollTrigger.defaults({ scroller: document.body });

    gsap.utils.toArray('.horizontal-section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');
      const [xStart, xEnd] = index % 2 ? [175, -75] : [-75, 175];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            // markers: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <div
      className="bg-cream mt-32 overflow-auto overflow-x-hidden"
      id="testimonials"
    >
      <h2 className="mb-20 text-center text-3xl font-bold text-primary md:text-4xl">
        Satisfied Clients
      </h2>
      <section className="horizontal-section h-fit">
        <div className="wrapper flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4 font-medium">
          <div
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border
              border-slate-800 p-5 md:w-[60vw] md:p-16"
          >
            <p className="mb-6">
              "I recently had a fantastic experience with a Hasnain R who
              customized my Zendesk platform. The service was quick, efficient,
              and perfectly tailored to my needs. I highly recommend this seller
              for any Zendesk customization projects!"
            </p>
            <small>Fiverr</small>
            <h4 className="font-semibold">katiedickins226</h4>
          </div>
          <div
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border
              border-slate-800 p-5 md:w-[40vw] md:p-16"
          >
            <p className="mb-6">
              "Hasnain delivered everything as discussed and on time, 100%
              recommended"
            </p>
            <small>Upwork</small>
            <h4 className="font-semibold">Arnaud Lesur</h4>
          </div>
        </div>
      </section>
      <section className="horizontal-section h-fit">
        <div className="wrapper flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4 font-medium">
          <div
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border
              border-slate-800 p-5 md:w-[40vw] md:p-16"
          >
            <p className="mb-6">
              "Worked great with us in ensuring all the changes we needed were
              done correctly and the way we needed!"
            </p>
            <small>Fiverr </small>
            <h4 className="font-semibold">briennars</h4>
          </div>
          <div
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border
              border-slate-800 p-5 md:w-[60vw] md:p-16"
          >
            <p className="mb-6">
              "Working with Hasnain was a great experience. He helped us out
              really quickly and professionally, especially pleasant to
              communicate with, thank you Hasnain!"
            </p>
            <small>Upwork</small>
            <h4 className="font-semibold">Jalle Van Goor Den Oosterlingh</h4>
          </div>
        </div>
      </section>

      {/* <section className="horizontal-section ">
        <div className="wrapper overflow flex whitespace-nowrap text-[16vh] font-medium">
          because life is a beautiful thing
        </div>
      </section>
      <section className="horizontal-section h-fit">
        <div className="wrapper overflow flex whitespace-nowrap text-[16vh] font-medium">
          and there's so much to smile about.
        </div>
      </section> */}
    </div>
  );
};
