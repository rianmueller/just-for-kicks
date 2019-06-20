// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

function notAvailable(){
    let divElem = document.createElement('div');
    divElem.className = 'notAvailable';
    divElem.innerHTML = 'Not Available in Hawaii';
    shipDetails.appendChild(divElem);
};

details.addEventListener('click', notAvailable);

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

function showHideDesc(){
    let divElem = document.getElementById('descrip1');
    if (divElem.style.display === 'none'){
        divElem.style.display = 'block';
    } else {
        divElem.style.display = 'none';
    }
}

document.getElementById('name1').addEventListener('click', showHideDesc);

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2'

let description2Elem = document.createElement('div');
description2Elem.id = 'descrip2';
description2Elem.style.display = 'none';
description2Elem.innerHTML = 'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan\'s 1987-88 NBA season.';
document.getElementById('name2').appendChild(description2Elem);

function showHideDescription2(){
    if (descrip2.style.display === 'none'){
        descrip2.style.display = 'block';
    } else {
        descrip2.style.display = 'none';
    }
}

document.getElementById('name2').addEventListener('click', showHideDescription2);

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let thumbsUp = document.getElementsByClassName('fa-thumbs-up');

for (let i = 0; i < thumbsUp.length; i++){
    let counter = document.createElement('span');
    let count = 0;
    thumbsUp[i].appendChild(counter);
    thumbsUp[i].addEventListener('click', function(){
        count += 1;
        counter.innerHTML = count;
    });
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let plusPriceDiv = document.getElementById('price4');
let plusPrice = 58000;
plusPriceDiv.innerHTML = '<span id = plusPriceSpan>' + plusPrice + '</span><span id="increase"><i class="far fa-plus-square"></i></span>';
let plusImg = document.getElementsByClassName('fa-plus-square');

plusImg[0].addEventListener('click', function(){
    plusPrice += 1;
    plusPriceSpan.innerHTML = plusPrice;
});

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

let lessPriceDiv = document.getElementById('price5');
let lessPrice = 2500;
lessPriceDiv.innerHTML = '<span id = lessPriceSpan>' + lessPrice + '</span><span id="decrease"><i class="far fa-minus-square"></i> </span>';
let minusImg = document.getElementsByClassName('fa-minus-square');

minusImg[0].addEventListener('click', function(){
    lessPrice -= 1;
    lessPriceSpan.innerHTML = lessPrice;
});

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

let block3Images = document.querySelectorAll("div.block3 > img");

block3Images[1].addEventListener('mouseover', function(){
    block3Images[1].src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/(BRAND%20NEW)%20Jordan%2011%20Retro%20Space%20Jam%20(2016).jpg'
});

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

let block1Images = document.querySelectorAll("div.block1 > img");

block1Images[2].addEventListener('click', function(){
    block1Images[2].style="width:150%;height:150%;"
});

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
