import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import Image from 'next/image';
import { gsap, Linear } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import likeCrazyLottie from '../../lottie/hero-anim.json';
import authorPic from '../../images/hh-web-4.png';
import scrollerImg from '../../../public/scrollerdown.svg';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(TextPlugin);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);

  const authorImage = useRef(null);

  const whatIdo = [
    'A pragmatic Full Stack Developer',
    'I transform ideas into outstanding user experiences',
    'I Am Passionate Freelancer',
  ];

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('.h_title span span');
      const delay = index * 1;

      tl.to(el, {
        y: 0,
        duration: 0.75,
        ease: 'cubic-text',
      });
    });

    tl.to(authorImage.current, { opacity: 1 });

    // tl.add(() => likeCrazyLottieRef?.current?.play(), 0.2);

    // tl.fromTo(
    //   '.social-links',
    //   { x: 40, opacity: 0 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     ease: 'power2.inOut',
    //     duration: 0.75,
    //   }
    // );

    tl.fromTo(
      '.social-btn',
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.25,
      }
    );

    tl.to('#whatIdo .cursor', {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
      duration: 0.75,
    });

    // tl.to('.scroller-rotate', {rotation:"360", ease:Linear.easeNone, duration: 10,  repeat:-1});
    tl.to('.scroller-rotate', { opacity: 1, ease: 'power2.inOut' });

    let tlMaster = gsap.timeline({ repeat: -1, delay: 2 });
    whatIdo.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 4 });
      tlText.to('#whatIdo .texttt', { duration: 2, text: word, delay: 0.5 });
      tlMaster.add(tlText);
    });

    // let socialExpand = gsap.timeline({paused: true}) // or tween
    // .to('.social-btn', { width: 200, ease:"power4.inOut", })
    // .to('.social-btn span', { width: 'auto', opacity: 1, xPercent:5, ease:"power4.inOut"})

    const social_btns = document.querySelectorAll('.social-btn');

    social_btns.forEach(function (el) {
      let socialExpand = new gsap.timeline({ paused: true });
      const span = el.querySelector('span');

      socialExpand.to(el, { width: 200, ease: 'power4.inOut' });
      socialExpand.to(span, {
        width: 'auto',
        opacity: 1,
        xPercent: 5,
        ease: 'power4.inOut',
      });

      el.addEventListener('mouseenter', function () {
        if (window.innerWidth > 767) {
          socialExpand.play();
        }
      });

      el.addEventListener('mouseleave', function () {
        if (window.innerWidth > 767) {
          socialExpand.reverse();
        }
      });
    });

    return () => {};
  }, []);

  return (
    <div className="flex items-center min-h-screen " id="home">
      <div className="container flex flex-col items-center px-4 h_container md:px0 md:flex-row">
        <div className="w-full text-center md:w-1/2 md:text-start">
          <h1 className="h_title relative mb-4 w-full text-2xl font-bold leading-[90%] text-primary md:mb-8 lg:text-5xl">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                Hello,
              </span>
            </span>
          </h1>
          <h1 className="h_title  relative mb-4 w-full text-5xl font-bold leading-[100%] lg:text-[4vw]">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                I am Hasnain.
              </span>
            </span>
          </h1>

          <h1 className="h_title relative mb-4 w-full font-jetbrains text-xl font-semibold  leading-[90%] text-[#aaaaaa] lg:text-3xl">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span
                id="whatIdo"
                className="inline-block min-h-[80px] translate-y-full pb-1.5 pt-6 will-change-transform md:min-h-[90px] lg:min-h-[110px] "
              >
                <span className="box"></span>
                <span className="leading-6 capitalize texttt"></span>
                <span className="text-white cursor">|</span>
              </span>
            </span>
          </h1>
          <div className="flex justify-center social-links md:justify-start">
            <a href="https://www.linkedin.com/in/hasnain-raza/" target="_blank">
              <div
                className="social-btn link relative m-[0.35rem] flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white px-2 opacity-0 opacity-0 shadow-md md:m-2 md:ml-0 md:h-12 md:w-12 md:px-3"
                id="linkedin"
              >
                <svg
                  className="h-[21px] w-[21px] fill-[#0e76a8] md:h-[24px] md:w-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                <span className="left-[40px] w-0 whitespace-nowrap font-bold text-black opacity-0">
                  in/hasnain-raza
                </span>
              </div>
            </a>

            <a href="https://github.com/hasnainabidali" target="_blank">
              <div
                className="social-btn link relative m-[0.35rem] flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white px-2 shadow-md md:m-2 md:h-12 md:w-12 md:px-3"
                id="github"
              >
                <svg
                  className="h-[21px] w-[21px] fill-[#333] md:h-[24px] md:w-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="left-[40px] w-0 font-bold text-black opacity-0">
                  hasnainabidali
                </span>
              </div>
            </a>
            <a href="https://www.facebook.com/hasnainreeza" target="_blank">
              <div
                className="social-btn link relative m-[0.35rem] flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white px-2 opacity-0 shadow-md md:m-2 md:h-12 md:w-12 md:px-3"
                id="facebook"
              >
                <svg
                  className="h-[21px] w-[21px] md:h-[24px] md:w-[24px]"
                  viewBox="-5 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>facebook [#176]</title>
                    <desc>Created with Sketch.</desc> <defs> </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-385.000000, -7399.000000)"
                        fill="#4460A0"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                            id="facebook-[#176]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="left-[40px] w-0 font-bold text-black opacity-0">
                  hasnainreeza
                </span>
              </div>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~012bd8728eb5eabde2"
              target="_blank"
            >
              <div
                className="social-btn link relative m-[0.35rem] flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white px-2 opacity-0 shadow-md md:m-2 md:h-12 md:w-12 md:px-3"
                id="fiverr"
              >
                <svg
                  fill="#14a800"
                  className="h-[21px] w-[21px] md:h-[24px] md:w-[24px]"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>
                </svg>
                <span className="left-[40px] w-0 font-bold text-black opacity-0">
                  HasnainR.
                </span>
              </div>
            </a>
            <a href="https://www.fiverr.com/hasnain_reza" target="_blank">
              <div
                className="social-btn link relative m-[0.35rem] flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white px-2 opacity-0 shadow-md md:m-2 md:h-12 md:w-12 md:px-3"
                id="upwork"
              >
                <svg
                  fill="#20bf76"
                  className="h-[20px] w-[21px] md:h-[24px] md:w-[24px]"
                  viewBox="-2.5 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  class="jam jam-fiverr"
                >
                  <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
                  <circle cx="14.375" cy="1.875" r="1.875"></circle>
                </svg>
                <span className="left-[40px] w-0 font-bold text-black opacity-0">
                  @hasnain_reza
                </span>
              </div>
            </a>
          </div>
          <div className="scroller-rotate absolute bottom-16 hidden h-[105px] w-[105px] animate-spin-slow opacity-0 md:block">
            <Image
              src={scrollerImg}
              className="mx-auto rounded-full"
              width={105}
              height={105}
              alt="Scroll Down"
            />
          </div>
        </div>
        <div className="w-full mt-14 md:mt-0 md:w-1/2">
          <div ref={authorImage} className="px-4 text-center opacity-0 md:px-0">
            <Image
              src={authorPic}
              className="mx-auto rounded-full"
              width={450}
              height={450}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
