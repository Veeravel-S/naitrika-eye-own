import Title from "@/common/Title";
import styles from "./styles.module.css";
import React from "react";
import Slider from "react-slick";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/common/Button";

const Testimonal = ({ testimonalData }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className={styles.testimonalsec}>
      <div className="container">
        <Title
          title={"Real Patients."}
          spantitle={"Real Results."}
          subtitle={
            "Hear from our patients who have experienced life-changing vision care at Naitrika Eye Care."
          }
          spantitlecolor={"#04A7DE"}
        />

        <div className="d-flex justify-content-center my-md-5 my-3 ">
          <div className={styles.testimonalcard}>
            <Slider {...settings}>
              {testimonalData?.map((data, i) => (
                <div key={i} className={styles.reviewcard}>
                  <div className={styles.quote}>
                    <DynamicIcon name="quote" color="#93c5fd" size={48} />
                  </div>

                  <div className={`d-flex gap-1 my-4 ${styles.star}`}>
                    <DynamicIcon
                      name="star"
                      color="rgb(234 179 8)"
                      size={24}
                      fill="rgb(234 179 8)"
                    />
                    <DynamicIcon
                      name="star"
                      color="rgb(234 179 8)"
                      size={24}
                      fill="rgb(234 179 8)"
                    />
                    <DynamicIcon
                      name="star"
                      color="rgb(234 179 8)"
                      size={24}
                      fill="rgb(234 179 8)"
                    />
                    <DynamicIcon
                      name="star"
                      color="rgb(234 179 8)"
                      size={24}
                      fill="rgb(234 179 8)"
                    />
                    <DynamicIcon
                      name="star"
                      color="rgb(234 179 8)"
                      size={24}
                      fill="rgb(234 179 8)"
                    />
                  </div>

                  <div className={styles.info}>
                    <p>{`" ${data?.review} "`}</p>
                  </div>

                  <div className="d-flex justify-content-between pt-3">
                    <div className={styles.designation}>
                      <h4>{data?.name}</h4>
                      <h6>{data?.designation}</h6>
                    </div>
                    <div className={`d-flex gap-2 ${styles.arrow}`}>
                      <DynamicIcon
                        className="commonshadow"
                        name="chevron-left"
                        onClick={() => {
                          document.querySelector(".slick-prev").click();
                        }}
                      />
                      <DynamicIcon
                        className="commonshadow"
                        name="chevron-right"
                        onClick={() => {
                          document.querySelector(".slick-next").click();
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className={`text-center pt-md-3 pt-5 ${styles.stories}`}>
          <Button name={"Read More Success Stories"} bgcolor={"#CF5B00"} />
          <p className="mt-3">
            Join thousands of satisfied patients who trust Naitrika Eye Care
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
