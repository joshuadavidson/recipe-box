import React from 'react';
import Theme from './appTheme';
import Paper from 'material-ui/Paper';
import TouchRipple from 'material-ui/internal/TouchRipple';

export default class RecipeTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      root: {
        position: 'relative',
        width: '320px',
        height: '180px',
        backgroundImage: `url(${this.props.imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        margin: '5px',
      },
      touchOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
      },
      titleBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 68,
        background: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
      },
      titleWrap: {
        flexGrow: 1,
        marginLeft: Theme.spacing.desktopGutterLess,
        marginRight: 0,
        color: 'white',
        overflow: 'hidden',
      },
      title: {
        fontSize: '16px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      subtitle: {
        fontSize: '12px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    };

    return (
      <Paper style={styles.root} >
        <TouchRipple
          centerRipple={false}
          color={Theme.palette.shadowColor}
          opacity={0.4}
        >
          <div style={styles.touchOverlay}>
            <div style={styles.titleBar}>
              <div style={styles.titleWrap}>
                <div style={styles.title}>
                  {this.props.title}
                </div>
                { this.props.subtitle && (
                  <div style={styles.subtitle}>
                    {this.props.subtitle}
                  </div>
                )}
              </div>
            </div>
          </div>
        </TouchRipple>
      </Paper>
    );
  }
}

RecipeTile.propTypes = {
  imgUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};
