fetch('https://dummyjson.com/users').then( (data)=> {
    // console.log(data)

    return data.json();
} ).then( (objectData)=>{
    console.log(objectData.users[0].firstName);

    let tableData ="";
    objectData.users.map( (values,index)=>{

        tableData+= ` <tr>
        <td hidden>${values.id}</td>
        <td id="fn[${index}]">${values.firstName}</td>
        <td id="ln[${index}]">${values.lastName}</tdd=>
        <td>${values.email}</td>
        <td>${values.age}</td>
        <td><img width= 100px height= 100px src="${values.image}"></td>
        <td>${values.username}</td>
        <td>${values.password}</td> 

        <td><button onclick= "update(this)" >update</button></td>
        <td><button onclick ="remove(this)">remove</button></td>
    </tr>`

    })

    document.getElementById("tb").innerHTML = tableData;
})

function remove(x){

    x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode);   
}


function update(data) {
   
    var x = document.getElementById("update");       //for form hiding
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
    
    let row = data.parentNode.parentNode;      //dbt
    var id = row.cells[0].innerHTML;    //dbt

    var fname = row.cells[1].innerHTML;
    var lname = row.cells[2].innerHTML;

    document.getElementById('fname').value= fname;        
    document.getElementById('lname').value= lname;
    document.getElementById('id').value=id;     //important
  

 //   on submit button click

    let sb = document.getElementById("submitbtn");
        sb.onclick = function(){

            const fm = document.getElementById("formData");
            let uid = fm.elements[0].value;
           
            let updatedFirstName = document.getElementById('fname').value;
            let updatedLastName = document.getElementById('lname').value;

                console.log(updatedFirstName);  

            fetch('https://dummyjson.com/users/'+fm.elements[0].value, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                firstName: updatedFirstName,
                lastName: updatedLastName
            })
            })
            .then(res => res.json())
            .then(console.log);

            console.log(document.getElementById(`fn[${uid}]`));
            document.getElementById(`fn[${uid-1}]`).innerText = updatedFirstName;
            document.getElementById(`ln[${uid-1}]`).innerText = updatedLastName;
            // .then(console.log);  
            var x = document.getElementById("update");
            if (x.style.display !== "none") {
                x.style.display = "none";
            }
    }
 }


//  search

let fb = document.getElementById("searchbtn");
fb.onclick = function(){

    var input, filter, table, tr, td, i;
    input = document.getElementById("text");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");
    var cn = document.getElementById("afield").value;
    var ci = document.getElementById("afield").selectedIndex;

    for (var i = 0; i < tr.length; i++) {
    var tds = tr[i].getElementsByTagName("td");
    var flag = false;
    for(var j = 0; j < tds.length; j++){
      var td = tds[ci];
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        flag = true;
      } 
    }
    if(flag){
        tr[i].style.display = "";
    }
    else {
        tr[i].style.display = "none";
    }
  }
}