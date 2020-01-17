let comments = [];
loadComments();

document.querySelector('.comment-add').onclick = function(){
    location.reload()

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
    let wrapper = document.createElement('div');

    // let out = '';
    comments.forEach(function(item){
        let timeBlock = document.createElement('div');
        let nameBlock = document.createElement('div');
        let bodyBlock = document.createElement('div');

        
          let info = document.createElement('div');

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
        info.classList.add('infoBlock')
        info.appendChild(nameBlock);
        info.appendChild(timeBlock);

        // wrapper.appendChild(nameBlock);
        wrapper.classList.add("containerForComments")
        // commentField.appendChild(bodyBlock)
        // commentField.appendChild(bodyBlock)
              wrapper.appendChild(info);
            wrapper.appendChild(bodyBlock);

    });      

    
        commentField.appendChild(wrapper)




    console.log(commentField);

    // commentField.innerHTML = out;
        // console.log(commentField);

}

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }