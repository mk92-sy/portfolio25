/* import { Link } from "react-router-dom"; */
import css from "./Header.module.scss";
import { useRef } from "react";
/* import LogoImg from "../../assets/icons/logo.svg";
import { useStack } from "../../context/StackContext";
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
          <h1 className={css.title}>
            디자이너의 <strong>감각</strong>과
            <br />
            개발자의 <strong>논리</strong>를 잇는
            <br />
            웹퍼블리셔․
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
