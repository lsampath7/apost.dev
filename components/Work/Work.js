import axios from 'axios'
import { useEffect, useState } from 'react'
import GitTab from './GitTab'

const Work = ({styles}) => {
  const [repos, setRepos] = useState()

  useEffect(async() => {
    let res = await axios.get('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=apostgit')
    setRepos(res.data)
  }, [])

  return (
    <div className={styles.tab}>
      <h2>My Work</h2>

      <div className={styles.gridTab}>
        {repos && repos.map((repo, index) => (
          <GitTab 
          repo={repo}
          styles={styles}
          key={index} />
        ))}
      </div>
    </div>
  )
}

export default Work
