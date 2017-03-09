import React from 'react';

import styles from './AppBar.scss';

function AppBar(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.menu}>
          This Menu
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
