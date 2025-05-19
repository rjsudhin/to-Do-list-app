const toDo = document.querySelector('#todo')
const addingBtn = document.querySelector('.adding-btn')
const userInput = document.querySelector('#user-input')


// adding new wish
addingBtn.addEventListener('mousedown', () => {
  if (toDo.childElementCount < 5) {
    // creating a li element for contain
    let wishContainer = document.createElement('li')
    // creating a checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    // this is the wish user entere 
    let labelText = document.createElement('label')
    labelText.textContent = userInput.value
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn-delete')
    deleteBtn.textContent = 'delete'
    deleteBtn.addEventListener('click', removeContainer) 

    wishContainer.appendChild(checkbox)
    wishContainer.appendChild(labelText)
    wishContainer.appendChild(deleteBtn)
    toDo.appendChild(wishContainer)
  }

})


function removeContainer(e) {
  let container = e.target.parentElement
  toDo.removeChild(container)
  console.log(container)
}