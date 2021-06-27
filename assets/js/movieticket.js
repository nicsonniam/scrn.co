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
    console.log(datediff);
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
                window.location.href = '/';
            }
        }
    }
}
