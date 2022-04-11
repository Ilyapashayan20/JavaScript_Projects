const InputValue = document.querySelector('.input')
const ul = document.querySelector('.ul')
function add(){
    if(InputValue.value === ''){
        InputValue.classList.add('error')
    } else{
        InputValue.classList.remove('error')
        const div = document.createElement('div')
        div.innerHTML = InputValue.value
        div.classList.add('list')
        ul.appendChild(div)
        const spanX = document.createElement('span')
        spanX.innerHTML = 'x'
        div.appendChild(spanX)
        InputValue.value = ''
    }
    const deleteValue = document.querySelectorAll('span')
for(let i = 0 ; i < deleteValue.length; i++){
    deleteValue[i].addEventListener('click', function(){
        deleteValue[i].parentElement.style.display = 'none'
    })
}
}


