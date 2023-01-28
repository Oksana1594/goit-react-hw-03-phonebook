import styles from './title.module.css'
import PropTypes from "prop-types";

const Title = ({title}) => {
    return (
       <h2 className={styles.title}>{title}</h2> 
    )
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};