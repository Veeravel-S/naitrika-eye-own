import Title from "@/common/Title";
import styles from "./styles.module.css";

const ClearVision = ({ clearPathvisiondata }) => {
  return (
    <section className={styles.clearvisionsec}>
      <div className="container">
        <Title
          title={clearPathvisiondata?.title}
          spantitle={clearPathvisiondata?.titlebold}
          spantitlecolor={"#0891b2"}
        />

        <div className="my-md-5 my-4 d-flex  justify-content-center  gap-4 flex-wrap">
          {clearPathvisiondata?.clearPathVisionCard?.map((data, i) => (
            <div
              className={`${styles.clearvisioncard} commonshadow my-3 mx-4 mx-md-0`}
            >
              <h4>{data?.name}</h4>
              <p>{data?.content}</p>

              <div className={`${styles.markpoint} position-absolute `}>{`0${
                i + 1
              }`}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearVision;
