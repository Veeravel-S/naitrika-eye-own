import { Calendar, MessageCircle, Phone, Star } from "lucide-react";
import styles from "./styles.module.css";
import Button from "@/Common/Button";

const ServiceBanner = ({ data }) => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={styles.container}>
                <div className={styles.bannerContent}>
                    <div className={`d-flex flex-wrap gap-3 {styles.bannerTagContainer}`}>
                        {data?.topChips?.map((item, index) => (
                            <div key={index} className={styles.bannerTag} style={{ backgroundColor: item?.bgcolor, color: item?.color }}>
                                <p>{item?.name}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className={styles.title}>
                        {data?.title}
                        <span className={styles.span1}>{data?.titleBold}</span>  —
                        <span className={styles.span2}> {data?.titleBold2}</span>
                    </h2>
                    <p className={styles.description}>
                        {data?.description1} <span>{data?.description1Bold}</span> {data?.description2}
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button
                            name={data?.button1}
                            isbtn1={true}
                            icon={"calendar"}
                            bgcolor=" #2563eb"
                        />
                        <button className={styles.button2}>
                            <Phone size={20} />
                            {data?.button2}
                        </button>
                         <button className={styles.button3}>
                           <MessageCircle size={20} />
                            {data?.button3}
                        </button>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.bannerDetails}>
                        {data?.trustBar?.map((item, index) => (
                            <div key={index} className={styles.detailItem}>
                                <h5>{item?.value}</h5>
                                <p>{item?.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className={styles.note}>{data?.note}</p>
                </div>
                <div className={`${styles.bannerImage} text-center`}>
                    <img src="assets/naitrikaBannerImage.jpeg" className="commonshadow" alt="" />
                    <div className={`${styles.round1} position-absolute`}></div>
                    <div className={`${styles.round2} position-absolute`}></div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;
