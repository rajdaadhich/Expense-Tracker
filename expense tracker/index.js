function getValue() {
    let num = document.querySelector("#description").value;
    let money = document.querySelector("#amount").value;



    let container = document.createElement("ul");
    let list = document.createElement("li");
    let mon = document.createElement("span");
    let btn = document.createElement("button");
    let del = document.createElement("img");

    container.className = "history";


    del.setAttribute("src", "./wrong.png");
    del.setAttribute("height", "25em");
    del.setAttribute("alt", "delete");

    btn.className = "delete";



    list.innerText = num;
    list.style.width = "80%";

    

    if (money < 0) {
        list.className = "minus";
        mon.innerText = money;
        mon.className = "money moneym";
    } else {
        list.className = "plus";
        mon.innerText = "+" + money;
        mon.className = "money moneyp";
    }

    btn.addEventListener("click", () => {
        container.remove();
        updateTotals();
    });

    btn.appendChild(del);
    list.appendChild(mon);
    container.appendChild(list);
    container.appendChild(btn);



    document.querySelector(".transac").appendChild(container);
    updateTotals();
    
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        getValue();
    }
})

document.querySelector(".delete1").addEventListener("click", () => {
    let tobe = document.querySelector("#history");
    tobe.remove();
    updateTotals();
});

document.querySelector(".delete2").addEventListener("click", () => {
    tobe = document.querySelector("#history1");
    tobe.remove();
    updateTotals();
});

document.querySelector(".delete3").addEventListener("click", () => {
    tobe = document.querySelector("#history2");
    tobe.remove();
    updateTotals();
});

document.querySelector(".delete4").addEventListener("click", () => {
    tobe = document.querySelector("#history3");
    tobe.remove();
    updateTotals();
});



function updateTotals() {

    const elements = document.getElementsByClassName('money');
    const dataArray = Array.from(elements).map(element => Number(element.textContent ));

    var sum = dataArray.reduce((a, b) => {
        return a + b
    }, 0);

    document.querySelector(".balance").innerText = "$" + sum + ".00";


    const income = document.getElementsByClassName('moneyp');
    const dataArrayplus = Array.from(income).map(element => Number(element.textContent ));

    var suminc = dataArrayplus.reduce((a, b) => {
        return a + b
    }, 0);

    document.querySelector(".income1").innerText = "$" + suminc + ".00";


    const expense = document.getElementsByClassName('moneym');
    const dataArrayminus = Array.from(expense).map(element => Number(element.textContent ));

    var summin = dataArrayminus.reduce((a, b) => {
        return a + b
    }, 0);

    document.querySelector(".expense1").innerText = "$" + summin + ".00";
}


updateTotals();
