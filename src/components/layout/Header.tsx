import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { useEffect } from "react";
import { useStack } from "../../context/StackContext";

const Header = () => {
  const { stacks, addStack } = useStack();
  useEffect(() => {
    console.log("current stacks : ", stacks);
  }, [stacks]);
  return (
    <>
      <header className={css.header} inert={stacks.length > 0}>
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
