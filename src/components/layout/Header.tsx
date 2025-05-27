import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { useRef, useEffect } from "react";
import { useStack } from "../../context/StackContext";
import { useRefContext } from "../../context/RefContext";

const Header = () => {
  const { setReturnRef } = useRefContext();
  const { stacks, addStack } = useStack();
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (headerRef.current) {
      if (stacks.length > 0) {
        headerRef.current.inert = true;
      } else {
        headerRef.current.inert = false;
      }
    }
  }, [stacks]);
  return (
    <>
      <header className={css.header} ref={headerRef}>
        <div className={css.inner}>
          <h1 className={css.logo}>
            <Link to="/">SEUNGYEON.LEE</Link>
          </h1>
          <button
            className={css.toggle}
            onClick={() => {
              addStack("Nav");
              setReturnRef(toggleRef);
            }}
            ref={toggleRef}
          >
            임시버튼
            {/*  <HamburgerMenu size="32" color="#555555" /> */}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
