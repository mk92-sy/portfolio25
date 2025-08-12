import { useCallback, useEffect, useState } from "react";
import IconButton from "../atoms/IconButton";
import { useScroll } from "../../context/ScrollContext";

const ScrollTopButton = () => {
  const { scrollY } = useScroll();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(0);
    }, timer);
  }, [timer]);
  const scrollTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);
  return (
    <IconButton
      icon="top"
      className={`${scrollY > 0 ? 'active' :''}`}
      title="페이지 상단으로 스크롤 이동"
      onClick={() => {
        scrollTop();
        if (timer === 0) setTimer(1000);
      }}
      disabled={timer > 0}
    />
  );
};

export default ScrollTopButton;
