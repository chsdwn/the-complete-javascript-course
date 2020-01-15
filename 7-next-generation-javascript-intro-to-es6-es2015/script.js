// Lecture: Rest parameters

// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  console.log(argsArr);

  argsArr.forEach(function (cur) {
    console.log((2020 - cur) >= limit);
  })
}

isFullAge5(21, 1990, 2004, 1965);
isFullAge5(18, 1990, 2004, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => {
    console.log((2020 - cur) >= limit)
  });
}

isFullAge6(18, 1990, 2004, 1965);