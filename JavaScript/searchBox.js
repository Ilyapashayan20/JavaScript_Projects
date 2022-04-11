
let cars = [
    {name: 'BMW' , data:2022 , price: '200000$'},
    {name: 'Mersedes' , data:2022 , price:'550000$'},
    {name: 'Toyota' , data:2012 , price: '12000$'},
    {name: 'Opel' , data:2000 , price: '1000$'},
    {name: 'Lada-Niva' , data:1988 , price: '1000$'},
    {name: 'Rolls Royce' , data:2022 , price: '999999$'}
]

let findindex= 0;

 const selectTag = document.getElementById('select') 
  selectTag.addEventListener('change', function() {
  let index = selectTag.selectedIndex;
  if(index === 1){
    findindex = 1
  } else if(index === 2){
    findindex =2
  } else{
    findindex = 0
  }
})



bulidTable(cars)
function bulidTable(data){
    let table = document.getElementById('table')
    table.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        const car = data[i];
       let  row = `<td>${car.name}</td><td>${car.data}</td><td>${car.price}</td>`
       table.innerHTML += row
    }
    const selectTag = document.getElementById('select') 
}
  
  function serach(){
    let input , filter,table,tr,td,i ,txtValue;
    input = document.querySelector('.searchInput')
    filter = input.value.toUpperCase()
    table = document.querySelector('.table')
    tr =  table.getElementsByTagName('tr')
    for(i = 0 ; i < tr.length; i++){
      td = tr[i].getElementsByTagName('td')[findindex]
      if(td){
        txtValue = td.textContent;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display = ''
        }else{
          tr[i].style.display = 'none'
        }
      }
    }


  }

  

  