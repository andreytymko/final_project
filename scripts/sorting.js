
document.querySelector('#price-up').onclick = function(){
    mySort('data-price');
}
document.querySelector('#price-down').onclick = function(){
    mySortDesc('data-price');
}
document.querySelector('#popular').onclick = function(){
    mySortDesc('data-popul');
}
document.querySelector('#time').onclick = function(){
    mySortDesc('data-time');
}
// document.querySelector('#sort-desc').onclick = mySortDesc;

let main  = document.querySelector('.main-price-block');
function mySort(sortType){
     for(let i = 0;i<main.children.length;i++){
        for(let j = i;j<main.children.length;j++){
            if(+main.children[i].getAttribute(sortType) > +main.children[j].getAttribute(sortType)){
                replacedNode = main.replaceChild(main.children[j], main.children[i]);
                insertAfter(replacedNode, main.children[i]);
            }
        }
     }
}

function mySortDesc(sortType){
    for(let i = 0;i<main.children.length;i++){
       for(let j = i;j<main.children.length;j++){
           if(+main.children[i].getAttribute(sortType) < +main.children[j].getAttribute(sortType)){
               replacedNode = main.replaceChild(main.children[j], main.children[i]);
               insertAfter(replacedNode, main.children[i]);
           }
       }
    }
}
function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
// console.log(main.children);
// let from = document.querySelector('#from').value;
// let to = document.querySelector('#to').value;
// let arr = []
// document.querySelector('#send').onclick = function filter(){
//     for(let i=0;i<main.childresendn.length;i++){
//         if(+main.children[i].getAttribute('price')>from && +main.children[i].getAttribute('price')<to ){
//         arr.push(+main.children[i]);
//         console.log(main.children.getAttribute('price'));

//     }
// }
// }
