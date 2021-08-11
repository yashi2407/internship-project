console.log("app.js")
var plane= document.querySelector('div.col-6.plane')
var hotel= document.querySelector('div.col-6.hotel')
var planeform=document.querySelector('div.row.plane-form');
var hotelform=document.querySelector('div.row.hotel-form');


plane.addEventListener('click',function(){
    hotelform.classList.add('d-none');
    planeform.classList.remove('d-none');
    plane.classList.add('active-icon');
    hotel.classList.remove('active-icon');

});
hotel.addEventListener('click',function(){
    hotelform.classList.remove('d-none');
    planeform.classList.add('d-none');
    plane.classList.remove('active-icon');
    hotel.classList.add('active-icon');

    
});