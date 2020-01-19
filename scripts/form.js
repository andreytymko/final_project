// max length
let comment = document.querySelector('#comment');

comment.oninput = comment.onkeyp = comment.onchange = function() {
  let len = this.value.length;
  if (len > this.max) {
    this.value = this.value.substr(0, this.max);
    return false;
  }
  document.getElementById('counter').innerHTML = (+this.max - len) + '/200';
};

// valid form
// let tel = document.querySelector('.tel');
// let name = document.querySelector('.name');
// let subject = document.querySelector('.subject');
// let submit = document.querySelector('#submit');
// let error = document.querySelector('.fName');
// function validate(){

//   if (name.value.length == 0 ){
//   //  let falseName =  document.createTextNode('обязалкько');
//     // document.querySelector(".fName").appendChild(falseName)
//     error.innerHTML = 'Данное поле обязательно для заполнения';
//     return false;
//   } 
//   if (tel.value.length == 0 ){
//     //  let falseName =  document.createTextNode('обязалкько');
//       // document.querySelector(".fName").appendChild(falseName)
//       error.innerHTML = 'Данное поле обязательно для заполнения';
//       return false;
//     }
    
//     if (subject.value.length == 0 ){
//       //  let falseName =  document.createTextNode('обязалкько');
//         // document.querySelector(".fName").appendChild(falseName)
//         error.innerHTML = 'Данное поле обязательно для заполнения';
//         return false;
//       }
//    if (comment.value.length == 0 ){
//   //  let falseName =  document.createTextNode('обязалкько');
//     // document.querySelector(".fName").appendChild(falseName)
//     error.innerHTML = 'Данное поле обязательно для заполнения';
//     return false;
//   }
      
// }