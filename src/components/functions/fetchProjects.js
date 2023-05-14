import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: '9btim7rv9ap4',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'dKyQ9OcADnRZ8MMPMICV-6A96mhNpbaDxB_1ZxJEpEQ',
})

export const useFetchProducts = () => {
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'malina' })
      const projects = response.items.map((item) => {
        const { title, description, featured, gitUrl, projectUrl, tag, image } =
          item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return {
          title,
          description,
          featured,
          gitUrl,
          projectUrl,
          tag,
          id,
          img,
        }
      })
      setProjects(projects)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { projects }
}

// client
//.getEntries({ content_type: 'malina' })
//.then((response) => console.log(response.items))
//.catch(console.error)
