import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap, { Linear } from 'gsap';

export const TextAppear = () => {
  const targetSection = useRef(null);
  const [isSafari, setIsSafari] = useState(null);

  useEffect(() => {
    const element = document.querySelector('.text-OpReveal');
    let timeline = new gsap.timeline({ paused: true, ease: Linear.easeNone });
    const span = element.querySelector('h2 span');

    timeline.fromTo(
      span,
      {
        // duration: 2
      },
      {
        backgroundPositionX: '-100%',
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'center bottom',
          end: 'center center',
          scrub: 0.5,
        },
      }
    );

    const isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window['safari'] ||
          (typeof safari !== 'undefined' && safari.pushNotification)
      );
    setIsSafari(isSafari);
    return () => {};
  }, []);

  return (
    <div
      className="main-container text-OpReveal flex min-h-[80vh] items-center justify-center"
      ref={targetSection}
    >
      <div className="container px-4 py-36 md:px-2 lg:px-0">
        <h2 className="text-center text-2xl font-semibold leading-[1.5] md:text-4xl lg:text-6xl">
          <span
            className={`text-gradient ${
              isSafari ? 'box-decoration-clone' : ''
            }`}
          >
            I'm a passionate developer focused on building scalable and
            performant websites. I take responsibility for crafting a good user
            experience using modern frontend architecture.
          </span>
        </h2>
      </div>
    </div>
  );
};
