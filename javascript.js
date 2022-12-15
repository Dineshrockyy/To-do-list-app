

document.getElementById("add").addEventListener("click",add);
let count=0;
let arr=[];
let bool=false;
function add(){
    let input=document.getElementById("textbox").value;

    if(input==""){
        document.getElementById("para").innerHTML="Sorry! Our Input Field Can't Be Empty";
        document.getElementById("para").style.display="block";
        document.getElementById("para").style.color="red";
    }else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]==input){
                bool=true;
                document.getElementById("para").innerHTML="Alredy This Plan In The List";
                document.getElementById("para").style.display="block";
                document.getElementById("para").style.color="red";
            } 
        }
    }
    if(input != "" && bool==false){
    let newelement=document.createElement("div");
    let node=document.createTextNode(input);
    newelement.appendChild(node);
    let element=document.getElementById("con");
    element.appendChild(newelement);
    newelement.classList.add("show");
    let divvalue=newelement.id='div'+count;


    let editelement=document.createElement("button");
    let nodeedt=document.createTextNode("Edit");
    editelement.appendChild(nodeedt);
    element.appendChild(editelement);
    editelement.classList.add("edit");
    let editvalue=editelement.id='editbtn'+count;
    editelement.value=input;


    let delelement=document.createElement("button");
    let nodedel=document.createTextNode("Del");
    delelement.appendChild(nodedel);
    element.appendChild(delelement);
    delelement.classList.add("icon");
    let delvalue=delelement.id='delbtn'+count;
    delelement.value=input;
    //alert(input);
    
    editelement.value1=divvalue;
    editelement.value2=delvalue;

    delelement.value1=divvalue;
    delelement.value2=editvalue;

    arr[count]=document.getElementById("textbox").value;
    document.getElementById("textbox").value="";
    count++;

    document.getElementById("para").innerHTML="Your Plan Successfully Added";
    document.getElementById("para").style.display="block";
    document.getElementById("para").style.color="green";
    }
    bool=false;
    
}
let container=document.querySelector(".con");
container.addEventListener("click",function (e){
    if(e.target.classList.contains("edit") || e.target.classList.contains("icon")){
        document.getElementById("textbox").value=e.target.value;

        if(e.target.classList.contains("icon")){document.getElementById("textbox").value="";}

        let divremove=document.getElementById(e.target.value1);
        divremove.parentNode.removeChild(divremove);

        let delremove=document.getElementById(e.target.value2);
        delremove.parentNode.removeChild(delremove);

        e.target.parentNode.removeChild(e.target);
        for(let i=0;i<arr.length;i++){
            if(arr[i]==e.target.value){
                arr.splice(i,1);
                console.log(i);
            }
        }
        console.log(arr);
        if(e.target.classList.contains("icon")){
            document.getElementById("para").innerHTML="Your Plan Successfully Delete!";
            document.getElementById("para").style.display="block";
            document.getElementById("para").style.color="red";
        }else{
            document.getElementById("para").style.display="none";
        }
    }
});
    