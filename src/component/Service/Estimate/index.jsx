import Title from "@/common/Title";
import styles from "./styles.module.css";

const Estimate = () => {
  return (
    <section className={styles.estimatesec}>
      <div className="container">
        <Title
          title={"Clear,"}
          spantitle={"Written Estimate"}
          spantitlecolor={"#16a34a"}
        />

        <div className="d-flex justify-content-center mt-5">
          <div className={styles.estimatecard}>
            <h5>You get a written quote before surgery.</h5>

            <p>
              Usually includes: surgeon's fee, facility & consumables, IOL cost
              (varies by type), routine post-op visits, and standard medicines.
            </p>

            <h6>
              Financing/EMI options: <span>discuss with our desk.</span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
