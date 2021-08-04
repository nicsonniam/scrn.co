function setdatetoday(){
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2){
        month = '0' + month;
    }
    if (day.length < 2){
        day = '0' + day;
    }
    document.getElementById("ticketdate").value = [year, month, day].join('-');
    document.getElementById("moviedd").disabled=true;
    document.getElementById("showtimesdd").disabled=true;

    var http1 = new XMLHttpRequest();
    var cinemaEndPoint = 'https://nicsonniam.github.io/data/cinema-list.json';
    
    http1.onreadystatechange = function(){
        if(http1.readyState == 4 && http1.status == 200){
            var cinemas = JSON.parse(http1.response);
            var select = document.getElementById("cinemasdd");
            var el = document.createElement("option");
            el.style.color = "white";
            el.style.backgroundColor = "black";  
            el.textContent = '----SELECT----';
            el.value = '';
            select.appendChild(el);
            for(var i = 0; i < cinemas.length; i++) {
                var el = document.createElement("option");
                el.style.color = "white";
                el.style.backgroundColor = "black";  
                el.textContent = cinemas[i].name.toUpperCase();
                el.value = cinemas[i].name;
                select.appendChild(el);
            }
        }
    };

    http1.open("GET",cinemaEndPoint, true);
    http1.send();
}

function movies(){
    cleardd("showtimesdd");
    cleardd("moviedd");
    var http3 = new XMLHttpRequest();
    var showtimeEndPoint = 'https://nicsonniam.github.io/data/cinema-showtime.json';
    http3.onreadystatechange = function(){
        if(http3.readyState == 4 && http3.status == 200){
            var showtimes = JSON.parse(http3.response);
            //console.log(showtimes)
            var c = document.getElementById("cinemasdd");
            var cinema = c.value;
            document.getElementById("moviedd").disabled=false;
            for(let key of Object.keys(showtimes)){
                if(key==cinema){
                    var select = document.getElementById("moviedd");
                    for(let i=0; i<showtimes[key].length; i++){
                        var el = document.createElement("option");
                        el.style.color = "white";
                        el.style.backgroundColor = "black";  
                        el.textContent = showtimes[key][i].movie.toUpperCase();
                        el.value = showtimes[key][i].movie;
                        //console.log(el)
                        select.appendChild(el);
                    }
                }
            }
        }
    };
    http3.open("GET",showtimeEndPoint, true);
    http3.send();
}

function showtimes(){
    var http3 = new XMLHttpRequest();
    var showtimeEndPoint = 'https://nicsonniam.github.io/data/cinema-showtime.json';
    http3.onreadystatechange = function(){
        if(http3.readyState == 4 && http3.status == 200){
            var showtimes = JSON.parse(http3.response);
            //console.log(showtimes)
            var m = document.getElementById("moviedd");
            var movie = m.value;
            var c = document.getElementById("cinemasdd");
            var cinema = c.value;
            document.getElementById("showtimesdd").disabled=false;
            for(let key of Object.keys(showtimes)){
                if(key==cinema){
                    for(let i=0; i<showtimes[key].length; i++){
                        if(showtimes[key][i].movie == movie){
                            var select = document.getElementById("showtimesdd");
                            for(let k=0; k<showtimes[key][i].showtimes.length; k++){
                                var el = document.createElement("option");
                                el.style.color = "white";
                                el.style.backgroundColor = "black";  
                                el.textContent = showtimes[key][i].showtimes[k];
                                el.value = showtimes[key][i].showtimes[k];
                                select.appendChild(el);
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    http3.open("GET",showtimeEndPoint, true);
    http3.send();
}

function cleardd(ddId){
    var select = document.getElementById(ddId);
    if(select){
        var length = select.options.length;
        length = select.options.length;
        for (i = length-1; i >= 0; i--) {
            select.options[i] = null;
        }
        var el = document.createElement("option");
        el.style.color = "white";
        el.style.backgroundColor = "black";  
        el.textContent = '----SELECT----';
        el.value = '';
        select.appendChild(el);
    }
}

function checkdate(){
    document.getElementById("dateerror").innerHTML = "";
    let date = document.getElementById("ticketdate").value;
    let today = new Date();
    let d = new Date(date);
    let datediff = d - today;
    datediff = datediff/1000;
    datediff = datediff/60;
    datediff = datediff/60;
    datediff = Math.round(datediff/24);
    datediff++;
    if(datediff<0){
        document.getElementById("dateerror").innerHTML = "Date cannot be before today!";
        setdatetoday();
        return 1;
    }else if(datediff>14){
        document.getElementById("dateerror").innerHTML = "Booking in advance is unavailable 2 weeks after today";
        setdatetoday();
        return 2;
    }else{
        return 0;
    }
}

function validate(){
    var http1 = new XMLHttpRequest();
    var http2 = new XMLHttpRequest();
    var http3 = new XMLHttpRequest();

    var moviesEndPoint = 'https://nicsonniam.github.io/data/movie-list.json';
    var showtimeEndPoint = 'https://nicsonniam.github.io/data/cinema-showtime.json';
    var cinemaEndPoint = 'https://nicsonniam.github.io/data/cinema-list.json';
    http1.onreadystatechange = function(){
        if(http1.readyState == 4 && http1.status == 200){
            var movies = JSON.parse(http1.response);
            //console.log(movies);
        }
    };

    http2.onreadystatechange = function(){
        if(http2.readyState == 4 && http2.status == 200){
            var cinemas = JSON.parse(http2.response);
            //console.log(cinemas);
        }
    };

    http3.onreadystatechange = function(){
        if(http3.readyState == 4 && http3.status == 200){
            var showtimes = JSON.parse(http3.response);
            //console.log(showtimes);
        }
    };

    http1.open("GET",moviesEndPoint, true);
    http1.send();

    http2.open("GET",cinemaEndPoint, true);
    http2.send();

    http3.open("GET",showtimeEndPoint, true);
    http3.send();
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("movieerror").innerHTML = "";
    document.getElementById("dateerror").innerHTML = "";
    document.getElementById("seaterror").innerHTML = "";
    if(checkdate()==0){
        let date = document.getElementById("ticketdate").value;
        let email = document.forms["ticketForm"]["email"].value;
        let movie = document.getElementById("moviedd").value;
        let seat = '';
        let seats = document.getElementsByName('seatselection');
        for (var i = 0, length = seats.length; i < length; i++) {
            if (seats[i].checked) {
                seat = seats[i].value;
                break;
            }
        }
        if(email==''||movie==''||date==''||seat==''){
            if (email == "") {
                document.getElementById("emailerror").innerHTML = "Email is required";
            }
            if (movie == "") {
                document.getElementById("movieerror").innerHTML = "Please select a movie";
            }
            if (date == "") {
                document.getElementById("dateerror").innerHTML = "Please select a date";
            }
            if (seat == "") {
                document.getElementById("seaterror").innerHTML = "Please select a seat";
            }
        }else{
            let confirmMsg = "Your email is: "+email+" and you have selected: "+movie+" on "+date+". Your seat selection is: "+seat+". Confirm?"
            if(confirm(confirmMsg)){
                confirmMsg = "Thank you "+email+". You have selected: "+movie+" on "+date+" and your seat selection is: "+seat+".";
                alert(confirmMsg);
                window.location.href = '../scrn.co/index.html';
            }
        }
    }
}
