import {
  Award,
  Clock,
  Shield,
} from "lucide-react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import { DynamicIcon } from "lucide-react/dynamic";

const BestDeserve = ({ bestDeserveData }) => {
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {bestDeserveData?.title}
          <span> {bestDeserveData?.titlebold}</span>
        </h2>
        <p className={styles.description}>
          {bestDeserveData?.subtitle}
        </p>
        <div className={styles.cardsContainer}>
          {
            bestDeserveData?.highlights?.map((item, index) => (
              <div key={index} className={styles.card}>
                <DynamicIcon name={item?.icon} strokeWidth={2.2} size={32} color={item?.iconcolor} />
                <div className={styles.cardContent}>
                  <h6>{item?.title}</h6>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.schedule}>
          <Button
            name={bestDeserveData?.ctaButton?.text}
            bgcolor="#facc15"
            isbtn3={true}
            prefixicon={bestDeserveData?.ctaButton?.prefixicon}
            suffixicon={bestDeserveData?.ctaButton?.suffixicon}
            prefixcolor={bestDeserveData?.ctaButton?.prefixcolor}
            suffixcolor={bestDeserveData?.ctaButton?.suffixcolor}
          />
          <div className={styles.scheduleDetails}>
            {bestDeserveData?.additionalInfo?.map((item, index) => (
              <p key={index}>{item}</p>
            ))
            }
          </div>
        </div>
        <div className={styles.preferSpeak}>
          <h5>{bestDeserveData?.contactPrompt?.title}</h5>
          <div className={styles.buttonGroup}>
            <Button
              href={bestDeserveData?.contactPrompt?.button1href}
              name={bestDeserveData?.contactPrompt?.button1}
              isbtn1={true}
              icon={"phone"}
              bgcolor="#CF5B00"
            />
            <Button
              href={bestDeserveData?.contactPrompt?.button2href}
              name={bestDeserveData?.contactPrompt?.button2}
              icon={"arrow-right"}
              isbtn2={true}
              bgcolor="#7e22ce"
            />
          </div>
        </div>
        <div className={styles.timeOffer}>
          <h6>
            <span className={styles.circle}></span>{bestDeserveData?.limitedTime?.title}
          </h6>
          <p>
            {bestDeserveData?.limitedTime?.description1}
            <span> {bestDeserveData?.limitedTime?.description1bold}</span> {bestDeserveData?.limitedTime?.description2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestDeserve;
