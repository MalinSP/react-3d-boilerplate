import React, { useContext, useRef } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

import TransitionContext from './TransitionContext'

const TransitionComponent = ({ children }) => {
  const location = useLocation()
  const nodeRef = useRef()

  const { toggleCompleted } = useContext(TransitionContext)
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={nodeRef}
        onEnter={() => {
          const node = nodeRef.current
          toggleCompleted(false)
          gsap.set(node, {
            autoAlpha: 0,
            // scale: 0.8,
            xPercent: -100,
            duration: 2,
          })
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 2 })
            .to(node, { scale: 1, duration: 2 })
            .play()
        }}
        onExit={() => {
          const node = nodeRef.current
          gsap
            .timeline({ paused: true })
            // .to(node, { duration: 1 })
            .to(node, { xPercent: 100, duration: 1 })
            .play()
        }}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  )
}

export default TransitionComponent
