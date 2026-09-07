function minDate(dates) {
  //write you code here
	let yearMin=3000;
	for (let date of dates) {
		 yearMin = Math.min(yearMin , date.slice(0,4));
	}
	let newArr =[];
	for (let date of dates) {
		if (yearMin == date.slice(0,4)) {
			newArr.push(date);
		}
	}
	let monthMin =3000;
	for (let arr of newArr) {
		monthMin = Math.min(monthMin, arr.slice(5,7));
	}
	let newArr2 = [];
	for (let arr of newArr) {
		if (monthMin == arr.slice(5,7)) {
			newArr2.push(arr);
		}
	}

	let dateMin =3000;
	for (let arr of newArr2) {
		dateMin = Math.min(dateMin, arr.slice(7,9));
	}
	
	for (let arr of newArr2) {
		if(dateMin == arr.slice(7,9)) {
			return arr;
		} 
	}
	return -1;
	
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];  


alert(minDate(dates));
