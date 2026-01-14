// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

const words = ["AI Developer", "Python Engineer", "Django Full-Stack Developer", "ML Enthusiast"];
let i=0,j=0,del=false;

function type(){
  const el=document.getElementById("typing");
  if(!del && j<=words[i].length){
    el.textContent=words[i].substring(0,j++);
  }
  if(del && j>=0){
    el.textContent=words[i].substring(0,j--);
  }
  if(j===words[i].length) del=true;
  if(del && j===0){ del=false; i=(i+1)%words.length;}
  setTimeout(type,100);
}
type();