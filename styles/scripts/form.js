// max length

let comment = document.querySelector('#comment')
comment.oninput = comment.onkeyp = comment.onchange = function() {
  let len = this.value.length;
  if (len > this.max) {
    this.value = this.value.substr(0, this.max);
    return false;
  }
  document.getElementById('counter').innerHTML = (+this.max - len) + '/200';
};

// check number

let tel = document.querySelector('#tel').value;
let submit = document.querySelector('#submit');
submit.addEventListener('click', function(){
    showCheck(tel);
})
function checkNumber(AStr) {
    AStr = AStr.replace(/[\s\-\(\)]/g, '');
    return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
  }

  function showCheck(AStr) {
    console.log(checkNumber(AStr));
  }