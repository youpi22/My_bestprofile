// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none rounded-full mix-blend-difference z-50",
  FOLLOWER: "fixed hidden h-10 w-10 select-none pointer-events-none rounded-full left-[-0.8rem] top-[-0.8rem] bg-[#ffffff07] border border-[#ffffff33] z-50",
};

export const Cursor = ({ isDesktop = true }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };

  const initCursorAnimation = () => {
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={` ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

