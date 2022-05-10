import React from 'react';

const Blogs = () => {
    return (
        <div className='p-4 w-50 mx-auto'>
            <h2>Q:Difference between javascript and nodejs?</h2>
            <p>Ans:JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use..</p>

            <h2>Q:When should you use nodejs and when should you use mongodb?</h2>
            <p>Ans:

                Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc....</p>

            <h2>Q:Differences between sql and nosql databases.?</h2>
            <p>Ans:
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            <h2>Q:What is the purpose of jwt and how does it work.?</h2>
            <p>Ans:
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed..</p>
        </div>
    );
};

export default Blogs;