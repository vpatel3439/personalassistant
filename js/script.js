function changeImage() {
  if(index == (imageUrls.length - 1))
     index=0;
  else
    index++;
  _gallery.setAttribute("src",imageUrls[index]);
}

const imageUrls = [
    "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.pexels.com/photos/1426191/pexels-photo-1426191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://cdn.pixabay.com/photo/2016/10/23/17/06/calendar-1763587_960_720.png",
    "https://images.pexels.com/photos/1115680/pexels-photo-1115680.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://cdn.pixabay.com/photo/2019/09/17/09/45/to-do-4483048_960_720.jpg",
    "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80",
    "https://images.pexels.com/photos/196649/pexels-photo-196649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

let index = 0;

let _gallery = document.getElementById("gallery");
setInterval(changeImage,1500);

$(document).ready(function(){
   $("#accordion").accordion(); 
});