document.addEventListener("DOMContentLoaded", function(){
    let expenseCalculation = 0;
    let incomeCalculation = 0;
    let totalCalculation = 0;
    document.querySelector("#expensetotal").innerHTML = expenseCalculation;
    document.querySelector("#incometotal").innerHTML = incomeCalculation;
    document.querySelector("#total").innerHTML = totalCalculation;

let newButton = document.querySelector(".new-entry");

let tbody = document.querySelector(".entries");

newButton.addEventListener("click", addNew);

function addNew(){
    document.querySelector(".table-head").style.visibility = "visible";
    let newEntry = document.createElement("tr");
    newEntry.setAttribute("class", "read-only");
    newEntry.innerHTML = `<td class="entry">
                        <input class="input input-date" type="date" placeholder="empty">
                    </td>
                    <td>
                        <input class="input input-text" type="text" placeholder="Write a description. (Wages, bills, etc...)">
                    </td>
                    <td>
                        <select class="input-type">
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </td>
                    <td>
                        <input class="input input-amount" type="number" placeholder="Write amount">
                    </td>
                    <td>
                        <button type="button" class="delete-button">&#10005;</button>
                    </td>`;


    tbody.appendChild(newEntry);

    let deleteButton = newEntry.querySelector(".delete-button");
        deleteButton.addEventListener('click', function (event){

            event.target.closest("tr").remove();
            updateTotals();
})

}
document.addEventListener('input', function(event){
if(event.target.classList.contains('input-amount')){
    updateTotals();}

})

function updateTotals(){
    
    let amountsArray = document.querySelectorAll(".input-amount");

    expenseCalculation = 0;
    incomeCalculation = 0;

amountsArray.forEach(amountInput => {
    let typeInput = amountInput.closest("tr").querySelector(".input-type").value;
    let inputValue = amountInput.value.trim();
    if (inputValue === ' ' || isNaN(inputValue)) {
            inputValue = 0;
        }
    if(typeInput === "expense"){
        expenseCalculation += parseFloat(amountInput.value)
    } else if(typeInput === "income"){
        incomeCalculation += parseFloat(amountInput.value)
    }


})
    totalCalculation = incomeCalculation - expenseCalculation;

    document.querySelector("#expensetotal").innerHTML = expenseCalculation;
    document.querySelector("#incometotal").innerHTML = incomeCalculation;
    document.querySelector("#total").innerHTML = totalCalculation;

}


})




