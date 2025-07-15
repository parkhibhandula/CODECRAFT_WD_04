const text = "Hi, I'm Parkhi – Full Stack Web Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();
