import React from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RecipeContainer from './RecipeContainer.jsx';
import Theme from './appTheme';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      appBar: {
        position: 'fixed',
      },
      appBarSpacer: {
        height: Theme.spacing.desktopKeylineIncrement,
      },
      floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      },
    };

    return (
      <div>
        <AppBar style={styles.appBar} title="Recipe Box" showMenuIconButton={false} />
        <div style={styles.appBarSpacer} />
        <RecipeContainer />
        <FloatingActionButton style={styles.floatingActionButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
