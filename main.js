var employees=[
{
	firstName:"John",
	secondName:"Doe",
	age:27,
	joinDate:"December 15 2017"
},
{
	firstName:"Ana",
	secondName:"Rosy",
	age:25,
	joinDate:"January 15 2019"
},
{
	firstName:"Zion",
	secondName:"Albert",
	age:30,
	joinDate:"February 15 2011"
}];
let king=employees.sort(function(a,b)
{
	return a.age-b.age;
})
console.log(king);