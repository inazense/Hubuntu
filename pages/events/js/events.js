function addEvents(element)
{
	for (const e in EVENTS)
	{
		let id = e;
		let name = EVENTS[e]["name"];
		let img = EVENTS[e]["preview-img"];
		let link = "";

		addEventCard(name, img, link, element);
	}
}

function addEventCard(name, img, link, element)
{
	card = '<div class="col-sm-12 col-md-6 col-lg-4">'
	+ '<div class="card">'
	+ '<img class="card-img-top" src="' + img + '" alt="' + name + '">'
	+ '<div class="card-body">'
	+ '<a href="' + link + '">'
	+ '<button type="button" class="btn btn-success btn-block">'
	+ '<span>' + name + '</span>'
	+ '</button></a></div></div></div>';

	element.insertAdjacentHTML('beforeend', card);
}