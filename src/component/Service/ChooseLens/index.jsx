import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const ChooseLens = ({ data }) => {
  return (
    <section className={`${styles.visionsec}`}>
      <div className="container-lg py-5 d-flex flex-column align-items-center">
        <Title
          title={data?.title}
          spantitle={data?.titlebold}
          titlecolor={"#000"}
          spantitlecolor={"#04A7DE"}
        />

        <div
          className={`${styles.itemsContainer} my-md-5 my-4 d-flex justify-content-center h-auto gap-4`}
        >
          {data?.lensOptions?.map((item, index) => (
            <div
              key={index}
              className={`${styles.itemContent} d-flex flex-column text-center justify-content-start align-items-center gap-4 flex-fill`}
            >
              <div className="mt-1">
                <DynamicIcon name={item?.icon} size={40} color={"#CF5B00"} />
              </div>
              <div className="d-flex flex-column gap-2">
                <h4 className="fs-4">{item?.title}</h4>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.noteContainer}>
          <p className={styles.note}>
            <span>Note: </span>
            {data?.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseLens;
