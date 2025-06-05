import { useState } from "react";
import ContactPage from "./contact/page";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";

export default function MainPage() {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <div className="card-wrap">
      <ul className="card-area" role="tablist">
        <li className={`item item1${activeItem === 0 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 0 ? "Resume 메뉴 활성화" : undefined}
            onClick={() => {
              setActiveItem(0);
            }}
          >
            Resume
          </button>
        </li>
        <li className={`item item2${activeItem === 1 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 1 ? "About 메뉴 활성화" : undefined}
            onClick={() => {
              setActiveItem(1);
            }}
          >
            About Me
          </button>
        </li>
        <li className={`item item3${activeItem === 2 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 2 ? "Works 메뉴 활성화" : undefined}
            onClick={() => {
              setActiveItem(2);
            }}
          >
            Works
          </button>
        </li>
        <li className={`item item4${activeItem === 3 ? " active" : ""}`}>
          <button
            role="tab"
            aria-label={activeItem === 3 ? "Contact 메뉴 활성화" : undefined}
            onClick={() => {
              setActiveItem(3);
            }}
          >
            Contact
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
