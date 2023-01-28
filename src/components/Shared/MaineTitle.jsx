import styles from './maine-title.module.css'
import PropTypes from "prop-types";

const MainTitle = ({mainTitle}) => {
    return (
        <h1 className={styles.maine_title}>{mainTitle}</h1>
    )
}

export default MainTitle;

MainTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
};