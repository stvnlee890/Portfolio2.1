import { gsap, Power4 } from "gsap";
const tl = gsap.timeline();

export function navListAnimation(element) {
  gsap.to(element, {
    y: 0,
    ease: Power4.easeInOut,
    duration: 1,
    stagger: 0.25,
  });
}

export function aboutAnimation(element, element1) {
  gsap.to(element, {
    opacity: 1,
    ease: Power4.easeInOut,
    duration: 2,
  });
  gsap.to(element1, {
    y: 0,
    ease: Power4.easeInOut,
    duration: 2,
  });
}

export function nameAnimation(element) {
  gsap.to(element, {
    opacity: 1,
    duration: 1.5,
    ease: Power4.easeInOut,
  });
}

export function lineAnimation(line) {
  gsap.to(line, {
    width: "100%",
    ease: Power4.easeIn,
    duration: 0.5,
  });
}

export function projectPageAnimation(title, container) {
  tl.to(title, {
    y: 0,
    ease: Power4.easeInOut,
    duration: 1,
  });
  tl.to(container, {
    opacity: 1,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
}

export function sideNav(element) {
  gsap.to(element.children, {
    opacity: 1,
    left: "1%",
    stagger: 0.05,
    ease: Power4.easeInOut,
    duration: 0.9,
  });
}

export function reverseSideNav(element) {
  gsap.to(element.children, {
    opacity: 0,
    left: "-40px",
    stagger: 0.05,
    ease: Power4.easeInOut,
    duration: 0.4,
  });
}

export function archivePage(element) {
    gsap.to(element, {
      opacity: 1,
      ease: Power4.easeInOut,
      stagger: 0.15,
      duration: 1,
    });

}
