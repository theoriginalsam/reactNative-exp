import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [...state, {title: `Post no ${state.length + 1}`}];
    // case 'edit_blog'
    // case 'delete_blog'
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlog = () => {
    dispatch({type: 'add_blog'});
  };

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlog}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
