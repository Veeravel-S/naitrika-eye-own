import Image from "next/image";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <header className={styles.headsec}>
      <div className="container">
        <div className={`${styles.brandlogo} text-center`}>
          <Image src={"/assets/natrika_logo.png"} width={220} height={80} />
        </div>
      </div>
    </header>
  );
};

export default Header;
