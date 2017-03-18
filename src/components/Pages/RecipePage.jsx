import React from 'react';

function RecipePage(props) {
  return (
    <div>
      <h1>{props.recipe}</h1>
    </div>
  );
}

RecipePage.propTypes = {
  recipe: React.PropTypes.string.isRequired,
};

export default RecipePage;
