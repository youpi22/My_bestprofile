import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { MainLogo } from '../Icons';
import gsap from 'gsap';
import { MenuButton } from '../MenuButton';
import { Menu } from '@/components';

export const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  const logoRef = useRef(null);

  const onLogoEnter = () => {
    // const currColor = logoRef.current.getAttribute('data-color');
    // const currColor2 = logoRef.current.getAttribute('data-color2');

    const logoSvg = logoRef.current.firstChild.firstChild.children[0];
    const logoSvg2 = logoRef.current.firstChild.firstChild.children[1];

    // const nextColor = currColor === '#fdd600' ? '#f5f4f5' : '#fdd600';

    // logoRef.current.setAttribute('data-color', nextColor);
    // logoRef.current.setAttribute('data-color2', nextColor);
    // gsap.to(logoRef.current, {
    //   scale: 1.05,
    //   duration: 0.2,
    //   ease: 'power1.out',
    // });
    gsap.to(logoSvg, {
      fill: '#fdd600',
      x: 5,
      duration: 0.2,
      // ease: 'power1.out',
    });
    gsap.to(logoSvg2, {
      fill: '#f5f4f5',
      x: -5,
      duration: 0.2,
      // ease: 'power1.out',
    });
  };
  const onLogoLeave = () => {
    const logoSvg = logoRef.current.firstChild.firstChild.children[0];
    const logoSvg2 = logoRef.current.firstChild.firstChild.children[1];
    // gsap.to(logoRef.current, { scale: 1, duration: 0.2, ease: 'power1.out' });

    gsap.to(logoSvg, {
      fill: '#f5f4f5',
      x: 0,
      duration: 0.2,
      // ease: 'power1.out',
    });
    gsap.to(logoSvg2, {
      fill: '#fdd600',
      x: 0,
      duration: 0.2,
      // ease: 'power1.out',
    });
  };

  return (
    <div className="header min-w-screen fixed left-0 top-0 z-10 w-screen transition-all duration-500 ease-out md:cursor-none">
      <div className="header_container relative flex items-center justify-center px-4 py-4 transition-all duration-500 ease-out will-change-transform lg:px-7 lg:py-8 ">
        <div className="relative w-full">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2"
            onClick={() => setmenuVisible(!menuVisible)}
          >
            <MenuButton>Menu</MenuButton>
          </div>
          <div
            className="header_logo link pointer-event-auto mx-auto max-w-fit leading-none transition-height [&>a>svg]:h-10 [&>a>svg]:duration-500 [&>a>svg]:ease-out md:[&>a>svg]:h-12 lg:[&>a>svg]:h-16"
            data-color="#a6e2e3"
            data-color2="#f5f4f5"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <Link href="/">
              <MainLogo />
            </Link>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <MenuButton link="mailto:hasnainrhraza@gmail.com">
              Contact
            </MenuButton>
          </div>
        </div>
      </div>
      <nav className={`outer-menu ${menuVisible ? 'menu-visible' : ''}`}>
        {/* {
            menuVisible &&
          } */}
        <button
          className={`hamburger fixed left-5 top-8 ${
            menuVisible ? 'visible' : 'invisible'
          }`}
          onClick={() => setmenuVisible(!menuVisible)}
        >
          <MenuButton>Close</MenuButton>
        </button>
        <Menu setmenuVisible={setmenuVisible} />
      </nav>
    </div>
  );
};
