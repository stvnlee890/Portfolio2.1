import { gsap, Power4 }from 'gsap'
const tl = gsap.timeline()
export function navListAnimation(element) {
    gsap.to(element, {
        y: 0, 
        ease: Power4.easeInOut,
        duration: 1,
    })
}

export function lineAnimation(element, element2) {
    tl.to(element, {
        width: '100%',
        ease: Power4.easeInOut,
        duration: .5
    })
    tl.to(element2, {
        y: 0,
        ease: Power4.easeInOut,
        duration: 1
    })
}