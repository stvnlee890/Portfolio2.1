import { gsap, Power4 }from 'gsap'
const tl = gsap.timeline()

export function navListAnimation(element) {
    gsap.to(element, {
        y: 0, 
        ease: Power4.easeInOut,
        duration: 1,
        stagger: .2,
    })
}

export function lineAnimation(line, title, container) {
    tl.to(line, {
        width: '100%',
        ease: Power4.easeIn,
        duration: .5
    })
    tl.to(title, {
        y: 0,
        ease: Power4.easeInOut,
        duration: 1
    })
    tl.to(container, {
        opacity: 1,
        ease: Power4.easeInOut,
        duration: 1.5
    })
}