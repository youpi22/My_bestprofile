import React, { useEffect, useRef } from 'react';

import { OTHER_SKILLS, SKILLS } from 'constant';
import Image from 'next/image';
import gsap from 'gsap';

export const SkillsSection = () => {
  useEffect(() => {
    const skills = document.querySelectorAll('.skillset li');
    skills.forEach(function (el) {
      let skillsExpand = new gsap.timeline({ paused: true });
      const span = el.querySelector('span');

      // socialExpand.to(el, { width: 200, ease:"power4.inOut", })
      skillsExpand.to(span, { scale: 1, ease: 'power4.inOut' });

      el.addEventListener('mouseenter', function () {
        skillsExpand.play();
      });

      el.addEventListener('mouseleave', function () {
        skillsExpand.reverse();
      });
    });

    return () => {};
  }, []);

  return (
    <div
      className="container mt-20 flex min-h-[80vh] flex-col items-center justify-center md:mt-0"
      id="skills"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
        Skills
      </h2>
      <h2 className="text-center font-bold uppercase tracking-widest opacity-80">
        Frontend DEVELOPMENT
      </h2>
      <ul className="skillset my-12 flex flex-wrap items-center justify-center">
        {SKILLS.map((el) => (
          <li className="relative mb-4 px-4 text-center md:mb-0">
            <Image
              src={el.img}
              width={65}
              height={65}
              className="mx-auto mb-4 h-[50px] w-[50px] rounded-full bg-white md:h-[65px] md:w-[65px]"
              alt="Skill"
            />
            <span className="absolute left-[50%] hidden w-max translate-x-[-50%] scale-0 rounded bg-primary px-3 py-[6px] text-xs font-semibold text-black md:block">
              {el.title}
            </span>
          </li>
        ))}
      </ul>
      <h2 className="text-center font-bold uppercase tracking-widest opacity-80">
        Other Skills
      </h2>
      <ul className="skillset mt-12 flex flex-wrap items-center justify-center">
        {OTHER_SKILLS.map((el) => (
          <li className="relative mb-4 px-4 text-center md:mb-0">
            <Image
              src={el.img}
              width={65}
              height={65}
              className="mx-auto mb-4 h-[50px] w-[50px] rounded-full md:h-[65px] md:w-[65px]"
              alt="Skill"
            />
            <span className="absolute left-[50%] hidden w-max translate-x-[-50%] scale-0 rounded bg-primary px-3 py-[6px] text-xs font-semibold text-black md:block">
              {el.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
