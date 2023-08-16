const searchField = document.querySelector('.search');
// console.log(searchField);
const divs = document.querySelectorAll('.thing');
// console.log(divs);
searchField.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    // console.log(word);
    divs.forEach(function(item) {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');  
    })
})