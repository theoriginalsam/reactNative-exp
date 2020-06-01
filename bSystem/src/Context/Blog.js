import React, { useState } from 'react'



const BlogContext = React.createContext()


export const BlogProvider = ({ children }) => {


    const [blogPosts, setBlogPost] = useState([])

    const addBlog = () => {
        setBlogPost([...blogPosts, { title: `Post no ${blogPosts.length + 1}` }])
    }





    return <BlogContext.Provider value={{ data: blogPosts, addBlog }}>
        {children}
    </BlogContext.Provider>

}

export default BlogContext

