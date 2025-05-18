import mongoose, { Mongoose } from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    blogImage: [{
        type: String,
        required: true
    }],
    readTime: {
        type: String
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);


blogSchema.pre('save', function (next) {
    if (!this.slug && this.tile) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }
    next();
})

export default Blog;