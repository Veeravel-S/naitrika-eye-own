import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import BadgeIcon from "@/common/BadgeIcon";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";

const WHyPeopleChoose = ({ data }) => {
  return (
    <section className={`${styles.visionsec} container-lg py-5`}>
      <div className="container-lg">
        <Title
          title={data?.title}
          spantitle={data?.titlebold}
          titlecolor={"#000"}
          spantitlecolor={"#04A7DE"}
        />

        <div
          className={`${styles.itemsContainer} my-md-5 my-4 d-flex justify-content-center justify-content-center h-auto gap-4`}
        >
          {data?.points?.map((item) => (
            <div
              className={`${styles.itemContent} d-flex justify-content-start align-items-start gap-3`}
            >
              <div className="mt-1">
                <DynamicIcon
                  name="circle-check-big"
                  size={24}
                  color="#CF5B00"
                />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WHyPeopleChoose;
