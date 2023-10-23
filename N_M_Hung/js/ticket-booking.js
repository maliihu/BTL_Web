
let seats = document.querySelector(".all-seats");
for (var i = 0; i < 60; i++) {
  let randint = Math.floor(Math.random() * 5);
  let booked = randint === 1 ? "booked" : "";
  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.name = "tickets";
  inputElement.id = "s" + (i + 2);
  inputElement.disabled = booked === "booked"; 

  let labelElement = document.createElement("label");
  labelElement.htmlFor = "s" + (i + 2);
  labelElement.className = "seat " + booked;

  seats.appendChild(inputElement);
  seats.appendChild(labelElement);
}
var ticket_price = 10
let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    let amount = document.querySelector(".amount").innerHTML;
    let count = document.querySelector(".count").innerHTML;
    amount = Number(amount);
    count = Number(count);
    if (!ticket.disabled) {
      if (ticket.checked) {
        count += 1;
        amount += ticket_price;
      } else {
        count -= 1;
        amount -= ticket_price;
      }
    } else {
      ticket.checked = false;
    }
    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
  });
});

