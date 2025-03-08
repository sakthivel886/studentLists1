
let data = [
    {id: 1, name:"vaishu", age:"20", gender:"Female", course: "JavaScript", email: "sakthivel0210@gmail.com"},
    {id: 2, name:"vaishu", age:"20", gender:"Female", course: "JavaScript", email: "sakthivel0210@gmail.com"}
]

var datas = localStorage.getItem('object')
var objectDatas = JSON.parse(datas)
data = objectDatas


var ids = data.length
if (ids == 0) {
    idss = 0
}
else {
    idss = data[ids-1].id
}

function readAll() {

    localStorage.setItem("object", JSON.stringify(data))
    var tableData = document.querySelector(".container-two__table")

    var object = localStorage.getItem('object')
    var objectData = JSON.parse(object)
    var elements = ""

    objectData.map(record => (
        elements += `<div class="data-card">
        <p>Name : ${record.name}</p>
        <p>Age : ${record.age}</p>
        <p>Gender : ${record.gender}</p>
        <p>Course : ${record.course}</p>
        <p>Email : ${record.email}</p>
        <button class="edit" onclick={edit(${record.id})}>Edit</button>
        <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </div>`
    ))

    tableData.innerHTML = elements
}

function delet(id) {
    console.log(alert("Delete Data Successfully"))
    data = data.filter(rec => rec.id !== id)
    readAll()
}

function add() {
    
    var radio = document.getElementsByName("gender")
    for(i=0; i<radio.length; i++)
        if(radio[i].checked)
            values = radio[i].value
    var name = document.getElementById("name").value 
    var age = document.getElementById("age").value 
    var course = document.querySelector(".course").value 
    var email = document.getElementById("email").value 
    var gender = values


    var newObj = {id: idss = idss+1, name: name, age: age, gender: gender, course: course, email: email}
    data.push(newObj)

    console.log(alert("Add Data Successfully"))

    var addDatas = document.querySelector(".containers")
    addDatas.style.display = "none"

    var adddatas = document.querySelector(".addDatas")
    adddatas.style.display = "block" 

    readAll()
}

function edit(id) {

    document.querySelector(".containers_1").style.display = "block"

    var obj = data.find(rec => rec.id === id)
    document.querySelector(".id_1").value = obj.id
    document.getElementById("name_1").value = obj.name
    document.getElementById("age_1").value = obj.age
    document.querySelector(".course_1").value = obj.course
    document.getElementById("email_1").value = obj.email

}

function update() {

    

    var radio = document.getElementsByName("gender_1")
    for(i=0; i<radio.length; i++)
        if(radio[i].checked)
            valuess = radio[i].value

    var id = parseInt(document.querySelector('.id_1').value)
    var name = document.getElementById('name_1').value
    var age = document.getElementById("age_1").value
    var gender = valuess
    var course = document.querySelector(".course_1").value
    var email =  document.getElementById("email_1").value

    console.log(alert("Updated Data Successfully"))
    var index = data.findIndex(rec => rec.id === id)
    data[index] = {id, name, age, course, email, gender}
    document.querySelector(".containers_1").style.display = "none"
    readAll()
    
}

function addDatas() {
    var addDatas = document.querySelector(".containers")
    addDatas.style.display = "block"

    var adddatas = document.querySelector(".addDatas")
    adddatas.style.display = "none"

}






































