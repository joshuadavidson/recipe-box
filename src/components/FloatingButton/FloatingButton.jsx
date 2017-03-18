import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './FloatingButton.scss';

function FloatingButton(props) {
  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <div className={styles.content}>
          +
        </div>
      </div>
    </div>
  );
}

// <FontAwesome name={props.faIconName} />
FloatingButton.propTypes = {
  faIconName: React.PropTypes.string,
};

export default FloatingButton;
