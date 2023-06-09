import "./contact.css";
import { useRef, useLayoutEffect } from "react";
import { lineAnimation } from "../../utils/animations/animations";

export default function Contact() {
  const line = useRef(null);

  useLayoutEffect(() => {
    lineAnimation(line.current);
  }, []);
  return (
    <section className="section-container contact">
      <div ref={line} className="line"></div>
      <div className="section-headers">
        <h1>Contact</h1>
      </div>
      <div className="contact-content">
        <p className="contact-text">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a className="email" href="mailto:seungkilee700@gmail.com">EMAIL</a>
      </div>
    </section>
  );
}
