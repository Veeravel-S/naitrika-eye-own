import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import BadgeIcon from "@/common/BadgeIcon";

const Vision = ({ visionData }) => {
  return (
    <section className={styles.visionsec}>
      <div className="container-fluid">
        <Title
          title={visionData?.title}
          istitle2={true}
          spantitle={visionData?.titlebold}
          titlecolor={"#000"}
          spantitlecolor={"#2563eb"}
        />

        <div className="visiontype my-md-5 my-4 d-flex justify-content-xxl-between align-items-stretch justify-content-center h-auto  gap-4 flex-wrap">
          {visionData?.visionCards?.map((data, i) => (
            <div
              className={`text-center ${styles.visioncard} commonshadow my-3 mx-3 mx-md-0`}
              key={i}
            >
              {data?.icons ? (
                <div className="d-flex justify-content-center">
                  <BadgeIcon icon={data?.icons} />
                </div>
              ) : (
                ""
              )}

              <h4>{data?.title}</h4>
              <p>{data?.content}</p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <div className={`${styles.advancecare} commonshadow`}>
            <h4>
              {visionData?.advancecare?.title}
              <span>{visionData?.advancecare?.titlebold}</span>
            </h4>
            <Button
              name={visionData?.advancecare?.btn}
              icon={visionData?.advancecare?.btnicon}
              iconcolor={"#fff"}
              bgcolor={"#16a34a"}
              isbtn2={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
