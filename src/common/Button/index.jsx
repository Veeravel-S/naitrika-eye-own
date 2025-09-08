import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  name,
  icon,
  isbtn1,
  isbtn2,
  isbtn3,
  bgcolor,
  iconcolor,
  prefixicon,
  prefixcolor,
  suffixicon,
  suffixcolor,
  fontWeight,
  href
}) => {
  const Wrapper = href ? "a" : "button";
  return (
    <Wrapper
      href={href || undefined}
      style={{ backgroundColor: bgcolor }}
      className={`${styles.commonbutton} d-inline-flex justify-content-center align-items-center gap-3 text-decoration-none`}
    >
      {isbtn1 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">
          <DynamicIcon name={icon} color={iconcolor} />
          <h6>{name}</h6>
        </div>
      ) : isbtn2 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">
          <h6>{name}</h6>
          <DynamicIcon name={icon} color={iconcolor} />
        </div>
      ) : isbtn3 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">
          <DynamicIcon name={prefixicon} color={prefixcolor} />
          <h6>{name}</h6>
          <DynamicIcon name={suffixicon} color={suffixcolor} />
        </div>
      ) : (
        <div className="text-center">
          <h6 style={{fontWeight: fontWeight}}>{name}</h6>
        </div>
      )}
    </Wrapper>
  );
};

export default Button;
