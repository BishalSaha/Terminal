import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.terminal}>
      <div className={styles.screen}>
        <div className={styles.content}>
          {/* <p>Welcome to Retro Terminal!</p>
          <p>
            User@Machine:~$ 
          </p> */}
          <p className={styles.caret}></p>
        </div>
        <div className={styles.noise}></div>
        <div className={styles.scanline}></div>
      </div>
    </div>
  );
};

export default Home;
