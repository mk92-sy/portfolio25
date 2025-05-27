import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useStack } from "../../context/StackContext";
import { useRefContext } from "../../context/RefContext";

import css from "./Nav.module.scss";

const Nav = () => {
  const { pathname } = useLocation();
  const { returnRef, setReturnRef } = useRefContext();
  const { stacks, removeStack } = useStack();
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [focusActive, setFocusActive] = useState(false);

  const movePage = (path: string) => {
    if (stacks.includes("Nav")) {
      removeStack("Nav");
    }
    if (pathname !== path) {
      navigate(path);
    }
  };

  useEffect(() => {
    if (navRef.current) {
      if (stacks.includes("Nav")) {
        navRef.current.inert = false;
        setFocusActive(true);
      } else {
        navRef.current.inert = true;
        setFocusActive(false);
      }
    }
  }, [stacks]);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.inert = true;
    }
  }, []);

  useFocusTrap(focusActive, navRef);

  return (
    <div
      className={`${css["nav-wrap"]} ${
        stacks.includes("Nav") ? css.open : css.close
      }`}
      ref={navRef}
      role="dialog"
      aria-modal="true"
    >
      <aside className={css.sheet}>
        <nav className={css.nav}>
          <button
            className={`${css.link} ${css.home}`}
            onClick={() => {
              movePage("/");
            }}
          >
            HOME
          </button>
          <button
            className={css.link}
            onClick={() => {
              movePage("/about");
            }}
          >
            About Me
          </button>
          <button
            className={css.link}
            onClick={() => {
              movePage("/projects");
            }}
          >
            Projects
          </button>
          <button
            className={css.link}
            onClick={() => {
              movePage("/guide");
            }}
          >
            Guide
          </button>
          <button
            className={css.link}
            onClick={() => {
              movePage("/resources");
            }}
          >
            Resources
          </button>
          <button
            className={css.link}
            onClick={() => {
              movePage("/contact");
            }}
          >
            Contact
          </button>
          <button
            className={css.close}
            onClick={() => {
              removeStack("Nav");
              if (returnRef && returnRef.current) {
                setTimeout(() => {
                  returnRef.current?.focus();
                  setReturnRef(null);
                }, 0);
              }
            }}
          >
            닫기 임시
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default Nav;
