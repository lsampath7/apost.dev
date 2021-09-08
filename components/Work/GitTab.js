const GitTab = ({repo, styles}) => {
  const loadURL = (url) => window.open(url)

  return (
    <div className={styles.gitTab} onClick={() => loadURL(repo.link)}>
      <p className={styles.details}>{repo.language}</p>
      <p className={styles.name}>{repo.owner} <span>| {repo.repo}</span></p>
      <p className={styles.description}>{repo.description}</p>
    </div>
  )
}

export default GitTab
