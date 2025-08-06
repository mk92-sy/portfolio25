import { useState } from "react";

export default function ContactPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleExternalLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(text);
    window.location.href = `mailto:seungyeoni.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCall = () => {
    window.location.href = "tel:01025690323";
  };

  return (
    <div
      className="inner"
      role="tabpanel"
      id="tabpanel-contact"
      data-wrap="Contact"
    >
      <section className="card">
      <h2 className="sub-title">Connect with Me</h2>
      <p className="mt-1">다양한 채널을 통해 알아보실 수 있습니다.</p>
      <div className="contact-btns mt-1">
        <button
          className="btn github"
          onClick={() => handleExternalLink("https://github.com/mk92-sy")}
        >
          GITHUB
        </button>
        <button
          className="btn blog"
          onClick={() => handleExternalLink("https://deeev.tistory.com/")}
        >
          BLOG
        </button>
        <button className="btn call" title="전화하기" onClick={handleCall}>
          CALL
        </button>
      </div>
      </section>
      <section className="card">
        <h2 className="sub-title">Send a Message</h2>
        <p className="mt-1">간단한 메시지를 남겨주시면 이메일로 바로 전달됩니다. 궁금한 점이나 협업 제안이 있다면 편하게 작성해 주세요.</p>
      <form className="mailto-box mt-2">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          placeholder="문의드립니다"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          placeholder="안녕하세요. 포트폴리오 관련하여 문의드립니다."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="btn" onClick={handleSendEmail}>
          메일 문의하기
        </button>
      </form>
      </section>
    </div>
  );
}
