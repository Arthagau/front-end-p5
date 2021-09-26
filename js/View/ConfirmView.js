function showOrderIdAndPrice() {
	const orderId = document.querySelector("#orderId");
	const totalOrder = document.querySelector("#total-order");
	const backButton = document.querySelector("#back-button");

	orderId.innerHTML = localStorage.getItem("OrderId");
	totalOrder.innerHTML = localStorage.getItem("TotalPrice");

	orderId.classList.add("font-weight-bold");
	totalOrder.classList.add("font-weight-bold");

	backButton.addEventListener("click", (e) => {
		localStorage.clear();
		document.location.href = "index.html";
	});
}

showOrderIdAndPrice();
