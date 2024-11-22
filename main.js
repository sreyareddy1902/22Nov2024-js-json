


/*---forEach loop
let numbers=[13,7,12,9,23]
numbers.forEach(function(num)
{
    console.log(num)
})
----*/

/*---example1
async function json()
{
    let data=await fetch("test.json")
    console.log(data)
    data=await data.json()
    console.log(data)
}
json()
----*/

/*----example2
async function json()
{
    let data=await fetch("test.json")
    console.log(data)
    data=await data.json()
    console.log(data)
}
json()
-----*/

/*---example3
async function json()
{
    let data=await fetch("test.json")
    console.log(data)
    data=await data.json()
    console.log(data)
}
json()
----*/


/*---example4 json api
let e_list=""
fetch("https://jsonplaceholder.typicode.com/users")
.then(Response=>Response.json())
.then(udata=>{
    console.log(udata)
    udata.forEach(user => {
        console.log(user)
        e_list+=`<li>${user.id}</li>`
        e_list+=`<li>${user.address.street}</li>`
    });
        
    document.getElementById("elist").innerHTML=e_list
})
-----*/

/*---example5
let s_list=""
fetch("test.json")
.then(Response=>Response.json())
.then(sdata=>{
    console.log(sdata.students)
    sdata.students.forEach(student => {
        console.log(student)
        s_list+=`<li>${student.name}</li>`
        s_list+=`<li>${student.skills}</li>`
    });
    document.getElementById("slist").innerHTML=s_list
})
-----*/
