const expenseForm = document.getElementById('expense-form')
const itemInput = document.getElementById('item-input')
const costInput = document.getElementById('cost-input')
const expenseList = document.getElementById('expense-list')

let expenses = []

expenseForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const item = itemInput.value
  let cost = costInput.value

  if (item.trim() === '') {
    window.alert('Please add an item.')
    return
  }

  if (cost.trim() === '') {
    window.alert('Please add a cost for the item.')
    return
  }

  cost = parseFloat(cost)

  if (isNaN(cost)) {
    window.alert('The cost must be a number.')
    return
  }

  const expense = { item, cost }
  expenses.push(expense)
  displayExpenses(expense)

  itemInput.value = ''
  costInput.value = ''
})

function displayExpenses({ item, cost }) {
  const li = document.createElement('li')
  li.innerHTML = `<span class="item">${item}</span> <span class="cost">$${cost.toFixed(2)}</span>`
  expenseList.appendChild(li)
}
