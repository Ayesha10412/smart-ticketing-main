document.getElementById('menu-btn').addEventListener('click', function(){
    document.getElementById('menu-option').classList.remove('hidden');
})

const seatSelectedElement =document.getElementById('seat-selected-element');
const totalSeatBooked=document.getElementById('total-seat-booked');
const availableSeat=document.getElementById('available-seat');
const totalPriceEl= document.getElementById('total-price');
const couponInput= document.getElementById('coupon-field');
const couponBtn= document.getElementById('coupon-btn');
const noSeatEl=document.getElementById('no-seat');



let seatSelected=[];
let totalPrice = 0;

function handleSelectionSeat(event){

const value= event.innerText;
if(seatSelected.includes(value)){
    return alert('Seat Already Booked');
}


   else if(seatSelected.length <4){
    event.classList.add('bg-bg-primary');
    event.classList.add('text-white');
    seatSelected.push(event.innerText);

    noSeatEl.classList.add('hidden');
    totalSeatBooked.innerText= seatSelected.length;
// decrease seat
const availableSeatValues= parseInt(availableSeat.innerText) ;
const newAvailableSeatValues= availableSeatValues -1;

availableSeat.innerText = newAvailableSeatValues;
// remove text

    seatSelectedElement.innerHTML += `<li class="text-base font-normal flex justify-between">
    <span>${ event.innerText }</span>
        <span>Economy</span>
        <span>550</span>

    </li> `;
    // total price

    totalPrice += 550;
totalPriceEl.innerText = totalPrice.toFixed(2) ;

if(seatSelected.length >3){

couponInput.removeAttribute('disabled');
couponBtn.removeAttribute('disabled');


}

   }


   else{
    return alert ('Maximum Seat Added!!');
}
}

// coupon btn function
document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInputValue= couponInput.value;
    let newPrice= 0;

// console.log(couponInput.value);
if(couponInputValue !== "NEW15" && couponInputValue !== "Couple 20" ){
    return alert('Your Provided coupon code is not valid');
}

 else if(couponInputValue ==="NEW15")
{
    newPrice= totalPrice * .15 ;
}
else if(couponInputValue ==="Couple 20"){

    newPrice= totalPrice * .20 ;

}

const showCouponPrice= document.getElementById('show-coupon-price');
showCouponPrice.innerHTML= `
<p >Discount</p>
    <p>
        <span> - BDT: </span>
        <span >${newPrice.toFixed(2)} </span>

    </p>

`



const grandTotal= totalPrice- newPrice ;
const grandPrice= document.getElementById('grand-total')
grandPrice.innerText= grandTotal.toFixed(2);

})

const phoneNum= document.getElementById('phn-num');
const nextBtn= document.getElementById('next-btn');


phoneNum.removeAttribute('disabled');
 phoneNum.addEventListener('input', function(e){
        const inputValue= e.target.value;
        if(inputValue.length >=11){
            nextBtn.removeAttribute('disabled');
        }
    })
    
    document.getElementById('modal-btn').addEventListener('click', function(){
        window.location.reload();
    })
    
