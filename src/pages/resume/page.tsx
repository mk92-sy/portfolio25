export default function ResumePage() {
  return (
    <div
      className="inner p-md"
      role="tabpanel"
      id="tabpanel-resume"
      data-wrap="Resume"
    >
      <h2 className="mt-2">이승연 | Resume</h2>
      <span className="inline-block mt-1">Web Publisher</span>
      <p className="mt-3">
        <strong>안녕하세요.👋</strong>
        <br /> 현재 웹퍼블리셔로 재직중에 있습니다. 자바스크립트를 활용한 웹
        프론트엔드 개발에 관심이 많으며 HTML5, CSS3, JS, React, Next.js 를 주로
        사용합니다.
      </p>
      <h3>Career</h3>
      <div>
        <dl>
          <dt>디앤디모바일</dt>
          <dd>2023.07 ~ 현재</dd>
        </dl>
        <dl>
          <dt>더이앤엠 주식회사</dt>
          <dd>2021.03 ~ 2023.04</dd>
        </dl>
        <dl>
          <dt>애니시큐어 주식회사</dt>
          <dd>2019.01 ~ 2021.02</dd>
        </dl>
      </div>
      <h3>Experience</h3>
      <div className="inner-box">
        <dt>이젠컴퓨터 아카데미 - 웹퍼블리셔 과정 수료</dt>
        <dd>2018.07 ~ 2021.12</dd>
      </div>
      <h3>Other Experience</h3>
      <div className="inner-box">
        <dt>NPM UI라이브러리 배포</dt>
        <dd>2025.06</dd>
      </div>
      <h3>Skill</h3>
      <div className="inner-box">
        <h4>Programming Language</h4>
        <ul>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
        </ul>
        <h4>Libraries</h4>
        <ul>
          <li>React</li>
          <li>jQuery(Non-react Project)</li>
          <li>styled-component</li>
          <li>MUI</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Framework</h4>
        <ul>
          <li>Next.js</li>
          <li>tailwind css</li>
        </ul>
        <h4>Package Manager</h4>
        <ul>
          <li>npm</li>
          <li>yarn</li>
          <li>pnpm</li>
        </ul>
        <h4>Development Tools</h4>
        <ul>
          <li>git</li>
          <li>github</li>
          <li>gitlab</li>
        </ul>
        <h4>Accessiblity Tools</h4>
        <ul>
          <li>NVDA</li>
          <li>TalkBack</li>
          <li>VoiceOver</li>
        </ul>
      </div>
      <h3>Education</h3>
      <div>
        <dt>서일대학교 - </dt>
        <dd>
          <p>2011.03 ~ 2016.02 졸업</p>
          <p>디지털디자인학부 전문학사</p>
        </dd>
      </div>
    </div>
  );
}
