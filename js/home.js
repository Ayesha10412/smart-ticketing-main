document.getElementById('menu-btn').addEventListener('click', function(){
    document.getElementById('menu-option').classList.remove('hidden');
})

const seatSelected=document.getElementById('seat-selected');

function handleSelectionSeat(event){
    event.classList.add('bg-bg-primary');
    event.classList.add('text-white');

    // console.log(event.innerText);
    // seatSelected.innerHTML = `<li class="text-base font-normal flex justify-between">
    // <span>${ event.innerText }</span>
    //     <span>Economy</span>
    //     <span>550</span>

    // </li> `;
}