import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useDialog } from "../../hooks/useDialog";
export default function ContactPage() {
  const { openDialog } = useDialog();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleExternalLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // const handleSendEmail = () => {
  //   const subject = encodeURIComponent(title);
  //   const body = encodeURIComponent(text);
  //   window.location.href = `mailto:seungyeoni.dev@gmail.com?subject=${subject}&body=${body}`;
  // };

  const handleCall = () => {
    window.location.href = "tel:01025690323";
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        openDialog({
          type: 'alert',
          title: '알림',
          message: '메일이 성공적으로 전송되었습니다!',
          confirmText: '확인',
        });
      })
      .catch((error) => {
        openDialog({
          type: 'alert',
          title: '알림',
          message: `메일 전송에 실패했습니다. ${error}`,
          confirmText: '확인',
        });
      });
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
      <form className="mailto-box mt-2" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            className="mt-1"
            name="title"
            placeholder="문의드립니다"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            maxLength={50}
            required
          />
          <div className="length">
            {title.length} / 50
          </div>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            className="mt-1"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            maxLength={50}
            required
          />
          <div className="length">
            {email.length} / 50
          </div>
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            className="mt-1"
            name="message"
            placeholder="안녕하세요. 포트폴리오 관련하여 문의드립니다."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            maxLength={300}
            required
          />
          <div className="length">
            {text.length} / 300
          </div>
        </div>
        <button type="submit" className="btn">
          메일 문의하기
        </button>
      </form>
      </section>
    </div>
  );
}
