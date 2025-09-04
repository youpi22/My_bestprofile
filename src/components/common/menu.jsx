import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { MENULINKS } from 'constant';
import { MenuButton } from '..';

export const Menu = ({ setmenuVisible }) => {
  // console.log(setmenuVisible)
  return (
    <section
      className="fixed top-0 left-0 flex items-center justify-center invisible w-full h-full min-h-screen overflow-hidden pointer-events-none menu"
      style={{ visibility: 'hidden' }}
    >
      <div className="flex items-center justify-center flex-none overflow-hidden">
        <div className="flex items-center justify-center flex-none max-h-screen overflow-y-auto text-center opacity-0">
          <ul
            className="block max-h-screen px-0 py-4 m-0 list-none"
            role="menu"
          >
            {MENULINKS.map((el) => (
              <li
                className="block p-0 m-4 text-2xl md:m-6"
                key={el.name}
                role="menuitem"
              >
                {/* <Link */}
                <Link
                  className="relative inline text-4xl font-bold duration-300 link hover:no-underline md:text-5xl"
                  href={`${el.ref}`}
                  onClick={() => setmenuVisible(false)}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
