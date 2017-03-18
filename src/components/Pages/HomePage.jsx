import React from 'react';
import { Link } from 'react-router-dom';

import FlexList from '../FlexList/FlexList.jsx';
import FloatingButton from '../FloatingButton/FloatingButton.jsx';

function HomePage(props) {
  return (
    <div>
      <FlexList content={props.recipes} />
      <Link to={'/new'}>
        <FloatingButton faIconName="plus" />
      </Link>
    </div>
  );
}

HomePage.propTypes = {
  recipes: React.PropTypes.array.isRequired,
};

export default HomePage;
