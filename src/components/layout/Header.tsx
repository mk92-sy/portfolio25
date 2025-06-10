import css from "./Header.module.scss";
import LogoImg from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <>
      <div className={css.bg}>
        <div className={css["bg-inner"]}>
          <h1 aria-label="안녕하세요! 웹 퍼블리셔 이승연입니다.">
            안녕하세요! <br />
            디자이너의 <strong>감각</strong>과
            <br />
            개발자의 <strong>논리</strong>를 잇는
            <br />
            <span className="typewriter"></span>
          </h1>
        </div>
      </div>
      <div className={css.header}>
        <div className={css.inner}>
          <h2 className={css.title} aria-label="웹 퍼블리셔, 이승연">
            <img className={css.logo} src={LogoImg} alt="로고" />
            <span>SEUNGYEON LEE</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
