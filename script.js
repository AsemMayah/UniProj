const infoList = [
  " الركض والسباحة من هواياتي المفضلة ",
  " الدكتور امين افضل دكاترة جامعة الزيتونة  ",
  " يشكر لجميع جهوده في تعليمنا امتع مادة في التخصص ",
  "الدكتور سيسألني اسئلة صعبة ",
  ];


const button = document.getElementById("infoButton");
const display = document.getElementById("infoDisplay");

let currentIndex = 0;

button.addEventListener("click", () => {
  
  display.textContent = infoList[currentIndex];
  
 
  currentIndex = (currentIndex + 1) % infoList.length;
});
