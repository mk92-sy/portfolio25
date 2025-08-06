import css from "./Header.module.scss";
/* import LogoImg from "../../assets/icons/logo.svg"; */
import { useScroll } from "../../context/ScrollContext";
import { useState, useEffect } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ["신기술이 나오면 써봐야함", "일할때는 J인 ISFP", "예비 접근성 연구원", "웹퍼블리셔 이승연"];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const timer = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        // 삭제 중
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      } else {
        // 타이핑 중
        if (currentText === currentFullText) {
          // 완성되면 잠시 대기 후 삭제 시작
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

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
            <span className={css.typewriter}>{currentText}</span>
            {/* <span className={css["online-status"]} /> */}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
