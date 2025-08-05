import { useState, useRef, useCallback } from "react";
import ContactPage from "./contact/page";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";
import { useLocation } from "react-router-dom";

export default function MainPage() {
  const location = useLocation();
  const tabListRef = useRef<HTMLUListElement | null>(null);
  const [activeItem, setActiveItem] = useState<number>(
    location.state?.activeMenu ?? 0
  );

  const TabClick = useCallback((menu: number) => {
    setActiveItem(menu);
    window.scrollTo({
      top: 300,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="main-container">
      <ul className="navigation-tabs" role="tablist" ref={tabListRef}>
        <li className={`tab-item tab-resume${activeItem === 0 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 0 ? "Resume 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(0);
            }}
          >
            <span className="tab-icon resume" />
            <span className="tab-label">Resume</span>
          </button>
        </li>
        <li className={`tab-item tab-about${activeItem === 1 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 1 ? "About 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(1);
            }}
          >
            <span className="tab-icon about" />
            <span className="tab-label">About Me</span>
          </button>
        </li>
        <li className={`tab-item tab-works${activeItem === 2 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 2 ? "Works 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(2);
            }}
          >
            <span className="tab-icon works" />
            <span className="tab-label">Works</span>
          </button>
        </li>
        <li className={`tab-item tab-contact${activeItem === 3 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 3 ? "Contact 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(3);
            }}
          >
            <span className="tab-icon contact" />
            <span className="tab-label">Contact</span>
          </button>
        </li>
      </ul>
      <div className="content-area">
        {activeItem === 0 ? (
          <ResumePage />
        ) : activeItem === 1 ? (
          <AboutPage />
        ) : activeItem === 2 ? (
          <WorksPage />
        ) : (
          <ContactPage />
        )}
      </div>
    </div>
  );
}
