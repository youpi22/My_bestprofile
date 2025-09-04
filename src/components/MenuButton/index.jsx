import React from 'react';

export const MenuButton = ({ children, classes, link=null }) => {
  return (
    <div className={`link group relative overflow-hidden text-base md:text-2xl uppercase leading-6 ${classes}`}>
      {
        link != null
        ?
          <a href={link} target="_blank" className="relative" rel="nofollow">
            <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
              {children}
            </span>
            <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
              {children}
            </span>
          </a>
        :
        <>
          <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
            {children}
          </span>
          <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
            {children}
          </span>
        </>
      }
    </div>
  );
};
