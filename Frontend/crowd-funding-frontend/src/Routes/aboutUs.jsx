import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          The essence of goodness radiates through the act of donating to charity. It embodies empathy, generosity, and a commitment to uplift those in need. Each contribution, no matter how small, echoes a profound message of solidarity and compassion, shaping a world where kindness knows no bounds.
          <br />
          <br />
          The essence of goodness radiates through the act of donating to charity. It embodies empathy, generosity, and a commitment to uplift those in need. Each contribution, no matter how small, echoes a profound message of solidarity and compassion, shaping a world where kindness knows no bounds.
          <br />
          <br />
          The essence of goodness radiates through the act of donating to charity. It embodies empathy, generosity, and a commitment to uplift those in need. Each contribution, no matter how small, echoes a profound message of solidarity and compassion, shaping a world where kindness knows no bounds.
          <br />
          The essence of goodness radiates through the act of donating to charity. It embodies empathy, generosity, and a commitment to uplift those in need. Each contribution, no matter how small, echoes a profound message of solidarity and compassion, shaping a world where kindness knows no bounds.
          
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
