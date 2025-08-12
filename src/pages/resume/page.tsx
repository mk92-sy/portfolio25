import Badge from "../../components/atoms/Badge";

export default function ResumePage() {
  return (
    <div
      className="inner"
      role="tabpanel"
      id="tabpanel-resume"
      data-wrap="Resume"
    >
      <section className="card">
        <h3 className="sub-title">Career</h3>
        <div className="career-box stepper">
          <dl className="item">
            <dt>디앤디모바일</dt>
            <dd>
              <p>금융권 및 기타 웹퍼블리싱 파견 업무 (정규직)</p>
              <p>2023.07 ~ 현재</p>
            </dd>
          </dl>
          <dl className="item">
            <dt>더이앤엠 주식회사</dt>
            <dd>
              <p>서비스 관련 웹퍼블리싱 및 운영 업무 (정규직)</p>
              <p>2021.03 ~ 2023.04 (2년 2개월)</p>
            </dd>
          </dl>
          <dl className="item">
            <dt>애니시큐어 주식회사</dt>
            <dd>
              <p>서비스 관련 디자인, 웹퍼블리싱 및 운영 업무 (CS포함 / 정규직)</p>
              <p>2019.01 ~ 2021.02 (2년 2개월)</p>
            </dd>
          </dl>
        </div>
      </section>

      <section className="card">
        <h3 className="sub-title">Experience</h3>
        <div className="career-box">
          <dl className="item">
            <dt>
              이젠컴퓨터 아카데미
              <br />
              <span className="sub-txt">웹퍼블리셔 과정 수료</span>
            </dt>
            <dd>2018.07 ~ 2018.12</dd>
          </dl>
        </div>
      </section>

      <section className="card">
        <h3 className="sub-title">Other Experience</h3>
        <div className="career-box">
          <dl className="item">
            <dt>
              NPM UI라이브러리 배포
              <br />
              <span className="sub-txt">dotori-ui</span>
            </dt>
            <dd>2025.06</dd>
          </dl>
        </div>
      </section>

      <section className="card">
        <h3 className="sub-title">Skill</h3>
        <div className="skill-box">
          <h4>Programming Language</h4>
          <div className="badge-box">
            <Badge bgColor="#f37f31">Javascript</Badge>
            <Badge bgColor="#f37f31">TypeScript</Badge>
            <Badge bgColor="#f37f31">HTML5</Badge>
            <Badge bgColor="#f37f31">CSS3</Badge>
            <Badge bgColor="#f37f31">SCSS</Badge>
          </div>
          <h4>Libraries</h4>
          <div className="badge-box">
            <Badge bgColor="#1881e2">React</Badge>
            <Badge bgColor="#1881e2">jQuery</Badge>
            <Badge bgColor="#1881e2">styled-component</Badge>
            <Badge bgColor="#1881e2">MUI</Badge>
            <Badge bgColor="#1881e2">Bootstrap</Badge>
          </div>
          <h4>Framework</h4>
          <div className="badge-box">
            <Badge bgColor="#1881e2">Next.js</Badge>
            <Badge bgColor="#1881e2">tailwind css</Badge>
          </div>
          <h4>Package Manager</h4>
          <div className="badge-box">
            <Badge bgColor="#1881e2">npm</Badge>
            <Badge bgColor="#1881e2">yarn</Badge>
            <Badge bgColor="#1881e2">pnpm</Badge>
          </div>
          <h4>Development Tools</h4>
          <div className="badge-box">
            <Badge bgColor="#038f4e">git</Badge>
            <Badge bgColor="#038f4e">github</Badge>
            <Badge bgColor="#038f4e">gitlab</Badge>
          </div>
          <h4>Accessiblity Tools</h4>
          <div className="badge-box">
            <Badge>NVDA</Badge>
            <Badge>TalkBack</Badge>
            <Badge>VoiceOver</Badge>
          </div>
        </div>
      </section>

      <section className="card">
        <h3 className="sub-title">Education</h3>
        <div className="career-box">
          <dl className="item">
            <dt>
              서일대학교 <br />
              <span className="sub-txt">디지털디자인학부 전문학사</span>
            </dt>
            <dd>2011.03 ~ 2016.02 졸업</dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
