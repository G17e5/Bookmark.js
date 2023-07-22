var nameInput =document.getElementById("bookmarkNameId");
var urlInput =document.getElementById("bookmarkURLId");

var cartonaa; 
if(localStorage.getItem("ouerStorge")==null)
{
    cartonaa=[]
}
else
{
 cartonaa=JSON.parse(localStorage.getItem("ouerStorge"));
 display();

}


function submitBookmark()
{
    var objectofarray ={
        bookmarkNameId:nameInput.value,
        bookmarkURLId:urlInput.value,
       
    }

    cartonaa.push(objectofarray)
    localStorage.setItem("ouerStorge",JSON.stringify(cartonaa));
    display();
  clearInputs()
}


function clearInputs()
{
    nameInput.value="";
    urlInput.value="";
    
}



function display()
{

    var hasalah =``;
    for(var i=0;i<cartonaa.length;i++)
    {


        hasalah +=  `<tr>
        <td>${i+1}</td>
        <td>${cartonaa[i].bookmarkNameId}</td>  
        <td>
        <button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i><a href="${cartonaa[i].bookmarkURLId}">visit</a></button>
        </td>        
                        <td>
                            <button onclick="deleteInput(${i})" class="btn btn-delete pe-2">
                            <i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
                        </td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML=hasalah;
}

function deleteInput(pIndex)
{
    cartonaa.splice(pIndex,1);
    display();
    localStorage.setItem("ouerStorge",JSON.stringify(cartonaa));
}