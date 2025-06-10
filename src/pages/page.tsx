import { useState, useRef, useCallback } from "react";
import ContactPage from "./contact/page";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";

export default function MainPage() {
  const tabListRef = useRef<HTMLUListElement | null>(null);
  const [activeItem, setActiveItem] = useState<number>(0);

  const TabClick = useCallback((menu: number) => {
    setActiveItem(menu);
    window.scrollTo({
      top: 300,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="card-wrap">
      <ul className="card-area" role="tablist" ref={tabListRef}>
        <li className={`item item1${activeItem === 0 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 0 ? "Resume 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(0);
            }}
          >
            <span className="tab-icon resume" />
            <span className="tab-title">Resume</span>
          </button>
        </li>
        <li className={`item item2${activeItem === 1 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 1 ? "About 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(1);
            }}
          >
            <span className="tab-icon about" />
            <span className="tab-title">About Me</span>
          </button>
        </li>
        <li className={`item item3${activeItem === 2 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 2 ? "Works 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(2);
            }}
          >
            <span className="tab-icon works" />
            <span className="tab-title">Works</span>
          </button>
        </li>
        <li className={`item item4${activeItem === 3 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 3 ? "Contact 메뉴 활성화" : undefined}
            onClick={() => {
              TabClick(3);
            }}
          >
            <span className="tab-icon contact" />
            <span className="tab-title">Contact</span>
          </button>
        </li>
      </ul>
      <div className="box">
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
