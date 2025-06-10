import { useState } from "react";
import DarkModeButton from "../molecules/DarkModeButton";

const TooltipMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="menu-wrap">
      <button
        className={`toggle-btn${isActive ? " active" : ""}`}
        aria-label={`메뉴 ${isActive ? "닫기" : "열기"}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </button>
      {isActive && (
        <div className="menu-area">
          <ul>
            <li>
              <h2 className="menu-title">• 테마 설정</h2>
              <DarkModeButton />
            </li>
            <li>
              <h2 className="menu-title">• 공유하기</h2>
              <button>공유하기 버튼</button>
            </li>
          </ul>
          <button onClick={() => setIsActive(false)}></button>
        </div>
      )}
    </div>
  );
};

export default TooltipMenu;
