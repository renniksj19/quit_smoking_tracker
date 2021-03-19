var form = document.forms['quitform'];
var quitdate = form.elements[0];
var startdate = form.elements[1];
var packs_a_day = form.elements[2];
var price_pack = form.elements[3];
var textarea = form.elements[5];

form.addEventListener("submit", submit, false);


function submit() {
	date1 = new Date(quitdate.value);
	date2 = new Date(startdate.value);
	diffTime = Math.abs(date2 - date1);
	diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	total_cost = parseFloat(packs_a_day.value) * parseFloat(price_pack.value) * diffDays;
	textarea.value = "Days Quit: "+diffDays+", Money Saved $"+total_cost;
	event.preventDefault();
}
