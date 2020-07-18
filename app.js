// Chapter#1 Assigment
// task - 1
// alert('Hi! Dear how are you')

// task-2

// alert('Error ! Please Enter a valid password. ')

// task-3
// alert('Welcome to JS land.... \nhappy coding')

// console.log('hello , i can run my code through browser console')



// Assignment 2

// var username 

// var my_name='Qamar Ashfaq'

// var message='Enter your name please : '
// alert(message)

// var name='Qamar Ashfaq'
// var age='15 years old'
// var certificate='Certified Mobile Application Development'
// alert(name)
// alert(age)
// alert(certificate)



// task-5
// var chz='pizza \n pizz \n piz \n pi \n p'
// alert(chz)

// task-6

// var email='qamarxyz@gamil.com'
// alert('my email address is '+ email)
// task-7
// var book='Smarter Way to learn JavaScript'
// alert('I am trying to learn JavaScript using this Book' + book)

// task-8
// document.write('yes ! I can now write on the webpage ')

// task-9
// var show='“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
// alert(show)



// Chapter 3

// var age=21
// alert('I am '+age+' years old')

// var times
// times='you have visited our website 5 times '
// alert(times)

// var birt_year=1990
// document.write('My Birth Year is '+ birt_year + '<br>')
// document.write('Data type of my declared variable is '+ typeof(birt_year))

// var name= 'John Doe'
// var product=' 5 T-shirts'
// var quantity=' XYZ'

// document.write(name + product + quantity +' from clothing area')




// Chapter-4
// task-1

// var x,y,z =1 , 2 , 3
// alert(x)

// task-2

//  legal variable names
// var hello
// var name
// var job_1
// var _parrot
// var song_hello
 

// illegal variable names
// var hello qamar
// var per-job 
// var 1hello
// var ta ta by by
// var 23 hello-by


// task-3

// document.write('<h1>Rules for naming JS variables</h1>')
// document.write('<p>Variable names can only contain numbers , $ and _. For example $my_1stVariable  </p>')
// document.write('<p> Variables must begin with a letter, $ or _. For example $name, _name or name </p>')
// document.write('<p>  Variable names are case sensitive </p>')
// document.write('<p>  Variable names should not be JS keywords </p>')


// Chapter 6-9

// task-1

// var a=prompt('Enter number : ')

// document.write('The value of a is :' + a + '<br>')
// document.write('................' + '<br>')
// document.write('The value of ++a is ' + ++a  + '<br>' +'Now the value of a is : ' + a + '<br>'  )
// document.write('The value of a++ is ' + a++  + '<br>' +'Now the value of a is : ' + a + '<br>' )
// document.write('The value of --a is ' + --a  + '<br>' +'Now the value of a is : ' + a  + '<br>')
// document.write('The value of a-- is ' + a--  + '<br>' +'Now the value of a is : ' + a + '<br>')

// task-2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write('The value of a is now :' + a + '<br>')

// document.write('The value of b is now :' + b + '<br>')

// document.write('The value of result is  :' + result + '<br>')

// explanation
// document.write('--a it is prefix decrement  in this type of decrement firstly the output is shown then after the origanal value is decremented by 1 ,')

// task-3

// var name= prompt('Enter your name : ');
// alert('Greeting Mr/Mrs : ' + name)

// task-4,5

// var table=prompt('Which number table you want : ');
// var i=1;
// var de = 5 ;
// for (i;i<=10;i++){
//     document.write(de + '*' + i + '=' + de*i + '<br>')
// }
// for (i;i<=10;i++){
//     document.write(table + '*' + i + '=' + table*i + '<br>')
// }

// task-6
// var book_1 = prompt('Enter Book Name : ')
// var book_2 = prompt('Enter Book Name : ')
// var book_3 = prompt('Enter Book Name : ')

// var t_marks=100;

// var book_1_ob_marks=prompt('Enter Your Obtained Marks of '+ book_1)
// var book_2_ob_marks=prompt('Enter Your Obtained Marks of '+ book_2)
// var book_3_ob_marks=prompt('Enter Your Obtained Marks of '+ book_3)



