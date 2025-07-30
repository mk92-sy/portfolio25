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
      <p className="mt-4">
        웹은 예쁜 디자인을 구현하는 것에 그쳐선 안됩니다.
        <br />
        모든 마크업에는 의도가 있어야 하며 그 의도는 누구에게나 닿아야 합니다.
      </p>
      <div className="contact-btns">
        <button
          className="btn github"
          onClick={() => handleExternalLink("https://github.com/mk92-sy")}
          title="깃헙 바로가기"
        />
        <button
          className="btn blog"
          onClick={() => handleExternalLink("https://deeev.tistory.com/")}
          title="블로그 바로가기"
        />
        <button className="btn call" title="전화하기" onClick={handleCall} />
      </div>
      <form className="mailto-box">
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
    </div>
  );
}
