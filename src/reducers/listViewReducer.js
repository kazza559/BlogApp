import {GET_LISTVIEW, FAVORITE_ARTICLE, GET_FEED} from '../Constants';
const initial = {articles: [], articlesCount: 0}
export default (state = initial, action) => {
  switch (action.type) {
    case GET_LISTVIEW:
      return action.payload;
    case FAVORITE_ARTICLE :
      const newArr = state.articles.map(item =>{
        if (item.slug === action.article.slug) {
          item = action.article;
        }
        return item
      })
      return {...state, articles: newArr}
    case GET_FEED:
      return action.payload;
    default:
      return state;
  }
}