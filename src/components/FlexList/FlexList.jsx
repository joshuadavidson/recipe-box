import React from 'react';
import ImgTile from '../ImgTile/ImgTile.jsx';

import styles from './FlexList.scss';

function FlexList(props) {
  return (
    <div className={styles.root}>
      {props.content.map(element => (
        <ImgTile
          key={element.imgUrl}
          title={element.title}
          subtitle={element.subtitle}
          imgUrl={element.imgUrl}
        />
      ))}
    </div>
  );
}

FlexList.propTypes = {
  content: React.PropTypes.array.isRequired,
};

export default FlexList;
