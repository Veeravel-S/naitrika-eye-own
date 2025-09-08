import {
  Award,
  Clock,
  Shield,
} from "lucide-react";
import styles from "./styles.module.css";
import Button from "@/Common/Button";

const BestDeserve = () => {
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Your Eyes Deserve the Best —{" "}
          <span>Don't Wait Until It's Too Late</span>
        </h2>
        <p className={styles.description}>
          {" "}
          Every day you delay treatment, your vision may continue to
          deteriorate. Take action today with Berhampur's most trusted eye care
          specialist.
        </p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Award strokeWidth={2.2} size={32} color="#facc15" />
            <div className={styles.cardContent}>
              <h6>AIIMS Trained</h6>
              <p>Top-tier expertise</p>
            </div>
          </div>
          <div className={styles.card}>
            <Shield strokeWidth={2.2} size={32} color=" #4ade80" />
            <div className={styles.cardContent}>
              <h6>1000+ Surgeries</h6>
              <p>Proven track record</p>
            </div>
          </div>
          <div className={styles.card}>
            <Clock size={25} strokeWidth={2.25} color="#c084fc" />
            <div className={styles.cardContent}>
              <h6>Same-Day Recovery</h6>
              <p>Advanced FLACS</p>
            </div>
          </div>
        </div>
        <div className={styles.schedule}>
          <Button
            name="Schedule Your Consultation Today"
            bgcolor="#facc15"
            isbtn3={true}
            prefixicon={"calendar"}
            suffixicon={"arrow-right"}
            prefixcolor={"black"}
            suffixcolor={"black"}
          />
          <div className={styles.scheduleDetails}>
            <p>✓ Free consultation available</p>
            <p>✓ Flexible scheduling</p>
            <p>✓ Insurance accepted</p>
          </div>
        </div>
        <div className={styles.preferSpeak}>
          <h5>Prefer to speak with us directly?</h5>
          <div className={styles.buttonGroup}>
            <Button
              href={"tel:+919810087878"}
              name="Call: 9810087878"
              isbtn1={true}
              icon={"phone"}
              bgcolor="#16a34a"
            />
            <Button
              href={"mailto:naitrikaeyecare@gmail.com"}
              name="Email Us"
              icon={"arrow-right"}
              isbtn2={true}
              bgcolor="#7e22ce"
            />
          </div>
        </div>
        <div className={styles.timeOffer}>
          <h6>
            {" "}
            <span className={styles.circle}></span> Limited Time Offer
          </h6>
          <p>
            Book your appointment this week and receive a{" "}
            <span>complimentary comprehensive eye screening</span> worth ₹1,500
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestDeserve;
