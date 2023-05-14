import { Html, useIntersect } from '@react-three/drei'
import React, { useRef, useLayoutEffect, useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import ProjectsTagsTitle from './ProjectsTagsTitle'
import { gsap } from 'gsap'

const Projects = forwardRef(({ tl }, ref) => {
  const handleClick = () => {
    tl.current.reverse()
  }

  return (
    <ProjectWrapper ref={ref}>
      <div className='content'>
        <div className='left'>
          <Link to='/'> &larr; Back</Link>
          <h2>Projects</h2>
          <h3>Table Of</h3>
        </div>
        <div className='right'>
          <div className='imagesWrapper'>
            <article className='leftImages'>
              <img src={img1} className='img1 img' alt='' />
              <span>01</span>
            </article>
            <article className='rightImages'>
              <div className='imgBlock'>
                <img src={img2} className='img2 img' alt='' />
                <img src={img3} className='img3 img' alt='' />
              </div>
              <div className='imgBottom'>
                <img src={img4} className='img4 img' alt='' />
                <img src={img5} className='img5 img' alt='' />
              </div>
            </article>
          </div>
          <ProjectsTagsTitle />

          {/* <Link to='/THREE'>
            <article className='category'>
              <h4>THREE JS and React Three Fiber</h4>
              <span>06</span>
            </article>
          </Link> */}
        </div>
      </div>
    </ProjectWrapper>
    // </Html>
  )
})

const ProjectWrapper = styled.section`
  width: 100%;
  height: 100%;
  /* /* position: fixed; */
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  background: transparent;
  position: relative;
  /* transform: translateX(100%);  */
  /* z-index: 4; */
  overflow: scroll;
  /* color: white; */
  will-change: transform, left, top;
  /* border: 3px solid blue; */

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 auto;
    width: 95vw;
    gap: 1.2rem;
    /* border: 2px solid red; */
    /* height: 100%; */
    margin-top: 2rem;
    margin-bottom: 2rem;
    /* max-width: 1200px; */
    position: relative;
  }
  .left {
    border-right: 1px solid #ff8b5e;
    border-bottom: 1px solid #ff8b5e;
    /* border: 1px solid white; */
    position: relative;
    overflow: hidden;
    a {
      text-decoration: none;
      color: var(--background-section-color);
      font-family: 'CaviarDreams', serif;
      font-size: 0.8rem;
      letter-spacing: 0.05rem;
    }
    h2 {
      font-size: 6.4rem;
      transform: rotate(270deg);
      transform-origin: top left;
      position: fixed;
      bottom: 2rem;
      /* right: 0; */
      left: 13rem;
      font-family: 'CaviarDreams', serif;
      color: var(--simple-text-color);
      text-transform: uppercase;
      /* border: 1px solid black; */
    }
    h3 {
      position: fixed;
      bottom: 3rem;
      left: 2rem;
      color: var(--simple-text-color);
      font-family: 'CaviarDreams', serif;
      font-size: 3.4rem;
      text-transform: uppercase;
    }
  }
  .imagesWrapper {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 0.5rem;
    /* margin-top: 3rem; */
    margin-bottom: 2rem;
    .leftImages {
      overflow: hidden;
    }
  }
  .imgBlock {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 0.5rem;
    align-items: end;
    position: relative;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    /* width: 150px; */
    height: auto;
    object-fit: cover;
    display: block;
  }
  .img1 {
    height: 100%;
    position: relative;

    /* transform: translateX(-100%); */
  }
  .img4,
  .img5 {
    height: 150px;
    width: 100%;
    /* transform: translateX(100%); */
  }

  .rightImages {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .imgBottom {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    overflow: hidden;
  }
`

export default Projects
