import { Award, Badge, Calendar, Check, GraduationCap, GraduationCapIcon, Heart, Phone, Star, Users } from "lucide-react";
import styles from "./styles.module.css"

const ServiceSpecialist = ({ data }) => {
    return (
        <section className={`${styles.mainContainer} container-lg-fluid`}>
            <div className={styles.container}>
                <div className={styles.mainImageContainer}>
                    <div className={styles.containerImage}>
                        <img src="assets/eyecareSpecialist2.jpeg" alt="" />
                    </div>
                </div>
                <div className={styles.containerContent}>
                    <h2 className={styles.title}>{data?.title1} <span className={styles.span1}>{data?.title1bold}</span></h2>
                    <h6 className={styles.subtitle}>{data?.subtitle}</h6>
                    <p className={styles.description}>{data?.description}</p>
                </div>
            </div>
        </section>
    );
}

export default ServiceSpecialist;
