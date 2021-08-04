window.onload = function(){
    var http1 = new XMLHttpRequest();

    var moviesEndPoint = 'https://nicsonniam.github.io/data/movie-list.json';

    http1.onreadystatechange = function(){
        if(http1.readyState == 4 && http1.status == 200){
            var movies = JSON.parse(http1.response);
            for(let i=0;i<movies.length;i++){
                var imgId = (i+1).toString();
                var pId = imgId.concat('a'); 
                document.getElementById(imgId).src=movies[i].posterlink;
                document.getElementById(pId).innerHTML =movies[i].name.toUpperCase();
            }
        }
    };

    http1.open("GET",moviesEndPoint, true);
    http1.send();
}