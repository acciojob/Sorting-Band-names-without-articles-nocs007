let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articleless = [] ;

for(let i=0; i<touristSpots-1; i++){
	let articlelessitem = arr[i].replace(regexp, "").trim();
	articleless.push(articlelessitem);
}
console.log(articleless);