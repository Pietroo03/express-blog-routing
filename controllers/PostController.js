const posts = require('../data/db.js')



const index = (req, res) => {
    let html = ''
    posts.forEach(post => {
        const {title, slug, content, image, tags} = post
        const markup = `
        <ul>
            <li>
                <div>${title}</div>
                <img src="../img/${image}" alt"">
                <div>${content}</div>
                <div>${tags}</div>
            <li>
        <ul>
        `
        html += markup
        res.send(html)
    })
}

module.exports = {
    index
}

