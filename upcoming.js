const MOVE_API_KEY  = "9dfa8622cefb056e029eb5c76c973a6f"
const API_URL  =  `https://api.themoviedb.org/3/movie/upcoming?`
const IMAGE_URL  = "https://image.tmdb.org/t/p/w500"


const displayDom = (data)=>{
    let date  =  new Date();
    let title  = "Watch The upComing Movies in This  "
    let upComingTitle  = document.querySelector(".titles").innerHTML =`${title}${date.getFullYear()}Year`
    let container   = document.querySelector(".movie-container");
    data.results.forEach((movie)=>{
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")
        movieDiv.innerHTML = `<div class="movie">
        
        <input type="hidden">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
    <h3 class="title">${movie.title} Name</h3>
    <div class="info">
      
        <div class="count">
            <div class="vote-avrage">
                <span>${movie.vote_average}</span>
            </div>
            <div class="release-date">
                <span>2022</span>
            </div>
        </div>
    </div>
    </div>`
    container.appendChild(movieDiv)
    })

}
const getMovies  = (resource)=>{
let req  =  new XMLHttpRequest();
req.addEventListener('readystatechange',()=>{
    if(req.readyState ===4 && req.status === 200){
        const data   = JSON.parse(req.responseText)
         displayDom(data)
        data.results.forEach((ele)=>{
            console.log(ele)
        })
        console.log(req.responseText)
    }else if(req.readyState ===4){
        console.log("There is something wrong")
    }
   
})
req.open("GET",resource);
req.send()


}
getMovies(`${API_URL}api_key=${MOVE_API_KEY}&page=1`)