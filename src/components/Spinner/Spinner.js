import { Oval } from "react-loader-spinner";

import styles from "../Layout/Layout.module.css";

const Spinner = () => (
  <Oval
    wrapperClass={styles.spinner}
    visible={true}
    height='40'
    width='40'
    color='#4fa94d'
    ariaLabel='oval-loading'
  />
);

export default Spinner;
