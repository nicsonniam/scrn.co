function openclosenav(){
    var w = document.getElementById("footer");
    var x = document.getElementById("mobileTopNav");
    var y = document.getElementById("mobileNavMenu");
    var z = document.getElementById("mainDiv");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.transition = "0.2s,linear"
        y.style.display = "none";
        y.style.transition = "0.2s,linear"
        z.style.display = "block";
        z.style.transition = "0.2s,linear"
        w.style.display = "block";
        w.style.transition = "0.2s,linear"
    } else {
        x.style.display = "none";
        x.style.transition = "0.2s,linear"
        y.style.display = "flex";
        y.style.transition = "0.2s,linear"
        z.style.display = "none";
        z.style.transition = "0.2s,linear"
        w.style.display = "none";
        w.style.transition = "0.2s,linear"
  }
}