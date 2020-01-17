$("#menu-icon").on("click", function(){
	$("nav").slideToggle();
	$(this).toggleClass("active");
	});
	

// let menu = document.querySelector('#menu-icon').onclick = function(){
// let nav = document.querySelector('nav');

// if(nav.style.display = 'none'){
// 	nav.style.display = 'block';
// }

// if(nav.style.display = 'none'){
// 	nav.style.display = 'block';
// }

// this.classList.add('active');
// };



let input,search,pr,result,result_arr, locale_HTML, result_store;


function func() {
 	locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
setTimeout(func, 1000);  //ждем подгрузки Jsona и выполняем

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html
	
	if(input.length<3&&status==true)
	{
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	}
	
	if(input.length>=3)
	{
		function FindOnPageGo() {

			search = '/'+input+'/g';  //делаем из строки регуярное выражение
			pr = document.body.innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

			let warning = true;
			for(let i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				// error.textContent = 'найдено ни одного совпадения';
				alert('Не найдено ни одного совпадения')
			}

			for(let i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(let i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
			document.body.innerHTML = pr;  //заменяем html код
		}
	}
	function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { FindOnPageBack(); } //Снимаем выделение
}


// 
//share
// Share = {
// 	vkontakte: function(purl, ptitle, pimg, text) {
// 		url  = 'http://vkontakte.ru/share.php?';
// 		url += 'url='          + encodeURIComponent(purl);
// 		url += '&title='       + encodeURIComponent(ptitle);
// 		url += '&description=' + encodeURIComponent(text);
// 		url += '&image='       + encodeURIComponent(pimg);
// 		url += '&noparse=true';
// 		Share.popup(url);
// 	},
// 	odnoklassniki: function(purl, text) {
// 		url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
// 		url += '&st.comments=' + encodeURIComponent(text);
// 		url += '&st._surl='    + encodeURIComponent(purl);
// 		Share.popup(url);
// 	},
// 	facebook: function(purl, ptitle, pimg, text) {
// 		url  = 'http://www.facebook.com/sharer.php?s=100';
// 		url += '&p[title]='     + encodeURIComponent(ptitle);
// 		url += '&p[summary]='   + encodeURIComponent(text);
// 		url += '&p[url]='       + encodeURIComponent(purl);
// 		url += '&p[images][0]=' + encodeURIComponent(pimg);
// 		Share.popup(url);
// 	},
// 	twitter: function(purl, ptitle) {
// 		url  = 'http://twitter.com/share?';
// 		url += 'text='      + encodeURIComponent(ptitle);
// 		url += '&url='      + encodeURIComponent(purl);
// 		url += '&counturl=' + encodeURIComponent(purl);
// 		Share.popup(url);
// 	},
// 	mailru: function(purl, ptitle, pimg, text) {
// 		url  = 'http://connect.mail.ru/share?';
// 		url += 'url='          + encodeURIComponent(purl);
// 		url += '&title='       + encodeURIComponent(ptitle);
// 		url += '&description=' + encodeURIComponent(text);
// 		url += '&imageurl='    + encodeURIComponent(pimg);
// 		Share.popup(url)
// 	},

// 	popup: function(url) {
// 		window.open(url,'','toolbar=0,status=0,width=626,height=436');
// 	}
// };
