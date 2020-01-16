let comments = [];
loadComments();

document.querySelector('.comment-add').onclick = function(){
    let commentName = document.querySelector('.comment-name');
    let commentBody = document.querySelector('.comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){   

    let commentField = document.querySelector('.commentsOutput');
    let wrapper = document.createElement('div')


    // let out = '';
    comments.forEach(function(item){

        let timeBlock = document.createElement('div')
        let nameBlock = document.createElement('div')
        let bodyBlock = document.createElement('div')
        let p1 = document.createTextNode(timeConverter(item.time));
        let p2 = document.createTextNode(item.name);
        let p3 = document.createTextNode(item.body);

        // out+=p1;
        // out+=p2;
        // out+=p3;

        // out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
        // out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        // out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
        let time = document.createTextNode(timeConverter(item.time))
        let name = document.createTextNode(item.name);
        let body = document.createTextNode(item.body);
        
        timeBlock.appendChild(time);
        timeBlock.classList.add('timeBlock');
        nameBlock.appendChild(name);
        nameBlock.classList.add('nameBlock');
        bodyBlock.appendChild(body);
        bodyBlock.classList.add('bodyBlock');

        wrapper.appendChild(timeBlock);
        wrapper.appendChild(nameBlock);
        wrapper.appendChild(bodyBlock);
        wrapper.classList.add("containerForComments")
        commentField.appendChild(wrapper)
        // commentField.appendChild(bodyBlock)
        // commentField.appendChild(bodyBlock)
        
    });


    console.log(commentField);

    // commentField.innerHTML = out;
        // console.log(commentField);

}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }