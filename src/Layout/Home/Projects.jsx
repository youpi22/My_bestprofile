import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PROJECTS } from 'constant';
import gsap from 'gsap';
import { MenuButton } from '@/components';

export const Projects = () => {
  useEffect(() => {
    gsap.utils.toArray('.project-item').forEach((section, index) => {
      const Leftwrapper = section.querySelector('.left-projectImage');
      const Rightwrapper = section.querySelector('.right-projectImage');
      gsap.fromTo(
        section,
        { y: '14%' },
        {
          y: '6%',
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
      gsap.fromTo(
        Leftwrapper,
        { x: '100%', rotateZ: 0 },
        {
          x: '-12%',
          rotateZ: -2.9,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
      gsap.fromTo(
        Rightwrapper,
        { x: '-100%', rotateZ: 0 },
        {
          x: '12%',
          rotateZ: 2.9,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <div className="project-list pt-24" id="works">
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:mb-8 md:text-5xl">
        Featured Work
      </h2>
      <h2 className="text-center text-sm font-bold uppercase tracking-widest opacity-80 md:text-base">
        Recent Projects
      </h2>
      {PROJECTS.map((el) => (
        <section
          className="color-section"
          data-bgcolor={el.bgColor}
          data-endbgcolor={el.endbgcolor}
          data-textcolor={el.textColor}
        >
          <div className="project-item h-full w-full lg:h-[160vh] ">
            <div className="sticky top-0 flex h-full w-full flex-col items-center justify-center overflow-hidden py-10 md:py-0 lg:h-[80vh] lg:flex-row">
              <div className="left-projectImage z-10 will-change-transform">
                <Image
                  src={el.leftImg}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-[230px] w-full md:h-[280px] lg:h-auto"
                  alt="Picture of the author"
                />
              </div>
              <div className="projectWrapper relative z-0 flex h-[300px] w-full max-w-[600px] flex-col items-center justify-center gap-y-[20px] px-[64px] py-10 md:py-0 lg:h-full lg:w-[50vw] lg:gap-y-[120px]">
                <div className="text-center text-sm font-medium uppercase tracking-wide">
                  {el.techs.map((tech) => (
                    <div>{tech}</div>
                  ))}
                </div>
                <h2 className="text-center text-3xl leading-[1.25em] md:text-5xl">
                  {el.title}
                </h2>
                <MenuButton
                  classes="md:text-sm text-sm border rounded-full w-[60px] text-center"
                  link={el.link}
                >
                  Visit
                </MenuButton>
              </div>
              <div className="right-projectImage z-10 will-change-transform">
                <Image
                  src={el.RightImg}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-[230px] w-full md:h-[280px] lg:h-auto"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
