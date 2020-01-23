// show max length
let comment = document.querySelector('#comment');

comment.oninput = comment.onkeyp = comment.onchange = function() {
  let len = this.value.length;
  if (len > this.max) {
    this.value = this.value.substr(0, this.max);
    return false;
  }
  document.getElementById('counter').innerHTML = (+this.max - len) + '/200';
};
