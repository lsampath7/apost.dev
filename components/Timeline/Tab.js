const Tab = ({tab, styles}) => {
  return (
    <div className={styles.timelineTab}>
      <div className={styles.left}>
        <i className='far fa-check-circle'></i>
      </div>
      <div className={styles.right}>
        <p className={styles.title}>{tab.title}</p>
        <p className={styles.description}>{tab.description}</p>
      </div>
    </div>
  )
}

export default Tab
