import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  Header,
  Footer,
  Cursor,
  Layout,
  ProgressIndicator,
} from '@/components';
import scrollerImg from '../../../public/scrollerdown.svg';
import { METADATA } from 'constant';

export default function Zendesk() {
  useEffect(() => {
    const titles = document.querySelectorAll('.h_title .h_title_span');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('.h_title span span');
      const delay = index * 1;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    tl.to('.scroller-rotate', { opacity: 1, ease: 'power2.inOut' });

    const footer = document.querySelector('.footer');
    const lastCard = document.querySelector('.card.scroll');
    const pinnedSections = gsap.utils.toArray('.pinned');

    pinnedSections.forEach((section, index, sections) => {
      let img = section.querySelector('.img');
      let nextSection = sections[index + 1] || lastCard;
      let endScalePoint = `top+=${
        nextSection.offsetTop - section.offsetTop
      } top`;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end:
            index === sections.length
              ? `+=${lastCard.offsetHeight / 2}`
              : footer.offsetTop - window.innerHeight,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: endScalePoint,
            scrub: 1,
          },
        }
      );
    });

    const heroH1 = document.querySelector('.hero h1');
    const scroller_rotate = document.querySelector('.scroller-rotate');
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '+=400vh',
      scrub: 1,
      onUpdate: (self) => {
        let opacityProgress = self.progress;
        heroH1.style.opacity = 1 - opacityProgress;
        scroller_rotate.style.opacity = 1 - opacityProgress;
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>{METADATA.zendesk}</title>
      </Head>
      <Layout>
        <ProgressIndicator />
        <Header />
        <Cursor isDesktop={true} />
        <main className="h-full w-full md:cursor-none">
          <section className="hero pinned h-screen w-full">
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-8xl">
              {/* Zendesk <span className="text-primary">Theme</span> <br />
              Customization Expert */}
              <h1 className="h_title relative mb-2 w-full text-2xl font-medium leading-[90%] md:mb-2 lg:text-8xl">
                <span className="h_title_span -mb-1.5 -mt-6 block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Zendesk <span className="text-primary">Theme</span>
                  </span>
                </span>
                <span className="h_title_span -mb-1.5 -mt-6 block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Customization Expert
                  </span>
                </span>
              </h1>
              {/* <h1 className="h_title relative mb-0 w-full text-2xl font-bold leading-[90%] md:mb-0 lg:text-6xl">
              </h1> */}
            </div>
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
              <div className="scroller-rotate hidden h-[105px] w-[105px] animate-spin-slow opacity-0 md:block">
                <Image
                  src={scrollerImg}
                  className="mx-auto rounded-full"
                  width={105}
                  height={105}
                  alt="Scroll Down"
                />
              </div>
            </div>
          </section>
          <section className="card pinned h-screen w-full">
            <div className="img absolute bottom-0 left-1/2 h-auto w-[60%] -translate-x-1/2">
              <img
                src="/projects/wirtscha1.webp"
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
          </section>
          <section className="card pinned h-screen w-full">
            <div className="img absolute bottom-0 left-1/2 h-auto w-[60%] -translate-x-1/2">
              <img
                src="/projects/nftavatar1.webp"
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
          </section>
          <section className="card pinned h-screen w-full">
            <div className="img absolute bottom-0 left-1/2 h-auto w-[60%] -translate-x-1/2">
              <img
                src="/projects/mawada1.webp"
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
          </section>
          <section className="card pinned h-screen w-full">
            <div className="img absolute bottom-0 left-1/2 h-auto w-[60%] -translate-x-1/2">
              <img
                src="/projects/mats1.webp"
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
          </section>
          <section className="card scroll relative h-screen w-full">
            <div className="img absolute bottom-0 left-1/2 h-auto w-[60%] -translate-x-1/2">
              <img
                src="/projects/shown1.webp"
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
          </section>
          <section className="footer flex h-[50vh] w-full items-center justify-center">
            <Footer />
          </section>
        </main>
      </Layout>
    </>
  );
}
