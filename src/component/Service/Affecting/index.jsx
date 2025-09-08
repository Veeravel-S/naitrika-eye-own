import Button from "@/common/Button";
import styles from "./styles.module.css";
import Title from "@/common/Title";

const Affecting = ({ affect }) => {
  return (
    <section className={styles.affectsec}>
      <div className="container-fluid">
        <Title
          title={affect?.title}
          istitle2={true}
          spantitle={affect?.titlebold}
          titlecolor={"#000"}
          spantitlecolor={"#2563eb"}
        />

        <div className="visiontype my-md-5 my-4 d-flex justify-content-xxl-between align-items-stretch justify-content-center h-auto  gap-4 flex-wrap">
          {affect?.affectingCards?.map((data, i) => (
            <div
              className={`text-center ${styles.affectcard} commonshadow my-3 mx-3 mx-md-0`}
              key={i}
            >
              <h4>{data?.title}</h4>
              <p>{data?.content}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.affectbtn} d-flex justify-content-center`}>
          <Button name={affect?.btn} iconcolor={"#fff"} bgcolor={"#16a34a"} />
        </div>
      </div>
    </section>
  );
};

export default Affecting;
