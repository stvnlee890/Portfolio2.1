import "./archives.css";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import { archived } from "../../utils/projects/archivedProjects";
import { archivePage } from "../../utils/animations/animations";


export default function Archives() {
  const archiveRef = useRef(null)

  useLayoutEffect(() => {
    const newArr = [...archiveRef.current.children]
    let ctx = gsap.context(() => {
      archivePage(newArr)
    })

    return () => {
      console.log("Revert animations")
      console.log("Animation reverted " + ctx.isReverted)
      ctx.revert()
      console.log("Animation reverted " + ctx.isReverted)
    }
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="section-headers archives">
      <h1>Archives</h1>
      <main className="archives-main">
        <div className="dots"></div>
        <div ref={archiveRef} className="archive-container">
          {archived.map((archive) => (
            <div key={archive.id} className="archive-wrapper">
              <div>
                <p className="archive-content archive-id">{archive.id}.</p>
              </div>
              <div>
                <p className="archive-content archive-name">{archive.name}</p>
              </div>
              <div>
                <p className="archive-content">{archive.year}</p>
              </div>
              <div>
                {archive.builtWith.map((built, idx) => (
                  <span key={idx} className="archive-content archive-built">
                    {built},
                  </span>
                ))}
              </div>
              <div>
                <a href={archive.link}>
                  <img
                    src="/src/assets/github-icon.png"
                    alt="Github logo"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
              <div>
                <a href={archive.liveSite}>
                  <img
                    src="/src/assets/external-link.png"
                    alt="external link logo"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
