import css from "./Header.module.scss";
/* import LogoImg from "../../assets/icons/logo.svg"; */
import { useScroll } from "../../context/ScrollContext";

const Header = () => {
  const { scrollY } = useScroll();
  return (
    <>
      <div className={css["hero-section"]}>
        <div className={css["hero-content"]}>
          <h1 aria-label="안녕하세요! 웹 퍼블리셔 이승연입니다.">
            {/* 안녕하세요! <br />
            디자이너의 <strong>감각</strong>과
            <br />
            개발자의 <strong>논리</strong>를 잇는
            <br />
            <span className="typewriter"></span> */}
          </h1>
        </div>
      </div>
      <div className={css["navigation-bar"]}>
        <div className={css["navigation-content"]}>
          <h2
            className={`${css["brand-title"]} ${scrollY > 200 ? css.visible : ""}`}
            aria-label="웹 퍼블리셔, 이승연"
          >
            <div className={css["profile-image"]}>
              {/*  <img src="" alt="이승연 로고" /> */}
              <div className={css.avatar} />
            </div>
            <span>Seungyeon Lee</span>
            <span className={css["online-status"]} />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
