import styles from './container.module.css'
import PropTypes from "prop-types";

const Container = ({children}) => {
    return (
        <div className={styles.container}>{ children}</div>
    )
}

export default Container;

Container.prototypes  = {
    children: PropTypes.element.isRequired
}