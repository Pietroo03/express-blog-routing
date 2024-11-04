const posts = require('../data/db.js')

const index = (req, res) => {

    const responseData = {
        data: posts,
        counter: posts.length
    }

    res.status(200).json(responseData)
    
}

module.exports = index
