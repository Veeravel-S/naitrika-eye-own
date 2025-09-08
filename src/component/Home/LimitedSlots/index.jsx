import {
  Calendar,
  Clock,
  Clock1,
  Zap,
} from "lucide-react";
import styles from "./styles.module.css";
import Badges from "@/Common/Badge";
import Button from "@/Common/Button";
import BadgeIcon from "@/common/BadgeIcon";
import { DynamicIcon } from "lucide-react/dynamic";

const LimitedSlots = ({ limitedSlotsData }) => {
  console.log(limitedSlotsData);
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <div className={styles.slotAvailable}>
            <div className={styles.clockIcon}>
              <BadgeIcon icon={"clock"} size={24} />
            </div>
            <div className={styles.slotsContent}>
              <h2>
                <span>{limitedSlotsData?.titlebold}</span> {limitedSlotsData?.title}
              </h2>
              <p>
                {limitedSlotsData?.description}
              </p>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {limitedSlotsData?.features?.map((item,index) => (
              <div key={index} className={styles.card}>
                <DynamicIcon name={item?.icon} size={25} strokeWidth={2.25} />
                <div className={styles.cardContent}>
                  <h6>{item?.title}</h6>
                  <p>{item?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.onlySlots}>
            <div className={`${styles.slotsTitle} d-flex  align-items-center`}>
              <div className={styles.circle}></div>
              <h5 className="m-0">{limitedSlotsData?.availability?.text}</h5>
            </div>
            <p>
              {limitedSlotsData?.note}
            </p>
          </div>
          <div className={styles.secureSlot}>
            <Button
              icon={"arrow-right"}
              name={limitedSlotsData?.button?.text}
              isbtn2={true}
              bgcolor={"#ea580c"}
            ></Button>
            <p>
              <span>
                <Clock1
                  size={20}
                  strokeWidth={2.25}
                  style={{ paddingRight: "3px" }}
                />{" "}
                {limitedSlotsData?.fastBooking?.title}
              </span>{" "}
               {limitedSlotsData?.fastBooking?.description}
            </p>
            <p>
              Call <a href={limitedSlotsData?.fastBooking?.href}>{limitedSlotsData?.fastBooking?.contact} </a>for immediate assistance
            </p>
          </div>
        </div>
        <div className={styles.subCards}>
          {limitedSlotsData?.highlights?.map((item,index)=>(
             <div key={index} className={styles.subCard} style={{borderLeft:`4px solid ${item?.borderColor}`}}>
            <h5>{item?.title}</h5>
            <p>
             {item?.detail}
            </p>
          </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default LimitedSlots;