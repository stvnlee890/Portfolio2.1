import { gsap, Power4 }from 'gsap'

export function navListAnimation(element) {
    gsap.to(element, {
        y: 0, 
        ease: Power4.easeInOut,
        duration: 1,
    })
}