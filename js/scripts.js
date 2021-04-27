function init() {
  var vidDefer = document.getElementsByTagName("iframe");
  for (var i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute("data-src")) {
      vidDefer[i].setAttribute("src", vidDefer[i].getAttribute("data-src"));
    }
  }
}
window.onload = init;

function myFunction() {
  window.location.href = "https://sleepy-kalam-c110d5.netlify.app/thank-you.html";
}

    
    