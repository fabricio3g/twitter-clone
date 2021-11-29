const {Schema, model, Types} = require('mongoose')


const tweetSchema = new Schema({
    ObjectId: Types.ObjectId,
    message: String,
    likes: [
        {id: Types.ObjectId}
    ]
})


const Tweet = model('Tweet', tweetSchema)


export default Tweet