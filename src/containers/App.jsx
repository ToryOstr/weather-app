import backgroundVideo from "./backgroundVideo.mp4";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <video
        className={styles.backgroundVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        >
        <source 
        src={backgroundVideo} type="video/mp4"/>
      </video>
    </div>
  );
}
