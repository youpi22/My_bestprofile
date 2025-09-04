import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Cursor, Layout, ProgressIndicator } from '@/components';
import { Header, Footer } from '@/components';
import {
  HomeHero,
  TextAppear,
  HomeHorizontalSection,
  Projects,
  SkillsSection,
  HistorySection,
} from '@/Layout';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { METADATA } from 'constant';

export default function Home() {
  useEffect(() => {
    const sectionColor = document.querySelectorAll(
      '.color-section[data-bgcolor]'
    );
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevBgEndColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.endbgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        start: 'top 50%',
        onEnter: () =>
          gsap.to('body', {
            backgroundImage:
              'linear-gradient(90deg, ' +
              colorSection.dataset.bgcolor +
              ' 0%, ' +
              colorSection.dataset.endbgcolor +
              ' 100%)',
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to('body', {
            backgroundImage:
              'linear-gradient(90deg, ' +
              prevBgColor +
              ' 0%, ' +
              prevBgEndColor +
              ' 100%)',
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <ProgressIndicator />
        <Header />
        <Cursor isDesktop={true} />
        <main className="w-auto md:cursor-none">
          <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          {/* <div class="absolute inset-0 h-full w-full bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:90px_90px]"></div> */}
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endbgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <HomeHero />
          </section>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endbgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <TextAppear />
          </section>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endBgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <Projects />
          </section>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endBgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <HomeHorizontalSection />
          </section>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endBgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <SkillsSection />
          </section>

          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-endBgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <Footer />
          </section>
        </main>
      </Layout>
    </>
  );
}
