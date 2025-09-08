import Title from "@/common/Title";
import styles from "./styles.module.css";

const Faq = ({ faqlist }) => {
  return (
    <section className={styles.faqsec}>
      <div className="container">
        <Title
          title={"Frequently Asked"}
          spantitle={"Questions"}
          spantitlecolor={"#04A7DE"}
        />

        <div className="d-flex justify-content-center">
          <div
            className={`${styles.accordinmain} accordion my-4
         `}
            id="accordionExample"
          >
            {faqlist.map((data, i) => (
              <div
                className={`${styles.accordinitem} accordion-item border-0  `}
              >
                <h2
                  className={`accordion-header commonshadow ${styles.question}`}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded="true"
                    aria-controls="collapse"
                  >
                    {data?.question}
                  </button>
                </h2>

                <div
                  id={`collapse${i}`}
                  className={`${styles.accordionbody} accordion-collapse collapse commonshadow `}
                  data-bs-parent="#accordionExample"
                >
                  <div className={`${styles.accordingans} accordion-body`}>{data?.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