// document.write(' <table border=1> <tr><th>Subjects</th>  <th>Total Marks</th>  <th>Obtained Marks </th>  <th>Percentage</th> </tr> <tr><td>' + book_1 + '</td><td>' + t_marks + '</td><td>' + book_1_ob_marks + '</td><td>' + (book_1_ob_marks/t_marks*100) + '</td></tr> <tr><td>' + book_2 + '</td><td>' + t_marks + '</td><td>' + book_1_ob_marks + '</td><td>' + (book_2_ob_marks/t_marks) + '</td></tr> <tr><td>' + book_3 + '</td><td>' + t_marks + '</td><td>' + book_3_ob_marks + '</td><td>' + (book_3_ob_marks/t_marks) + '</td></tr>')


// Chapter 9-11
// task-1
// var city=prompt('Enter city : ');
// if (city==='karachi'){
//     alert('Welcome to the city of lights ')
// }

// task-2

// var check=prompt('Enter your Gender : ')
// if (check==='male'){
//     alert('Good morning Sir ')
// }
// else {
//     alert('Good morning Mam')
// }

// task-3
// var signal=prompt('Whats the color of the traffic signal right now : ')
// if (signal==='red'){
//     alert('Must Stop ')
// }
// else if(signal==='yellow'){
//     alert('ready to moove ')

// }
// else{
//     alert('Move now')
// }


// task-4
// var fuel=prompt('Enter Remaining fuel of the car in liters : ');
// if (fuel<=0.25){
//     alert( 'Please refill the fuel in your car' )
// }


var book_1_ob_marks=parseInt(prompt('Enter Your Obtained Marks of Book 1','1'),10)
var book_2_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  Book 2','1'),10)
var book_3_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  Book 3','1'),10)


var book_1_t_marks=parseInt(prompt('Enter Total Marks of Book 1' ,'1'),10)
var book_2_t_marks=parseInt(prompt('Enter Total Obtained Marks of  Book 2' ,'1'),10)
var book_3_t_marks=parseInt(prompt('Enter Total Obtained Marks of  Book 3' ,'1'),10)

var ob_t_marks= book_1_ob_marks + book_2_ob_marks + book_3_ob_marks

var Total_marks_of_all=book_1_t_marks + book_2_t_marks + book_3_t_marks

var Percentage =(ob_t_marks/Total_marks_of_all)*100

if (Percentage>=80){
    var g ='A+'
    var remarks='Excellent'
}
else if (Percentage>=70){
    var g ='A'
    var remarks='Good'
}
else if (Percentage>=60){
    var g ='B'
    var remarks='You need to improve '
}
else{
    var g='Fail'
    var remarks='Sorry'
}


document.write('<h2>Marks Sheet</h2> <br><br>  <h3>Total Marks : </h3>' + Total_marks_of_all + ' <br> Marks Obtained  :' + ob_t_marks + '<br> Percentage  :' + Percentage + '<br> Grade  : ' + g + '<br> Remarks : ' + remarks  )




// chapter-21
// task-1
// var first=prompt('enter your first name : ')
// var last=prompt('enter your last name : ')
// var full_name= first + last

// alert('Greetings ' + full_name)


// task-2

// var phone=prompt('Enter your favourite Mobile Model : ')
// var x = phone.length
// document.write(x)

// task-3
// var x='Pakistani'
// var y= x.indexOf('n')
// document.write(y)


// task-4
// var check='Hello World'
// var y= check.lastIndexOf('l')
// document.write(y)

// task-5
// var x='Pakistani'
// var y= x.charAt(3)
// document.write(y)

// task-6
// var first=prompt('enter your first name : ')
// // var last=prompt('enter your last name : ')
// // var full_name= first + last

// alert('Greetings ' + full_name)

// task-7

// var x='Hyderabad'
// var y = x.replace('Hyder','Islam')
// document.write(y)

// task-8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var rep=message.replace(/and/g,'&')
// document.write(rep)

// task-9
// var x=472
// var y=String(x)
// document.write('Value :' + x + '<br>' + 'Type :' + typeof(x) + '<br>' )
// document.write('Value :' + y + '<br>' +  'Type :' + typeof(y))

// task-10

// var x=prompt('Enter a string : ')
// var y=x.toUpperCase()
// document.write(y)

// task-11

// var x=prompt('Enter a string : ')
// var y=x.toLocaleUpperCase()
// document.write(y)


// task-12
// var x=35.36
// var y=String(x)
// var z=y.replace('.', "");
// document.write(z)


// task-13






























// task-18
// var x="the quick brown fox jumps over the lazy dog"

// var y = (x.match(/the /g) || []).length;

// document.write(y)
 



// chapter-31-34

// task-1
// var rightNow = new Date();
// document.write(rightNow)


