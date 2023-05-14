import React from 'react'
import { useFetchProducts } from './functions/fetchProjects'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProjectsTagsTitle = () => {
  const { projects } = useFetchProducts()

  const projectsTags = projects.map((project) => {
    const { tag } = project
    return tag
  })
  const uniqueTags = Array.from(new Set(projectsTags.map(JSON.stringify))).map(
    JSON.parse
  )

  return (
    <TextContentWrapper>
      {uniqueTags.map((tag, index) => {
        return (
          <Link to={`/${tag}`} key={index} className='link'>
            <article className='category'>
              <h4>{tag}</h4>
              <span>{`${String(0) + String(index + 1)}`}</span>
            </article>
          </Link>
        )
      })}
    </TextContentWrapper>
  )
}

const TextContentWrapper = styled.div`
  .textContent {
    display: grid;
    gap: 0.2rem;

    /* border-bottom: 1px solid white; */
    article {
      overflow: hidden;
    }
  }
  .link {
    text-decoration: none;
  }
  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: var(--background-section-color); */
    padding: 1rem 1rem 1rem 1rem;
    color: var(--simple-text-color);
    border-bottom: 0.3px solid;
    border-bottom-color: var(--simple-text-color);
    h4 {
      font-size: 1.2rem;
      font-family: 'Mobilla', sans-serif;
      letter-spacing: 0.1rem;
      text-transform: capitalize;
    }

    span {
      font-size: 1.2rem;
      background-color: #ff8b5e;
      padding: 0.02rem 0.25rem;
      font-family: 'Mobilla', sans-serif;
      letter-spacing: 0.06rem;
      color: var(--simple-text-color);
    }
  }
`

export default ProjectsTagsTitle
