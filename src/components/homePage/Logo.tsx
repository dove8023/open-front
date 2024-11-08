import styles from "./logo.module.css";

const Logo = (props: { isCollapsed: boolean }) => {
  const { isCollapsed } = props;

  return (
    <div className={styles.logoBox}>
      <img src="/react.svg" width={30} height={30} alt="logo" />
      {!isCollapsed && <h2 className={styles.logoText}>Show Case</h2>}
    </div>
  );
};

export default Logo;
