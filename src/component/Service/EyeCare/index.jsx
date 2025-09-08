import styles from "./styles.module.css";
import Badges from "@/Common/Badge";
import Button from "@/Common/Button";
import Title from "@/common/Title";
import { DynamicIcon } from "lucide-react/dynamic";

const EyeCare = ({ data }) => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className={`${styles.container} grid max-w-5xl mx-auto grid md:grid-col-2 gap-4 gap-md-2 gap-lg-5`}>
                <div className={styles.cardContainer}>
                    <h3 className="fs-3 fw-bold" style={{ color: "#22d3ee" }}
                    >{data?.title}</h3>
                    <div className={styles.cardDetails}>
                        {data?.location?.map((item, index) => (
                            <div className={styles.card}>
                                <div className="mt-0.5"><DynamicIcon name={item.icon} color="#22d3ee" /></div>
                                <div className={styles.cardContent}>
                                    <p>{item?.description1bold ? <span className="fw-bold">{item?.description1bold} </span> : ""} {item?.description1}</p>
                                   <p>{item?.description2bold ? <span className="fw-bold">{item?.description2bold} </span> : ""} {item?.description2}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className={styles.location}>
                    <div className={styles.buttonGroup}>
                        <Button
                            name={data?.button1}
                            bgcolor={"#2563eb"}
                            isbtn1={true}
                            icon={data?.button1icon}
                        />
                        <Button
                            name={data?.button2}
                            bgcolor="#16a34a"
                             icon={data?.button2icon}
                            isbtn1={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EyeCare;
