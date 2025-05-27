import { useLocation, useNavigate } from "react-router-dom";
import css from "./Header.module.scss";
import { useStack } from "../../context/StackContext";

const Nav = () => {
  const { stacks, removeStack } = useStack();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const movePage = (path: string) => {
    if (stacks.includes("Nav")) {
      removeStack("Nav");
    }
    if (pathname !== path) {
      navigate(path);
    }
  };
  return (
    <div
      className={`${css["nav-wrap"]} ${
        stacks.includes("Nav") ? css.open : css.close
      }`}
      {...{ inert: stacks.includes("Nav") ? false : true }}
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
