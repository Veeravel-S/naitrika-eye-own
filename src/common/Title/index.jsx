import styles from "./styles.module.css";

const Title = ({
  title,
  subtitle,
  spantitle,
  titlecolor,
  spantitlecolor,
  subtitlecolor,
  istitle2
}) => {
  return (
    <div className={styles.commntitle}>
      {istitle2 ? (
       <div
        className={`text-center d-flex justify-content-center ${styles.title}`}
      >
        <h2 style={{ color: titlecolor }}>
          <span style={{ color: spantitlecolor }}>{spantitle}</span>
          {`${title ? title : ""} `}
        </h2>
      </div>
        ):<div
        className={`text-center d-flex justify-content-center ${styles.title}`}
      >
        <h2 style={{ color: titlecolor }}>
          {`${title ? title : ""} `}
          <span style={{ color: spantitlecolor }}>{spantitle}</span>
        </h2>
      </div>}

      {subtitle ? (
        <div
          className={` text-center d-flex justify-content-center  mt-3 ${styles.subtitle}`}
          style={{ color: subtitlecolor ? subtitlecolor : "rgb(75 85 99)" }}
        >
          <p>{subtitle}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;
