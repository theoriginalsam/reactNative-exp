import React from 'react'



const BlogContext = React.createContext()


export const BlogProvider = ({ children }) => {

    const blogPosts = [{
        title: "BLogpsot 1"
    }, {
        title: "BLogpsot 2"
    }
    ]





    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>

}

export default BlogContext

