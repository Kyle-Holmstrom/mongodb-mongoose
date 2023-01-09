import mongoose from 'mongoose'
import Blog from './model/Blog.js';
import User from './model/User.js';

mongoose.connect("mongodb+srv://atlas_kyle:ULpTaOX54XbUXUVG@cluster0.e9xvcks.mongodb.net/?retryWrites=true&w=majority")

const user = await User.create({
    name: 'Jesse Hall',
    email: 'jesse@email.com',
});

// Create a new blog post object
const article = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    author: user._id,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});

//console.log(article);

// const firstArticle = await Blog.findOne({});
// console.log("Full article from database: \n", firstArticle);

// Change the title of the article object using mongoose.
// article.title = "The Most Awesome Post!!";
// await article.save();
// console.log(article);

// const findArticle = await Blog.findById("63bb0c8f934ffd355c762087", "title slug content").exec();
// console.log(findArticle);

// delete data
const blogDeleteOne = await Blog.deleteOne({ name: "Jesse Hall"});
console.log(blogDeleteOne);

const userDeleteOne = await User.deleteOne({ name: 'Jesse Hall' });
console.log(userDeleteOne);

// const blogDeleteMany = await Blog.deleteMany({ name: 'Jesse Hall' });
// console.log(blogDeleteMany);

// const userDeleteMany = await User.deleteMany({ name: 'Jesse Hall' });
// console.log(userDeleteMany);

// Instead of using a standard find method
// const blogFind = await Blog.findOne({ author: "Jesse Hall" });

// Use the equivalent where() method
// const blogWhere = await Blog.where("author").equals("Jesse Hall");
// console.log(blogWhere)

// const blog = await Blog.where("author").equals("Jesse Hall").select("title author")
// console.log(blog)

// const articlePopulate = await Blog.findOne({ title: "Awesome Post!"}).populate("author");
// console.log(articlePopulate)

// Find an article, update the title, and then save it.
// const articleOne = await Blog.findById("63bb144db26266826eebafaf").exec();
// article.title = "Updated Title";
// await article.save();
// console.log(articleOne);


console.log(article);