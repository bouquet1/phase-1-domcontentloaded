// document.addEventListener("DOMContentLoaded", function () {
//     console.log("The DOM has loaded");
// });

//  const changeText = document.querySelector('p');
//  changeText.innerText = "This is really cool!";



document.addEventListener("DOMContentLoaded", function () {
    const changeText = document.getElementById('text');
    changeText.textContent = "This is really cool!";
});