// task-2

// var d = new Date(); 
// var currentMonth = d.getMonth();
// alert(currentMonth) 























// chapter 35-38

// task1

// function date(){
//     var rightNow = new Date();
//     document.write(rightNow)
// }

// date()



// task-2

// function Greet(first_name,last_name){
//     document.write('Greetings from SqSoft.com ' + first_name + last_name)
// }

// var a = prompt('First Name : ')
// var b = prompt('Last Name : ')
// Greet(a,b)





// task-3

function sum(a,b){
    document.write('Sum is : ' , a+b)
    
}


var a =Number( prompt('Enter one number to sum :'));
var b =Number( prompt('Enter other number to sum :'));


sum(a , b)


// task-4

// function calculator(x,y,z){
//     if (z==='+'){
//         document.write(x+y)
//     }
//     else if (z==='-'){
//         document.write(x-y)
    

//     }
//     else if (z==='*'){
//         document.write(x*y)
    

//     }
//     else if (z==='/'){
//         document.write(x/y)
    

//     }
//     else if (z==='%'){
//         document.write(x%y)
    

//     }


// }

// var x= Number (prompt('Ente first number : '))
// var y = Number (prompt('Enter second number :'))
// var z = prompt('what operation you want to : + , - ,* ,/ , % ')
// calculator(x,y,z)

// task-5

// function square(x){

//     document.write(x*x)
// }

// square(4)

// task-6




// task-7

// function counting(start,end){
//     for (start;start<=end;start++){
//         document.write(start)
//     }

// }


// var a =Number(prompt('Starting point : '))
// var b =Number(prompt('Ending point : '))
// counting(a,b)

// task-8

// function hypothense(){



// }


// task-9


// function area(width,height){

//     document.write(width*height)



// }


// // area(7,18)


// var width=Number(prompt('Enter width : '))
// var height=Number(prompt('Enter height : '))

// area(width,height)

// task-10



// chaper 43-48 

// task-1
function detail(){
    var g =document.getElementById('detail')
    g.innerHTML= alert('We will cover JavaScript from Chapter 1 - Chapter 67  ')


}


//  task-2


function cart(){
    var h =document.getElementById('cartbutton')
    h.innerHTML= alert('Thanks for Purchasing a phone from us : ')



}

// task-3

function deletee(btn){
    
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  
}


// task-4



function onbulb(){
    var imge=document.getElementById('bulb')
    imge.src='img/onbulb.jpg'


}

function offbulb(){
    var imge=document.getElementById('bulb')
    imge.src='img/off bulb.jpg'


}


// task-5
var counterr =0;
function counter(){
    counterr +=1 ;
    var i = document.getElementById('counterr')
    i.innerHTML=counterr



}



// Chapter 49-52

// task-1

// function signup(){
//     var n = document.getElementById('name').value;
    
//     var e =document.getElementById('email').value;
//     var d =document.getElementById('description').value

//     alert(n + '  ' + e + '  ' + d)
    


// }

// task-3
function addstudent(){
    var nom=document.getElementById('StudentName').value;
    var r =document.getElementById('StudentRoll');
    
    var ne =document.getElementById('stuname').innerHTML=nom
    // ne.innerHTML='qamar'
    alert(nom)


}






// task-3

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

//   Chapter 53-58

// task-1

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}












// chapter 58-67

// task-1

// var x =document.getElementById("form-content")
// console.log(x.childNodes)

// var y=document.getElementsByClassName('render')

// document.write(y)

// var z= document.getElementById("firstname");
// document.write(z.innerHTML='Qamar')

// var j=document.getElementById('lastname')
// document.write(j.innerHTML='Ashfaq')

// var i=document.getElementById('email1')
// document.write(i.innerHTML='qamarashfaq@gmail.com')



// // task-2


// var x=document.getElementById('form-content')
// console.log(x.nodeType)

// var y=document.getElementById('lastName')
// console.log(y.nodeType)
// console.log(y.childNodes)
// console.log(y)


// // document.write(y.childNodes('lastname').innerHTML='helloworld')
// console.log(x.firstElementChild)
// console.log(x.lastElementChild)


// var y=document.getElementById('lastName').nextSibling.innerHTML;
// console.log(y)

// var y=document.getElementById('lastName').previousSibling.innerHTML;
// console.log(y)


// var z= document.getElementById('email1')
// console.log(z.parentElement)
// console.log(z.nodeType)