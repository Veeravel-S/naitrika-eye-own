import {
  Award,
  Badge,
  Calendar,
  Check,
  Clock,
  Clock1,
  GraduationCap,
  GraduationCapIcon,
  Heart,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
  Zap,
} from "lucide-react";
import styles from "./styles.module.css";
import Badges from "@/Common/Badge";
import Button from "@/Common/Button";
import Title from "@/common/Title";

const VisitEyeCare = ({ eyeCareData }) => {
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <Title
        title={eyeCareData?.title}
        spantitle={eyeCareData?.titleBold}
        spantitlecolor={"#22d3ee"}
        subtitle={
          eyeCareData?.description
        }
        subtitlecolor={"#ffff"}
      />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MapPin size={24} />
            </div>
            <div className={styles.cardContent}>
              <h5>{eyeCareData?.address?.title}</h5>
              <p>{eyeCareData?.address?.floor}</p>
              <p>{eyeCareData?.address?.location}</p>
              <p>{eyeCareData?.address?.state}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Phone size={24}  />
            </div>
            <div className={styles.cardContent}>
              <h5>{eyeCareData?.contact?.title}</h5>
              <p>{eyeCareData?.contact?.primary}</p>
              <p>{eyeCareData?.contact?.secondary}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Mail size={24} />
            </div>
            <div className={styles.cardContent}>
              <h5>{eyeCareData?.email?.title}</h5>
              <p>{eyeCareData?.email?.description}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Clock size={24} />
            </div>
            <div className={styles.cardContent}>
              <h5>{eyeCareData?.hours?.title}</h5>
              <p>{eyeCareData?.hours?.mondayToSaturday}</p>
              <p>{eyeCareData?.hours?.sunday}</p>
              <p>{eyeCareData?.hours?.emergencyConsultations}</p>
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <iframe
            src={eyeCareData?.iframeSrc}
            allowfullscreen=""
            loading="lazy"
            className={styles.iframemap}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.buttonGroup}>
            <Button
              name={eyeCareData?.button1}
              bgcolor={"#2563eb"}
              isbtn1={true}
              icon={"navigation"}
            />
            <Button
              name={eyeCareData?.button2}
              bgcolor="#CF5B00"
              icon={"car"}
              isbtn1={true}
            />
          </div>
          <div className={styles.gettingFree}>
            {
              <>
                <h5>{eyeCareData?.gettingHere?.title}</h5>
                {eyeCareData?.gettingHere?.points?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
                }
              </>
            }
          </div>
        </div>
      </div>
      <div className={styles.emergency}>
        <h5>{eyeCareData?.emergency?.title}</h5>
        <p>{eyeCareData?.emergency?.description}</p>
        <Button name={eyeCareData?.emergency?.buttontxt} bgcolor="#fff" />
      </div>
    </section>
  );
};

export default VisitEyeCare;
