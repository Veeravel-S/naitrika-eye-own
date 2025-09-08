import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const BestDeserveService = ({data}) => {
  return (
    <section className={`${styles.mainContainer} bg-gradient-to-r from-blue-900 to-cyan-800  container-fluid`}>
      <div className={styles.container}>
        <Title title={data?.title} spantitle={data?.titlebold} subtitle={data?.description} subtitlecolor={"#dbeafe"} />
        <div className={styles.schedule}>
          <Button
            name={data?.buttontxt}
            bgcolor="#facc15"
            isbtn1={true}
            icon={data?.icon}
            iconcolor={"black"}
            fontWeight = {"bold"}
          />
        </div>
      </div>
    </section>
  );
};

export default BestDeserveService;
