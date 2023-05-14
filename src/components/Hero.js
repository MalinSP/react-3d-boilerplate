import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayLogo } from '../play-button-svgrepo-com.svg'
import { Transition } from 'react-transition-group'
import gsap from 'gsap'
import HeroFunction from './functions/HeroFunction'
import TransitionContext from './TransitionContext'

const Hero = () => {
  const { completed } = useContext(TransitionContext)
  const heroRef = useRef()
  console.log(completed)

  useEffect(() => {
    if (completed) {
      let ctx = gsap.context(() => {
        HeroFunction()
      }, heroRef) // <- scopes all selector text inside the context to this component (optional, default is document)

      return () => ctx.revert() // cleanup!
    }
  }, [])
  return (
    <TitleWrapper ref={heroRef}>
      <div className='leftSide'>
        <div className='header'>
          <span className='title one'>Crafting</span>
          <span className='title two'>Digital</span>
          <span className='title three'>Experiences</span>
        </div>
        <div className='text'>
          <p>
            Hello, I'm Sergey, a creative developer with a passion for building
            engaging and interactive web experiences. With expertise in
            JavaScript, React, Node, Three.js, and React Three Fiber, I
            specialize in creating immersive applications that push the
            boundaries of what's possible on the web.
          </p>
        </div>

        <div className='btn-container'>
          <Link to='/projects'>
            <PlayLogo className='icon' fill='#fff3e2' />
            Explore my work
          </Link>
        </div>
      </div>
      <div className='rightSide'></div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: var(--background-section-color); */
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  /* transform: translate(0, -150%); */
  overflow: hidden;
  z-index: 2;
  will-change: transform;
  .header {
    margin-bottom: 1.4rem;
    span {
      overflow: hidden;
    }
  }

  .title {
    display: flex;
    justify-content: flex-end;
    font-family: 'Mobilla', sans-serif;
    margin-top: 0.2rem;
    padding-right: 1.5rem;
    font-size: 3.4rem;
    text-transform: uppercase;
    color: var(--main-title-color);
    /* line-height: 1; */
  }
  .text p {
    font-family: 'CaviarDreams', serif;
    letter-spacing: 0.02rem;
    line-height: 1.6;
    font-weight: 500;
    margin-right: 1.5rem;
    padding-left: 8rem;
    color: var(--simple-text-color);
  }
  .text p::first-letter {
    text-transform: uppercase;
    font-size: 1.8rem;
  }
  .btn-container {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
  }
  .btn-container a {
    border-radius: 1.25rem;
    padding: 1rem;
    border: none;
    background-color: var(--btn-color);
    color: var(--background-section-color);
    font-family: 'CaviarDreams', serif;
    font-weight: 500;
    letter-spacing: -0.02rem;
    font-size: 1.2rem;
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
      drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
    cursor: pointer;
    text-decoration: none;
  }
  .icon {
    width: 40px;
    height: 40px;
    margin-right: 0.7rem;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }
`

export default Hero
