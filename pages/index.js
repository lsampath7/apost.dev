import Timeline from '../components/Timeline/Timeline'
import Work from '../components/Work/Work'
import styles from '../styles/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <h1>Hello 👋, I'm Panagiotis Apostolidis</h1>

        <p className={styles.greyd}>I'm a web developer with passion about Web3 and Blockchain technology.</p>
      </div>
    
      <Work
        styles={styles} />

      <Timeline
        styles={styles} />
    </div>
  )
}
