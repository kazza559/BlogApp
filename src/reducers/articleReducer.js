import { CREATE_EDIT_ARTICLE } from "../Constants/index";

const intinitalArticle = {};
export default (state = intinitalArticle, action) => {
  switch (action.type) {
    case CREATE_EDIT_ARTICLE.CREATE:
      return action.newArticle;
    case CREATE_EDIT_ARTICLE.EDIT:
      return action.newArticle;
    default:
      return state;
  }
};
