import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    // case 'edit_blog'
    case 'delete_blog':
      return state.filter(state => state.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlog = (title, body) => {
    dispatch({type: 'add_blog', payload: {title, body}});
  };
  const deleteBlog = id => {
    dispatch({type: 'delete_blog', payload: id});
  };

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlog, deleteBlog}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
