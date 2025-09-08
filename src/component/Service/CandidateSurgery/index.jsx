import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const CandidateSurgery = ({ surgerypoints }) => {
  return (
    <section className={styles.candidatesurgerysec}>
      <div className="container">
        <Title
          title={"Am I a"}
          spantitle={"Candidate for Surgery?"}
          spantitlecolor={"#3b73ed"}
        />

        <div className="d-flex justify-content-center mt-4">
          <div className={styles.listcard}>
            {surgerypoints?.map((data, i) => (
              <div
                className={`${styles.pointcard} d-flex gap-3 align-items-center my-4 commonshadow`}
                key={i}
              >
                <DynamicIcon name="circle-check-big" color="#16a34a" />
                <p className="m-0">{data?.desc}</p>
              </div>
            ))}

            <div className={styles.pointnotes}>
              <p className="m-0">
                We'll confirm after a full exam and explain the best time to
                operate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSurgery;
