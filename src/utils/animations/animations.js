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

export function aboutAnimation(element, element1) {
    gsap.to(element, {
        opacity: 1,
        ease: Power4.easeInOut,
        duration: 2
    })
    gsap.to(element1, {
        y: 0,
        ease: Power4.easeInOut,
        duration: 2
    })
}

export function nameAnimation(element) {
    gsap.to(element, {
        opacity: 1,
        duration: 1.5,
        ease: Power4.easeInOut
    })
}

export function lineAnimation(line) {
    gsap.to(line, {
        width: '100%',
        ease: Power4.easeIn,
        duration: .5
    })
}

export function projectPageAnimation(title, container) {
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