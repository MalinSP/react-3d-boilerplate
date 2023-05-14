import { gsap } from 'gsap'

const HeroFunction = () => {
  gsap.set('.one', { autoAlpha: 0, transform: 'translateY(100%)', scale: 0.7 })
  gsap.set('.three', {
    autoAlpha: 0,
    transform: 'translateY(-100%',
    scale: 0.7,
  })
  gsap.set('.two', { autoAlpha: 0 })
  gsap.to('.one', {
    y: 0,
    duration: 2,
    delay: 0.3,
    ease: 'back.out(1.7)',
    autoAlpha: 1,
    scale: 1,
  })
  gsap.to('.three', {
    y: 0,
    duration: 2,
    ease: 'back.out(1.7)',
    autoAlpha: 1,
    delay: 0.3,
    scale: 1,
  })
  gsap.to('.two', {
    autoAlpha: 1,
    delay: 0.7,
  })
}

export default HeroFunction
