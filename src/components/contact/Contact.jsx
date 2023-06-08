import { useRef, useLayoutEffect } from "react";
import { lineAnimation } from "../../utils/animations/animations";

export default function Contact() {
    const line = useRef(null)

    useLayoutEffect(() => {
        lineAnimation(line.current)
    }, [])
  return (
    <section className="section-container contact">
      <div ref={line} className="line"></div>
      <div className="section-headers">
        <h1>Contact</h1>
      </div>
    </section>
  );
}
