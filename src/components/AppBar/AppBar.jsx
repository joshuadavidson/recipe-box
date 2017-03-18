import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppBar.scss';

function AppBar(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Link to={'/'}>
            {props.title}
          </Link>
        </div>
      </div>
      <div className={styles.spacer} />
    </div>
  );
}

AppBar.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default AppBar;
