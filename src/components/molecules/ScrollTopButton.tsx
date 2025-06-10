import { useCallback, useEffect, useState } from "react";
import IconButton from "../atoms/IconButton";

const ScrollTopButton = () => {
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
      onClick={() => {
        scrollTop();
        if (timer === 0) setTimer(1000);
      }}
      disabled={timer > 0}
    />
  );
};

export default ScrollTopButton;
