
// }/


let next = document.querySelector('.nxt');
let pre = document.querySelector(".pre");

next.addEventListener('click', function(){
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').appendChild(items[0]);
})
pre.addEventListener('click', function(){
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').prepend(items[items.length - 1]);
})



// const cards = document.querySelectorAll('.card');
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         window.location.href = 'bike-details.html';
//     });
// });

// document.querySelector('.username').addEventListener('click', function () {
//     document.querySelector('.login-form').classList.add('active');
//   });
  
//   document.querySelector('.close-btn').addEventListener('click', function () {
//     document.querySelector('.login-form').classList.remove('active');
//   });


// function showBikeDetails() {
//   const bikeCard = document.getElementById("bike-card");
//   const bikeName = document.getElementById("bike-name");
//   const bikeDescription = document.getElementById("bike-description");

//   bikeName.textContent = "Road Bike";
//   bikeDescription.textContent =
//     "Experience the thrill of the open road with our high-performance Road Bike. Designed for speed and efficiency, this bike is perfect for long rides and races.";

//   bikeCard.classList.add("expanded");
// }

function changeBottomArea(selected) {
    const navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach((item) => {
      item.classList.remove('active');
      if (item.id === selected) {
        item.classList.add('active');
      }
    });
  
    const bottomArea = document.getElementById('bottom-area');
    const content = document.createElement('div');
   
    
  bottomArea.style.backgroundImage = "url(./bullet\ 2.jpg)";

    content.className = `${selected} content`;
    content.innerHTML = `<p>Content for ${selected.charAt(0).toUpperCase() + selected.slice(1)}</p>`;
    bottomArea.innerHTML = ``;
    bottomArea.appendChild(content);
  }

let sections = document.querySelectorAll('section1');
let navlinks = document.querySelectorAll('header1 nav1 a');
window.onclick = () => {
  sections.forEach(sec => {
    let top =window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id= sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header1 nav1 a [href*='+ id +']').classList.add('active');
      }) ;
    };
  });
};

// const tabs = document.querySelectorAll('.tab_btn');
// const all_content = document.querySelectorAll(' .content2');

// tabs.forEach((tab, index)=>{
//     tab.addEventListener('click', (e)=>{
//         tabs.forEach(tab=>{tab.classList.remove('active')});
//         tab.classList.add('active');

//         var line = document.querySelector('.line1');
//     line.style.width = e.target.offsetWidth + "px";
//     line.style.left = e.target.offsetLeft + "px";

//     all_content.forEach(content2=>{
//         content2.classList.remove('active');
//     })
//     all_content[index].classList.add('active');
//     })


// })


// var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
// var tabPanels=document.querySelectorAll(".tabContainer  .tabPannel");

// function showPanel(panelIndex,colorCode) {
//     tabButtons.forEach(function(node){
//         node.style.backgroundColor="";
//         node.style.color="";
//     });
//     tabButtons[panelIndex].style.backgroundColor=colorCode;
//     tabButtons[panelIndex].style.color="white";
//     tabPanels.forEach(function(node){
//         node.style.display="none";
//     });
//     tabPanels[panelIndex].style.display="block";
//     tabPanels[panelIndex].style.backgroundColor=colorCode;
// }
// showPanel(0,'red');

var tabButtons1=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels1=document.querySelectorAll(".tabContainer  .tabPannel");
tabButtons1.forEach(function(node, index) {
  node.addEventListener('click', function() {
      tabPanels1.forEach(function(node) {
          node.style.display = "none";
      });
      tabPanels1[index].style.display = "block";
  });
});

var tabButtons2=document.querySelectorAll(".AppareltabContainer .buttonContainer button");
var tabPanels2=document.querySelectorAll(".AppareltabContainer  .AppareltabPannel");
tabButtons2.forEach(function(node, index) {
  node.addEventListener('click', function() {
      tabPanels2.forEach(function(node) {
          node.style.display = "none";
      });
      tabPanels2[index].style.display = "block";
  });
});

var tabButtons3=document.querySelectorAll(".AccessoriestabContainer .buttonContainer button");
var tabPanels3=document.querySelectorAll(".AccessoriestabContainer  .AccessoriestabPannel");
tabButtons3.forEach(function(node, index) {
  node.addEventListener('click', function() {
      tabPanels3.forEach(function(node) {
          node.style.display = "none";
      });
      tabPanels3[index].style.display = "block";
  });
});

var tabButtons4=document.querySelectorAll(".ustabContainer .buttonContainer button");
var tabPanels4=document.querySelectorAll(".ustabContainer  .ustabPannel");
tabButtons4.forEach(function(node, index) {
  node.addEventListener('click', function() {
      tabPanels4.forEach(function(node) {
          node.style.display = "none";
      });
      tabPanels4[index].style.display = "block";
  });
});


var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

