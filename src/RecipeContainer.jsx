import React from 'react';
import RecipeTile from './RecipeTile.jsx';

export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          imgUrl: 'http://www.technobuffalo.com/wp-content/uploads/2014/04/fast-food.jpg',
          title: 'Big Burger',
          subtitle: 'by Josh Davidson',
        },
        {
          imgUrl: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg',
          title: 'Veggies',
          subtitle: 'by Josh Davidson',
        },
        {
          imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/b5/9b/46/b59b4690bc01b28c870498bf04229a15.jpg',
          title: 'Meatballs',
          subtitle: 'by Josh Davidson',
        },
        {
          imgUrl: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
          title: 'Pizza',
          subtitle: 'by Josh Davidson',
        },
        {
          imgUrl: 'http://www.ikea.com/PIAimages/22395_PE107272_S5.JPG',
          title: 'Salmon',
          subtitle: 'by Josh Davidson',
        },
        {
          imgUrl: 'http://del.h-cdn.co/assets/16/42/1477083232-delish-cheesy-taco-bake-pin-3.jpg',
          title: 'Casserole',
          subtitle: 'by Josh Davidson',
        },
      ],
    };
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    };

    return (
      <div style={styles.root}>
        {this.state.recipes.map(recipe => (

          <RecipeTile
            key={recipe.imgUrl}
            title={recipe.title}
            subtitle={recipe.subtitle}
            imgUrl={recipe.imgUrl}
          />

        ))}
      </div>
    );
  }
}
