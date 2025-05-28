import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { useRef } from "react";
/* import { useStack } from "../../context/StackContext";
import { useRefContext } from "../../context/RefContext"; */

const Header = () => {
  /*  const { setReturnRef } = useRefContext();
  const { stacks, addStack } = useStack();
  const toggleRef = useRef<HTMLButtonElement | null>(null); */
  const headerRef = useRef<HTMLElement | null>(null);
  /* useEffect(() => {
    if (headerRef.current) {
      if (stacks.length > 0) {
        headerRef.current.inert = true;
      } else {
        headerRef.current.inert = false;
      }
    }
  }, [stacks]); */
  return (
    <>
      <header className={css.header} ref={headerRef}>
        <div className={css.inner}>
          <h1 className={css.logo}>
            <Link to="/">
              <span className={css.small}>SEUNGYEON</span>
              <br />
              LEE
            </Link>
          </h1>
          <p>Web Publisher</p>
          {/* <button
            className={css.toggle}
            onClick={() => {
              addStack("Nav");
              setReturnRef(toggleRef);
            }}
            ref={toggleRef}
          >
            임시버튼
             <HamburgerMenu size="32" color="#555555" />
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
