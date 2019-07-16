//0
function getNumbers(strng) {
  let arr = [];
  for (let i = 0; i <strng.length; i++) {
    let numb = parseInt(strng[i]);
    if (numb) {
    arr.push(numb);
    }
  }
  return arr;
}

getNumbers('string');
getNumbers('n1um3ber95');

//1
function findTypes() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    if (obj.hasOwnProperty(type)) {
      obj[type] +=1;
    } else {
      obj[type] = 1;
    }
  }
  return obj;
}

findTypes(null, 5, 7, 'hello');

//2
function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

executeforEach([1,2,3], function(x){
 console.log(x) 
});

//3
function mapArray(arr, func) {
  let arrNew = [];
  executeforEach(arr, x => arrNew.push(func(x)));
  return arrNew; 
} 

mapArray([2, 5, 8], function(x) {
 return x + 3 
});

//4
function filterArray(arr, func) {
  let arrFilter = [];
  executeforEach(arr, x => {
 if (func(x)) {
                                arrFilter.push(x);
                              }
                            });
  return arrFilter;
}

filterArray([2, 5, 8], function(x) {
 return x > 3
});

//5
function showFormattedDate(date) {
  let newdate = new Date(date);
  let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
   'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = monthArr[newdate.getMonth()];
  let day = newdate.getDate();
  let year = newdate.getFullYear();

  return `Date: ${month} ${day} ${year}`;
}

showFormattedDate('2019-01-27T01:10:00');

//6
function canConvertToDate(date) {
  let boolval = Date.parse(date);

  return !isNaN(boolval);
}

canConvertToDate('2016-13-18T00:00:00'); 
canConvertToDate('2016-03-18T00:00:00');

//7
function daysBetween(date1, date2) {
  const milSecDay = 86400000;
  let daysbetween = Math.abs(Math.round((date1 - date2) / milSecDay));
  return daysbetween;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

//8

function getAmountOfAdultPeople(obj) {
  const daysOf18Years = 6570;
  let newArr = filterArray(obj, function(x) {
    return daysBetween(new Date(), new Date(x['birthday'])) > daysOf18Years;
  });
  return newArr.length;
}


//9
function keys(object) {
  let keyarr = [];
  for (let key in object) {
    keyarr.push(key);
  }
  return keyarr;
}

keys({k: 1, ko: 2, ki: 3});

//10
function values(object) {
  let valarr = [];
  for (let key in object) {
    valarr.push(object[key]);
  }
  return valarr;
}

values({k: 1, ko: 2, ki: 3});