// document.querySelector('.login-btn').addEventListener('click', function () {
//     document.querySelector('.login-form').classList.add('active');
//   });
  
//   document.querySelector('.close-btn').addEventListener('click', function () {
//     document.querySelector('.login-form').classList.remove('active');
//   });
// const tabs = document.querySelectorAll('.tab_btn');
// const all_content = document.querySelectorAll('.content');

// tabs.forEach((tab, index)=>{
//     tab.addEventListener('click', (e)=>{
//         tabs.forEach(tab=>{tab.classList.remove('active')});
//         tab.classList.add('active');

//         var line = document.querySelector('.line');
//     line.style.width = e.target.offsetWidth + "px";
//     line.style.left = e.target.offsetLeft + "px";

//     all_content.forEach(content=>{
//         content.classList.remove('active');
//     })
//     all_content[index].classList.add('active');
//     })




var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPannel");
tabButtons.forEach(function(node, index) {
  node.addEventListener('click', function() {
      tabPanels.forEach(function(node) {
          node.style.display = "none";
      });
      tabPanels[index].style.display = "block";
  });
});