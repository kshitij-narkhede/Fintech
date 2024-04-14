import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
        The essence of goodness radiates through the act of donating to charity. It embodies empathy, generosity, and a commitment to uplift those in need. Each contribution, no matter how small, echoes a profound message of solidarity and compassion, shaping a world where kindness knows no bounds.
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5316769837323!2d73.8842823!3d18.459561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf4662547c9%3A0xd96690b0786458f5!2sVIIT%20-%20Computer%20Science%20Department!5e0!3m2!1sen!2sin!4v1713074107485!5m2!1sen!2sin"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>SAHYOG</b>
                <br />
                VIIT Pune,
                <br />
                Kondhwa,
                <br /> Pune, Maharashtra 411048
                <br /> <br />
                For any queries, reach us out at email : 
                <br />
                +91-9359257953
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
