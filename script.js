//your JS code here. If required.
const student={
	name:"John",
};
let arr=[];
function getKeys(obj){
	for(let i in obj){
		arr.push(i)
	}
	return arr;
}
console.log(getKeys(student))