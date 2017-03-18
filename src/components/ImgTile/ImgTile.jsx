import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ImgTile.scss';

function ImgTile(props) {
  return (
    <Link to={`/recipes/${props.title}`}>
      <div className={styles.root} style={{ backgroundImage: `url(${props.imgUrl})` }}>
        <div className={styles.titleBar}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              {props.title}
            </div>
            { props.subtitle && (
              <div className={styles.subtitle}>
                {props.subtitle}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

ImgTile.propTypes = {
  imgUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

export default ImgTile;
