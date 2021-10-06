import Tab from './Tab'

const Timeline = ({styles}) => {
  const tabs2021 = [
    {title: 'Joined Belair Finance', description: 'Joined the Belair Finance team as Chief Technology Officer.'}
  ]

  const tabs2001 = [
    {title: 'Born 🥳', description: 'January 17, 2001.'}
  ]

  return (
    <div className={styles.tab}>
      <h2>Timeline</h2>

      <p className={styles.year}>2021</p>
      {tabs2021.map((tab, index) => (
        <Tab 
          tab={tab}
          styles={styles}
          key={index} />
      ))}

      <br />
      <p className={styles.year}>2001</p>
      {tabs2001.map((tab, index) => (
        <Tab 
          tab={tab}
          styles={styles}
          key={index} />
      ))}

    </div>
  )
}

export default Timeline
