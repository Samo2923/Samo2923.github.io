let d = new Date();
let q = d.getFullYear();
let m = d.getMonth();
let or = d.getDate();
let dey = 31
let ancor = 0;
for (let t = q; t <= q + 0; t++) {

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];




let year = 0
select = document.createElement("select")
for (let i = 2022; i < 2033; i++) {
    let option = document.createElement("option")
    option.innerText = i
    select.append(option)
}
select.addEventListener("change", function () {
    year = (this.value);
    let d = new Date(year);
    let weekDay = d.getDay();
    if (weekDay === 0) {
        ancor = 6;
    } else {
        ancor = weekDay - 1;
    }
    console.log(ancor);
    render(year)
})
document.getElementById("rot").append(select)
function render(y) {
    document.getElementById("year").innerHTML = ""
    let div = document.createElement("div")
    div.classList = "year"
    for (let j = 0; j < 12; j++) {
        let divMonth = document.createElement("div")
        divMonth.classList = "month"

        h = document.createElement("h1");
        h.innerHTML = month[j];
        divMonth.append(h);
        for (let m = 0; m < week.length; m++) {
            let divDay = document.createElement("div");
            divDay.classList = "day";
            divDay.innerText = week[m];
            divMonth.append(divDay);
        }
        if (j == 3 || j == 5 || j == 8 || j == 10) {
            day = 30;

        } else if (j == 1) {
            if (y % 4 === 0) {
                day = 29;
            } else {
                day = 28;
            }
        } else {
            day = 31;
        }

        for (let m = 0; m < ancor; m++) {
            let divDay = document.createElement("div")
            divDay.classList = "day0"

            divMonth.append(divDay)
        }

        for (let i = 1; i <= day; i++) {
            if (t === q && j === m && i === or) {

                let divDay = document.createElement("div")
                divDay.classList = "day bg"
                divDay.innerText = i
                divMonth.append(divDay)

            }else if (j === 9 && i === 29){
                
                let divDay = document.createElement("div")
                divDay.classList = "day bga"
                divDay.innerText = i
                divMonth.append(divDay)
            }else {
                
                let divDay = document.createElement("div")
                divDay.classList = "day"
                divDay.innerText = i
                divMonth.append(divDay)
            }
            if (ancor < 7) {
                ancor++
            } else {
                ancor = 1;
            }
        }
    

        div.append(divMonth)
        document.getElementById("year").append(div)

    }
}
}
