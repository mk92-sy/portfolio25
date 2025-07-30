import css from "./Header.module.scss";
/* import LogoImg from "../../assets/icons/logo.svg"; */
import { useScroll } from "../../context/ScrollContext";

const Header = () => {
  const { scrollY } = useScroll();
  return (
    <>
      <div className={css.bg}>
        <div className={css["bg-inner"]}>
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
      <div className={css.header}>
        <div className={css.inner}>
          <h2
            className={`${css.title} ${scrollY > 200 ? css.show : ""}`}
            aria-label="웹 퍼블리셔, 이승연"
          >
            <div className={css.thumbnail}>
              {/*  <img src="" alt="이승연 로고" /> */}
              <div className={css.img} />
            </div>
            <span>Seungyeon Lee</span>
            <span className={css.status} />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
