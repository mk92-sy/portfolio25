import { useState } from "react";

export default function MainPage() {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <div className="card-wrap">
      <ul className="card-area">
        <li className={`item item1${activeItem === 0 ? " active" : ""}`}>
          <button
            onClick={() => {
              setActiveItem(0);
            }}
          >
            Resume
          </button>
        </li>
        <li className={`item item2${activeItem === 1 ? " active" : ""}`}>
          <button
            onClick={() => {
              setActiveItem(1);
            }}
          >
            About Me
          </button>
        </li>
        <li className={`item item3${activeItem === 2 ? " active" : ""}`}>
          <button
            onClick={() => {
              setActiveItem(2);
            }}
          >
            Works
          </button>
        </li>
        <li className={`item item4${activeItem === 3 ? " active" : ""}`}>
          <button
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
          <>
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>2023.7 ~ </strong>
                <p>디앤디모바일 퍼블리셔 재직중</p>
              </li>
              <li>
                <strong>2021.5 ~ 2023.4</strong>
                <p>더이앤엠(주) 퍼블리셔 근무</p>
              </li>
              <li>
                <strong>2019.1 ~ 2021.2</strong>
                <p>애니시큐어 주식회사 퍼블리셔 근무</p>
              </li>
            </ul>
            <hr />
            <h2>Education</h2>
            <ul>
              <li>
                <strong>2018.7 ~ 2018.12</strong>
                <p>이젠컴퓨터학원 - 웹퍼블리셔 과정 수료(국비지원)</p>
              </li>
            </ul>
            <hr />
            <h2>Skills</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Storybook</li>
              <li>Figma</li>
            </ul>
          </>
        ) : activeItem === 1 ? (
          <>
            <h2>준비된 웹퍼블리셔</h2>
            <p>--</p>
          </>
        ) : activeItem === 2 ? (
          <></>
        ) : (
          <>
            <h2>저에 대해 더 궁금하신 점이 있으시면 메일을 보내주세요! 😊</h2>
          </>
        )}
      </div>
    </div>
  );
}
