import mongoose from 'mongoose';

export default (callback) => {
    MONGODB_URI= 'mongodb://heroku_39pjh70k:lqsv0fvp5jai3t5q2mod01rf4f@ds143231.mlab.com:43231/heroku_39pjh70k';
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/keepics');
    callback();
};
