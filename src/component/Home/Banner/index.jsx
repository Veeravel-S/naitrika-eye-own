import { Calendar, Phone, Star } from "lucide-react";
import styles from "./styles.module.css";
import Button from "@/Common/Button";

const Banner = ({ bannerData }) => {
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerTag}>
            <img src="assets/star.png" width="15px" height="15px" alt="" />
            <p>{bannerData?.topChips[0]} • {bannerData?.topChips[1]}</p>
          </div>
          <h2 className={styles.title}>
            <span className={styles.span2}>{bannerData?.titleBold}</span>
            <span className={styles.span3}>{bannerData?.titleBold2}</span> 
            <span className={styles.span4}>{bannerData?.titleBold3}</span>
          </h2>
          <p className={styles.description}>
            {bannerData?.description1} <span>{bannerData?.description1Bold}</span> {bannerData?.description2}
          </p>
          <div className={styles.buttonGroup}>
            <Button
              name={bannerData?.button1}
              isbtn1={true}
              icon={"calendar"}
              bgcolor=" #2563eb"
            />
            <button className={styles.button2}>
              <Phone size={20} />
              {bannerData?.button2}
            </button>
          </div>
          <hr className={styles.divider} />
          <div className={styles.bannerDetails}>
            {bannerData?.trustBar?.map((item, index) => (
              <div key={index} className={styles.detailItem}>
                <h5>{item?.value}</h5>
                <p>{item?.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.bannerImage} text-center`}>
          <img src="assets/naitrikaBannerImage.jpeg" className="commonshadow" alt="" />
          <div className={`${styles.doctorCard} text-start`}>
            <h3>{bannerData?.doctorCard?.name}</h3>
            <p>{bannerData?.doctorCard?.credentials}</p>
            <div className={styles.doctorSpecialties}>
              {bannerData?.doctorCard?.focusAreas?.map((item, index) => (
                <span key={index}>• {item}</span>
              ))}
            </div>
          </div>
          <div className={`${styles.round1} position-absolute`}></div>
          <div className={`${styles.round2} position-absolute`}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
