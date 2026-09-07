function minDate(dates) {
  let yearMin = dates[0].slice(0,4);
  let MonthMin = dates[0].slice(5,7);
	let DateMin = dates[0].slice(8,10);

	for (let date of dates) {
		 let year = date[0].slice(0,4);
  let Month = date[0].slice(5,7);
	let Date = date[0].slice(8,10);
		if (year > yearMin) {
			continue;
		}else if(year < yearMin) {
			yearMin = year;
			MonthMin = Month;
			DateMin = Date;
		}else{
			if(MonthMin > Month){
				yearMin = year;
			MonthMin = Month;
			DateMin = Date;
			}else if(MonthMin < Month){
				continue;
			}else{
				if (date < DateMin) {
					yearMin = year;
		     	MonthMin = Month;
			   DateMin = Date;
				}
			}
		}
	}
	return(`${yearMin}/${MonthMin}/${DateMin}`);
	
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
