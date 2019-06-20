import { CREATE_EDIT_ARTICLE ,GET_ARTICLE } from "../Constants/index";

const article = {};
export default (state = article, action) => {
  switch (action.type) {
    case CREATE_EDIT_ARTICLE.CREATE:
      return action.newArticle;
    case CREATE_EDIT_ARTICLE.EDIT:
      return action.newArticle;
    case GET_ARTICLE:
      return action.article;
    default:
      return state;
  }
};
