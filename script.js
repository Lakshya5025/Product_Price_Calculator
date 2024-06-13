const html = `<div class="item">
                    <input type="text" placeholder="name">
                    <input class="price" type="number" placeholder="₹">
                    <input class="percentage" type="number" placeholder="%">
                </div>`;
const cards = document.querySelector(".cards");
document.querySelector(".add").addEventListener('click', function (e) {
    e.preventDefault();
    cards.insertAdjacentHTML('beforeend', html);
})


document.querySelector('.calculate').addEventListener('click', function (e) {
    e.preventDefault();
    const price = document.querySelectorAll(".price");
    const percent = document.querySelectorAll('.percentage');
    // console.log(price);
    // console.log(percent);
    const priceArr = [];
    const percentArr = [];
    price.forEach(function (ele) {
        priceArr.push(+(ele.value));
    })
    percent.forEach(function (ele) {
        percentArr.push(+(ele.value));
    })
    let cost = 0;

    for (let i = 0; i < priceArr.length; i++) {
        cost += (percentArr[i] / 100) * priceArr[i];
    }
    cost = cost.toFixed(3);
    // console.log(cost.toFixed(2));
    document.querySelector('.cost').textContent = cost;

})