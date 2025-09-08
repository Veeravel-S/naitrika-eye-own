import Title from "@/common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";


const SurgicalOptions = ({ data }) => {
    return (
        <section className={`${styles.mainContainer} container-fluid`}>
            <div className="container-lg py-5">
                <Title
                    title={
                        data?.title
                    }
                    spantitle={data?.titlebold}
                    titlecolor={"#000"}
                    spantitlecolor={"#04A7DE"}
                />

                <div className={`${styles.itemsContainer} my-md-5 my-4 d-flex justify-content-xxl-between justify-content-center h-auto gap-3`}>
                    {
                        data?.points?.map((item, index) => (
                            <div key={index} className={`${styles.itemContent} d-flex justify-content-start align-items-center gap-4`} style={{ backgroundColor: item.bgColor }}>
                                <div className="mt-1">
                                    <DynamicIcon name={item?.icon} size={35} color={item?.iconColor} />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <h4 className="fs-4">{item?.title}</h4>
                                    <p>{item?.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default SurgicalOptions;
