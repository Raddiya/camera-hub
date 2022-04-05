import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="grid">
                <div className="g-col-6"> <h5>1. What is Context API? </h5>
                    <p> -The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.It will hold the "store" and be the parent of all the components that might need that store.
                    </p></div>
                <div className="g-col-6"><h5>2.What is Semantic tag?</h5>
                    <p>-Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Using semantic tags gives you many more hooks for styling your content. Semantic tags make it clear to the browser what the meaning of a page and its content is.That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries. </p></div>
                <div className="g-col-6">
                    <h5> </h5>
                    <p></p>
                </div>
            </div>

        </div>
    );
};

export default Blog;