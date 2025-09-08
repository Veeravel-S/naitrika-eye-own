import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/common/Button";
import BadgeIcon from "@/common/BadgeIcon";

const Checkup = ({ checkupData }) => {
  return (
    <section className={styles.checkupsec}>
      <div className="container-fluid">
        <Title
          title={"Complete Eye Care,"}
          spantitle={"Under One Roof"}
          subtitle={
            "From routine check-ups to complex surgeries, we provide comprehensive eye care services with the latest technology and expert care."
          }
          spantitlecolor={"#04A7DE"}
        />

        <div className="my-md-5 my-4">
          <div className="row">
            {checkupData?.map((data, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className={`${styles.checkupcard} commonshadow my-md-3 my-4 mx-4 mx-md-0`}
                >
                  <BadgeIcon icon={data.icons} />
                  <h4>{data?.name}</h4>
                  <p>{data?.content}</p>
                  {data?.points?.map((point, i) => (
                    <div className="d-flex align-items-center my-3 gap-2">
                      <div className={styles.greenpoint}></div>
                      <h6>{point}</h6>
                    </div>
                  ))}
                  <Button
                    name={"Learn More"}
                    bgcolor={"rgb(239 246 255)"}
                    href={data?.link}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center ${styles.stories}`}>
          <p className="mb-3">
            Need specialized care? Our expert team is here to help.
          </p>
          <Button name={"Schedule Your Consultation"} bgcolor={"#2563eb"} />
        </div>
      </div>
    </section>
  );
};

export default Checkup;
