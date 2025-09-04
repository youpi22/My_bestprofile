import React, { useEffect } from 'react';
import { MenuButton } from '@/components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

export const Footer = () => {
  useEffect(() => {
    const email = document.querySelector('.footer-email');
    // email.forEach(function(el) {
    let emailExpand = new gsap.timeline({ paused: true });
    const span = email.querySelector('span');

    // socialExpand.to(el, { width: 200, ease:"power4.inOut", })
    CustomEase.create('.215,.61,.355,1');

    // TweenLite.to(".logo", 2, { ease: "cubic", x:300 });
    emailExpand.fromTo(
      span,
      { scaleX: 1, ease: 'cubic' },
      { scaleX: 0.98, ease: 'cubic' }
    );

    email.addEventListener('mouseenter', function () {
      emailExpand.play();
    });

    email.addEventListener('mouseleave', function () {
      emailExpand.reverse();
    });

    // })

    return () => {};
  }, []);

  return (
    <div
      className="container px-2 pb-8 pt-24 md:px-4 md:pb-10 lg:px-0"
      id="contact"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
        Let's Chat
      </h2>
      {/* <h2 className="text-sm text-center uppercase opacity-80">Get in Touch</h2> */}
      <h2 className="text-center">
        Have something you need built? Want to talk through an idea? Get in
        touch. I'm friendly!
      </h2>
      <div className="my-8 text-center">
        <a
          href="mailto:hasnainrhraza@gmail.com"
          className="footer-email link mx-auto inline-block w-auto rounded-md border border-dashed border-[#ffffff40] bg-[#00000040] px-6 py-4 text-xl md:px-8 md:py-6 md:text-3xl"
        >
          <span className="block scale-100 font-jetbrains">
            hasnainrhraza@gmail.com
          </span>
        </a>
      </div>
      <div className="relative mt-12 flex flex-col items-center justify-center gap-5 md:mt-16 md:flex-row md:gap-0">
        <h2 className="left-0 order-2 text-center text-xs uppercase md:absolute">
          © 2025 Hasnain Raza
        </h2>
        <MenuButton
          classes="link text-xs md:text-xs  border rounded-full w-[80px] text-center"
          link="https://www.linkedin.com/in/hasnain-raza/"
        >
          Linkedin
        </MenuButton>
        <h2 className="right-0 text-center text-xs uppercase md:absolute">
          design & dev ✦ Hasnain Raza
        </h2>
      </div>
    </div>
  );
};
