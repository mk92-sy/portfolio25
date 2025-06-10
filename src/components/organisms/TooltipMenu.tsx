import { useState } from "react";
import DarkModeButton from "../molecules/DarkModeButton";

const TooltipMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="menu-wrap">
      <button
        className="toggle-btn"
        aria-label="메뉴 열기"
        onClick={() => setIsActive(!isActive)}
      ></button>
      {isActive && (
        <div className="menu-area">
          <ul>
            <li>
              <h2 className="menu-title">다크모드 설정</h2>
              <DarkModeButton />
            </li>
            <li>
              <h2 className="menu-title">공유하기</h2>
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
