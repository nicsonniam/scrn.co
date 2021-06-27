function validate(){
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("movieerror").innerHTML = "";
    document.getElementById("reviewerror").innerHTML = "";
    let name = document.getElementById("name").value;
    let movie = document.getElementById("moviedd").value;
    let review = document.getElementById("review").value;
    if(name==''||movie==''||review==''||wordcount()!=2){
        if (name == "") {
            document.getElementById("nameerror").innerHTML = "Author name is required";
        }
        if (movie == "") {
            document.getElementById("movieerror").innerHTML = "Please select a movie";
        }
        if (review == "") {
            document.getElementById("reviewerror").innerHTML = "Review is required";
        }
    }else{
        let confirmMsg = "Hello "+name+". "+"Proceed to submit your review for "+movie+"?";
        if(confirm(confirmMsg)){
            confirmMsg = "Thank you "+name+". Your review of "+movie+" has been submitted to us. We will process your review soon.";
            alert(confirmMsg);
            window.location.href = '../scrn.co/reviews.html';
        }
    }
}
function wordcount(){
    let review = document.getElementById("review").value;
    var count = review.split(' ').length;
    if(count==0){
        document.getElementById("wordcount").innerHTML = "Word limit: 1000";
        document.getElementById("reviewerror").innerHTML = "";
        return 0;
    }
    else if(count>1000){
        document.getElementById("wordcount").innerHTML = "Word count remaining: "+ (1000-count);
        document.getElementById("reviewerror").innerHTML = "Word count exceeded by "+(count-1000)+ " word(s)";
        return 1;
    }
    else{
        document.getElementById("wordcount").innerHTML = "Word count remaining: "+ (1000-count);
        document.getElementById("reviewerror").innerHTML = "";
        return 2;
    }
}
function confirmNavigate(){
    if(confirm("Are you sure? Changes will not be saved")){
        return true;
    }
    else{
        return false;
    }
}