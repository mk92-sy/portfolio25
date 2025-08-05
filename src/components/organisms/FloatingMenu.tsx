import { useState } from "react";
import DarkModeButton from "../molecules/DarkModeButton";
import ShareButton from "../molecules/ShareButton";

const FloatingMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="floating-menu">
      <button
        className={`hamburger-button${isActive ? " active" : ""}`}
        aria-label={`메뉴 ${isActive ? "닫기" : "열기"}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="hamburger-line line1"></span>
        <span className="hamburger-line line2"></span>
        <span className="hamburger-line line3"></span>
      </button>
      {isActive && (
        <div className="menu-dropdown">
          <ul>
            <li>
              <h2 className="menu-title">• 테마 설정</h2>
              <DarkModeButton />
            </li>
            <li>
              <h2 className="menu-title">• 공유하기</h2>
              <ShareButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
