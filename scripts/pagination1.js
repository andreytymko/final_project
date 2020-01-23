// ------------pagination for portfolio-----------

let portfolioArray =[
    { image: 'url(/images/portfolio1.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio2.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio3.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio4.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio5.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio6.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio7.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio8.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio9.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio10.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio1.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio2.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio3.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio4.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio5.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio6.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio7.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio8.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio9.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio10.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio1.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio2.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio3.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio4.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio5.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio6.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio7.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio8.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio9.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio10.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio10.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    { image: 'url(/images/portfolio10.jpg',header:'Bride and Groom', content:'The western part of the Pont de Bir-Hakeim seen at night. Buildings of the 16th arrondissement of Paris are visible in the background'},
    
]

let portfolio = document.querySelector('.imageGrid'); 
let pagination1 = document.querySelector('.pagination1');   
let notesOnPage = 6;
let countOfItems = Math.ceil(portfolioArray.length/notesOnPage);   
let items = [];
let li1 = document.createElement('li');
let first = document.createTextNode('<<');
li1.appendChild(first);
pagination1.appendChild(li1);
items.push(li1);
for(let i = 1; i<= countOfItems ;i++){
    let li = document.createElement('li');
    let number = document.createTextNode(i) ;
    li.appendChild(number);
    pagination1.appendChild(li);
    items.push(li);
}    
let li2 = document.createElement('li');
let last = document.createTextNode('>>');
li2.appendChild(last);
pagination1.appendChild(li2);
items.push(li2);    
showPage(items[1])
for(let item of items){
    item.addEventListener('click',function(){
        showPage(this);
    });        
}        
items[0].onclick = function(){
    showPage(items[1]);
}
items[notesOnPage+1].onclick = function(){
    showPage(items[notesOnPage])
}   
function showPage(unit){
    let active = document.querySelector('.pagination1 li.active');
    if(active){
        active.classList.remove('active');
    }  
    unit.classList.add('active');
    let pageNum = +unit.innerHTML;
    let start =  (pageNum - 1)* notesOnPage;
    let end = start + notesOnPage;
    let notes = portfolioArray.slice(start, end);    
    portfolio.innerHTML = '';    
    for(let note of notes){
        let images = portfolioArray.image;
        let div1 = document.createElement('div');
        div1.classList.add('tile');
        div1.style.background = note.image;
        div1.style.backgroundSize = 'cover';
        div1.style.backgroundRepeat = 'no-repeat';
        portfolio.appendChild(div1);
        let div2 = document.createElement('div');
        div2.classList.add('textWrapper');
        div1.appendChild(div2);
        let h2 = document.createElement('h2');
        let header = document.createTextNode(note.header);
        h2.appendChild(header);
        div2.appendChild(h2);
        let div3 = document.createElement('div');
        div3.classList.add('content');
        let content = document.createTextNode(note.content);
        div3.appendChild(content); 
        div2.appendChild(div3);      
    }
}