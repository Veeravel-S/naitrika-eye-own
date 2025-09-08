import Title from "@/common/Title";
import styles from "./styles.module.css";

const SurgeryDay = ({ surgery_list, do_list, dont_do_list }) => {
  return (
    <section className={styles.surgerydaysec}>
      <div className="container">
        <Title
          title={"Your Surgery Day — "}
          spantitle={"Step by Step"}
          spantitlecolor={"#04A7DE"}
        />

        <div className=" surgerycard mt-4">
          {surgery_list?.map((data, i) => (
            <div className="d-flex justify-content-center">
              <div
                className={`${styles.daycard} d-flex gap-3 align-items-start my-2`}
                key={i}
              >
                <div className={styles.daynums}>
                  <h5>{i + 1}</h5>
                </div>
                <div className={styles.daystep}>
                  <h5>{data?.title}</h5>
                  <p>{data?.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5 ">
          <div
            className={`${styles.sugerynotes} d-md-flex d-block justify-content-between`}
          >
            <div className={styles.docard}>
              <h4>Do :</h4>
              {do_list?.map((data) => (
                <div
                  className={`${styles.dolist} d-flex align-items-center gap-2 my-2 `}
                >
                  <h6 className="m-0"></h6>
                  <p className="m-0">{data?.desc}</p>
                </div>
              ))}
            </div>

            <div className={`${styles.dontcard} mt-5 mt-md-0`}>
              <h4>Don't Do :</h4>
              {dont_do_list?.map((data) => (
                <div
                  className={`${styles.dontlist} d-flex align-items-center gap-2 my-2 `}
                >
                  <h6 className="m-0"></h6>
                  <p className="m-0">{data?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className={styles.notes}>
            <p className="m-0">
              <span>Call us urgently if : </span> sudden pain, redness, or
              sudden drop in vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgeryDay;
