import { Award, Badge, Calendar, Check, GraduationCap, GraduationCapIcon, Heart, Phone, Star, Users } from "lucide-react";
import styles from "./styles.module.css"
import Badges from "@/Common/Badge";
import BadgeIcon from "@/common/BadgeIcon";

const EyeCareSpecialist = ({ specialistData }) => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={styles.container}>
                <div className={styles.mainImageContainer}>
                    <div className={styles.containerImage}>
                        <img src="assets/eyecareSpecialist2.jpeg" alt="" />
                        <p className={styles.tag}>
                            AIIMS Trained
                        </p>
                    </div>
                </div>
                <div className={styles.containerContent}>
                    <h2 className={styles.title}>{specialistData?.title1} <span className={styles.span1}>{specialistData?.title1bold}</span>{specialistData?.title2}</h2>
                    <p className={styles.description}>{specialistData?.description}</p>
                    <div className={styles.bannerDetails}>
                        {specialistData?.featureTiles?.map((item) => (
                            <div className={styles.detailItem}>
                                <div className={styles.itemIcon}>
                                      <BadgeIcon icon={item?.icon} size={25} color="#2563eb" />
                                </div>
                                <div className={styles.itemContent}>
                                    <h5>{item?.title}</h5>
                                    <p>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr style={{ border: "1px solid #c7c3c3ff", width: "100%" }} />
                    <div className={styles.badgeContainer}>
                        {specialistData?.trustChips?.map((item,index)=>(
                            <Badges name={item?.name} bgcolor={item?.bgcolor} color={item?.color} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EyeCareSpecialist;
