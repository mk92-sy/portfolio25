import { useState } from "react";
import ContactPage from "./contact/page";
import ResumePage from "./resume/page";
import AboutPage from "./about/page";
import WorksPage from "./works/page";

import ResumeIcon from "../assets/icons/resume-16.svg";
import AboutMeIcon from "../assets/icons/eyes-fill.svg";
import WorksIcon from "../assets/icons/work-order-check-outline.svg";
import ContactIcon from "../assets/icons/send-plane-line.svg";

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
            <img src={ResumeIcon} alt="" className="tab-icon" />
            <span className="tab-title">Resume</span>
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
            <img src={AboutMeIcon} alt="" className="tab-icon" />
            <span className="tab-title">About Me</span>
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
            <img src={WorksIcon} alt="" className="tab-icon" />
            <span className="tab-title">Works</span>
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
            <img src={ContactIcon} alt="" className="tab-icon" />
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
