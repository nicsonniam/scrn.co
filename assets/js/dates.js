function getDates() {
    var today = new Date();
    var leapYear = false;
    var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];
    var dd = String(today.getDate());
    var mm = today.getMonth();
    var yy = today.getFullYear;
    var month = months[mm];
    document.getElementById("1").innerHTML = dd;
    document.getElementById("1a").innerHTML = month;

    today.setDate(today.getDate() + 1);
    dd = String(today.getDate());
    mm = today.getMonth();
    yy = today.getFullYear;
    month = months[mm];
    document.getElementById("2").innerHTML = dd;
    document.getElementById("2a").innerHTML = month;

    today.setDate(today.getDate() + 1);
    dd = String(today.getDate());
    mm = today.getMonth();
    yy = today.getFullYear;
    month = months[mm];
    document.getElementById("3").innerHTML = dd;
    document.getElementById("3a").innerHTML = month;

    today.setDate(today.getDate() + 1);
    dd = String(today.getDate());
    mm = today.getMonth();
    yy = today.getFullYear;
    month = months[mm];
    document.getElementById("4").innerHTML = dd;
    document.getElementById("4a").innerHTML = month;

    today.setDate(today.getDate() + 1);
    dd = String(today.getDate());
    mm = today.getMonth();
    yy = today.getFullYear;
    month = months[mm];
    document.getElementById("5").innerHTML = dd;
    document.getElementById("5a").innerHTML = month;
}
window.onload = getDates;