import css from "./Header.module.scss";
import { useScroll } from "../../context/ScrollContext";
import { useActiveContent } from "../../context/ActiveContents";
import { Link } from "react-router-dom";

const Header = () => {
  const { scrollY } = useScroll();
  const { activeContent, setActiveContent } = useActiveContent();


  return (
    <>
      {activeContent === 0 && (
        <div className={css["hero-section"]}>
          <div className={css["hero-content"]}>
            <h1 aria-label="안녕하세요! 웹 퍼블리셔 이승연입니다."></h1>
          </div>
        </div>
      )}
      <div className={css["navigation-bar"]}>
        <div className={css["navigation-content"]}>
          <h2
            className={`${css["brand-title"]} ${scrollY > 200 ? css.visible : ""}`}
            aria-label="웹 퍼블리셔, 이승연"
          >
            <Link to="/" onClick={()=>{setActiveContent(0)}}>
            SEUNGYEON LEE
            </Link>
            {/* <div className={css["profile-image"]}>
              <div className={css.avatar} />
            </div> */}
            {/* <span className={css.typewriter}>{currentText}</span> */}
            {/* <span className={css["online-status"]} /> */}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
