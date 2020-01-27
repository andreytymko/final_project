// ------- sorting with different attributes-------
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

let main  = document.querySelector('.main-price-block');
// ------increase-----
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
// --------decrease ---------
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
// --------insert before -------
function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
