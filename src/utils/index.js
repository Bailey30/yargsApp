const movieArr = [{ title: 'lotr', actor: 'viggo' }, { title: 'lotr2', actor: 'legolas' }];

class Movie {
    constructor(title, actor) {
        this.title = title,
        this.actor = actor
    }
    add() {
        movieArr.push(this)
    }
    
}

module.exports = { Movie, movieArr }