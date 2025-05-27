import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { useRef, useEffect } from "react";
import { useStack } from "../../context/StackContext";

const Header = () => {
  const { stacks, addStack } = useStack();
  const headerRef = useRef<HTMLElement | null>(null);
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
          <h1>
            <Link to="/">SYL</Link>
          </h1>
          <button
            className={css.toggle}
            onClick={() => {
              addStack("Nav");
            }}
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
