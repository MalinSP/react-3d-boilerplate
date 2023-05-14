import './App.css'
import 'reset-css'
import './index.css'
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { PerspectiveCamera } from '@react-three/drei'
import Projects from './components/Projects'
import Hero from './components/Hero'
import TorusGeometry from './components/TorusGeometry'
import Background from './components/functions/Background'
import { EffectComposer } from '@react-three/postprocessing'
import gsap from 'gsap'
import TransitionComponent from './components/TransitionComponent'
import { TransitionProvider } from './components/TransitionContext'
import { Routes, Route, useLocation } from 'react-router-dom'
import TargetProjectPage from './components/TargetProjectPage'

function App() {
  const [loading, setLoading] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const location = useLocation()
  console.log(location.pathname)

  const projectCompRef = useRef()
  const heroRef = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.left h2', { autoAlpha: 0, yPercent: 100 })
      gsap.set('.left h3', { autoAlpha: 0, xPercent: -100 })
      gsap.set('.img1', {
        xPercent: -100,
      })
      gsap.set('.img2', {
        yPercent: -100,
      })
      gsap.set('.img4, .img5, .img3', {
        xPercent: 100,
      })
      gsap.set('.textContent h4', {
        yPercent: 200,
      })

      tl.current = gsap
        .timeline()
        .to(heroRef.current, {
          transform: 'translateX(-100%)',
          duration: 1,
          autoAlpha: 0,
        })
        .to(
          projectCompRef.current,
          {
            transform: 'translateX(0)',
            duration: 1,
          },
          '<'
        )
        .to('.left h3', { xPercent: 0, autoAlpha: 1, duration: 1 })
        .to('.left h2', { yPercent: 0, autoAlpha: 1, duration: 1 })

        .to(
          '.img1',
          {
            xPercent: 0,
            duration: 1,
            scale: 1,
          },
          '-=0.5'
        )
        .to(
          '.img2',
          {
            yPercent: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .to(
          '.img3',
          {
            xPercent: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .to(
          '.img4',
          {
            xPercent: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .to(
          '.img5',
          {
            xPercent: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .to(
          '.textContent h4',
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.2,
          },
          '-=0.5'
        )
        .reverse()
      // or we can use refs
      //gsap.to(circle.current, { rotation: 360 })
    }, projectCompRef) // <- IMPORTANT! Scopes selector text

    return () => ctx.revert() // cleanup
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    tl.current.play()
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  const scaleTorus = Math.min(dimensions.width / dimensions.height, 1.28)

  return (
    <>
      <CanvasContainerWrapper>
        <Canvas>
          <PerspectiveCamera position={[0, 0, 10]} makeDefault />
          <TorusGeometry
            position={[dimensions.width * 0, 0, 0]}
            scale={scaleTorus}
            dimensions={dimensions}
          />
          <EffectComposer>
            <Background />
          </EffectComposer>
          {/* <OrbitControls /> */}
        </Canvas>
      </CanvasContainerWrapper>
      <TransitionProvider>
        <Routes>
          <Route
            index
            element={
              <TransitionComponent>
                <Hero />
              </TransitionComponent>
            }
          />
          <Route
            path='/projects'
            element={
              <TransitionComponent>
                <Projects tl={tl} />
              </TransitionComponent>
            }
          />
          <Route
            path={`/${location.pathname}`}
            element={
              <TransitionComponent>
                <TargetProjectPage />
              </TransitionComponent>
            }
          />
        </Routes>
      </TransitionProvider>
    </>
  )
}

const CanvasContainerWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -10;
  /* overflow: hidden; */
`

export default App
