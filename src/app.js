const yargs = require("yargs")

const { Movie, movieArr } = require("./utils")

const app = (args) => {
    switch (process.argv[2]) {
        case "add":
            const movie = new Movie(args.title, args.actor)
            movie.add()
            console.log(movieArr);
            break;
        case "add multi":
            const movie1 = new Movie(args.title1, args.actor1)
            const movie2 = new Movie(args.title2, args.actor2)
            movie1.add()
            movie2.add()
            console.log(movieArr);
            
            break;
        case "remove":
            // movieArr.pop()
            movieArr.splice(args.index, 1)
            console.log(movieArr);
            break;
        case "replace":
            for ( let i = 0; i < movieArr.length; i++) {
                if (Object.values(movieArr[i]).includes(args.search)){
                    movieArr[i].actor = args.replace
                }
            }
            console.log(movieArr);
            break
            
        default:
            console.log("incorrect command");
            break;
    }
}
app(yargs.argv)

// console.log(yargs.argv);
// console.log(process.argv);
// console.log(process);
// console.log(yargs);

//test for gitkraken