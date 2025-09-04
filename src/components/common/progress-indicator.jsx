import { useEffect, useState } from "react";



export const ProgressIndicator = () => {
    const [progress, setProgress] = useState(0);
  
    const calculateProgress = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      setProgress(scrolled);
    };
  
    useEffect(() => {

    const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    matches && window.addEventListener("scroll", calculateProgress);
  
      return () => window.removeEventListener("scroll", calculateProgress);
    }, [progress]);
  
    return (
      <div className="progress w-full fixed top-0 z-50">
        <div
          className="progress-bar bg-white"
          style={{ transform: `scaleX(${progress})` }}
        ></div>
      </div>
    );
  };