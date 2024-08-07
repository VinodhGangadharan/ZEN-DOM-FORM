
// creating dom elements for Form
const div = document.createElement("div");

const div1 = document.createElement("div");
div1.className ="container";

const div2 = document.createElement("div");
div2.className="row";

const div3 = document.createElement("div");
div3.className="col-4";

const div4 = document.createElement("div");
div4.className="col-8";

const table = document.createElement("table");
table.className="table";

const h1= document.createElement("h1");
h1.innerHTML="Form Submission";
h1.id="title"

function label_create (tagname, attrname,attrvalue,content)
{
    let lab_ele= document.createElement(tagname);
    lab_ele.setAttribute(attrname,attrvalue);
    lab_ele.innerHTML = content;
    return lab_ele;
}

function br_Create()
{
    let break_ele = document.createElement("br");
    return break_ele;
}


function input_create (tagname, attrname,attrvalue,attrname1,attrvalue1)
{
    let input_ele= document.createElement(tagname);
    input_ele.setAttribute(attrname,attrvalue);
    input_ele.setAttribute(attrname1,attrvalue1);
    return input_ele;
    
}

const form = document.createElement("form");
form.id = "form";

const firstname = label_create("label","for","firstname","First Name <b>*</b>");
firstname.className="form-label";
const lastname = label_create("label","for","lastname","Last Name <b>*</b>");
lastname.className="form-label";
const email = label_create("label","for","email","Email");
email.className="form-label";
const address = label_create("label","for","address2","Address");
address.className="form-label";
const pincode = label_create("label","for","pincode","Pin Code <b>*</b>");
pincode.className="form-label";
const state = label_create("label","for","state","State");
state.className="form-label";
const country = label_create("label","for","country","Country");
country.className="form-label";

const gender = label_create("label","for","gender","Gender");
gender.className="form-label";

const male = label_create("label","for","male","Male");
male.className="form-label";
male.id="maleR";

const female = label_create("label","for","female","Female");
female.className="form-label";
female.id="femaleR";

const choice = label_create("label","for","choice","Choice of Food: <b>(must choose atleast 2 out of 5 options) *</b>");
gender.className="form-label";

const message= document.createElement("span");
message.id="sudo";

const choice1 = label_create("label","for","northindian","North Indian");
choice1.className="form-label";
choice1.id="choice1";

const choice2 = label_create("label","for","southindian","South Indian");
choice2.className="form-label";
choice2.id="choice2";

const choice3 = label_create("label","for","chinese","Chinese");
choice3.className="form-label";
choice3.id="choice3";

const choice4 = label_create("label","for","japanese","Japanese");
choice4.className="form-label";
choice4.id="choice4";

const choice5 = label_create("label","for","seafood","Sea Food");
choice5.className="form-label";
choice5.id="choice5";

// Line break function
const line_break1=  br_Create();
const line_break2=  br_Create();
const line_break3=  br_Create();
const line_break4=  br_Create();
const line_break5=  br_Create();
const line_break6=  br_Create();
const line_break7=  br_Create();
const line_break8=  br_Create();
const line_break9=  br_Create();
const line_break10=  br_Create();
const line_break11=  br_Create();
const line_break12=  br_Create();
const line_break13=  br_Create();
const line_break14=  br_Create();
const line_break15=  br_Create();
const line_break16=  br_Create();
const line_break17=  br_Create();
const line_break18=  br_Create();
const line_break19=  br_Create();
const line_break20=  br_Create();
const line_break21=  br_Create();
const line_break22=  br_Create();
const line_break23=  br_Create();
const line_break24=  br_Create();
const line_break25=  br_Create();
const line_break26=  br_Create();
const line_break27= br_Create();
const line_break28= br_Create();

const fnamediv =document.createElement("div");
fnamediv.className="form-group";

const lnamediv =document.createElement("div");
lnamediv.className="form-group";

const pindiv = document.createElement("div");
pindiv.className="form-group";

const addressdiv = document.createElement("div");
addressdiv.className="form-group";

const firstname_input = input_create ("input","type","text","id","first-name");
firstname_input.className="form-control";
firstname_input.required=true;
firstname_input.setAttribute("placeholder","First Name");
const lastname_input = input_create ("input","type","text","id","last-name");
lastname_input.className="form-control";
lastname_input.required=true;
lastname_input.setAttribute("placeholder","Last Name");
const email_input = input_create ("input","type","email","id","email");
email_input.className="form-control";
email_input.setAttribute("placeholder","Email");
const address_input = input_create ("textarea","type","text","id","address");
address_input.className="form-control";
address_input.setAttribute("placeholder","Address");
const pincode_input = input_create ("input","type","text","id","pincode");
pincode_input.className="form-control";
pincode_input.required=true;

const gender_input = input_create ("input","type","radio","id","male");
gender_input.className="form-check-input";
gender_input.name="gender";
gender_input.value="Male";
const gender_input1 = input_create ("input","type","radio","id","female");
gender_input1.className="form-check-input";
gender_input1.name="gender";
gender_input1.value="Female";


const choice_input1 = input_create ("input","type","checkbox","id","northindian");
choice_input1.className="form-check-input";
choice_input1.name="choicegroup";
choice_input1.value="NorthIndian";
choice_input1.required=true;


const choice_input2 = input_create ("input","type","checkbox","id","southindian");
choice_input2.className="form-check-input";
choice_input2.name="choicegroup";
choice_input2.value="SouthIndian";
choice_input2.required=true;

const choice_input3 = input_create ("input","type","checkbox","id","chinese");
choice_input3.className="form-check-input";
choice_input3.name="choicegroup";
choice_input3.value="Chinese";
choice_input3.required=true;

const choice_input4 = input_create ("input","type","checkbox","id","japanese");
choice_input4.className="form-check-input";
choice_input4.name="choicegroup";
choice_input4.value="Japanese";
choice_input4.required=true;

const choice_input5 = input_create ("input","type","checkbox","id","seafood");
choice_input5.className="form-check-input";
choice_input5.name="choicegroup";
choice_input5.value="SeaFood";
choice_input5.required=true;

pincode_input.setAttribute("placeholder","Pin Code");
const state_input = input_create ("input","type","text","id","state");
state_input.className="form-control";
state_input.setAttribute("placeholder","State");
const country_input = input_create ("input","type","text","id","country");
country_input.className="form-control";
country_input.setAttribute("placeholder","Country");

const submit = document.createElement("Button");
submit.innerHTML = "Submit";
submit.className ="btn btn-primary";
submit.id="submit";
submit.addEventListener("click",get_values);


// DOM Table creation

function create_th(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}
function create_tr(){
let row = document.createElement("tr")
return row;
}
function create_td(tagname,content){
let ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}
// for thead
const thead =  document.createElement("thead");
const thead_tr = create_tr();
const th2 = create_th("th","scope","col","First Name");
const th3 = create_th("th","scope","col","Last Name");
const th4 = create_th("th","scope","col","Email");
const th5 = create_th("th","scope","col","Address");
const th6 = create_th("th","scope","col","Pin Code");
const th7 = create_th("th","scope","col","Gender");
const th8 = create_th("th","scope","col","Food");
const th9 = create_th("th","scope","col","Sate");
const th10 = create_th("th","scope","col","Country");
thead_tr.append(th2,th3,th4,th5,th6,th7,th8,th9,th10);
thead.append(thead_tr);

// for tbody
const tbody =  document.createElement("tbody");
table.append(thead,tbody);

const h1c = document.createElement("h1");
h1c.innerHTML= "Temporary Database";
h1c.id="title2"
div4.append(h1c,line_break26,table);

const description =document.createElement("p");
description.id = "description";
description.innerText=" A form created using HTML, CSS and DOM";

fnamediv.append(firstname,line_break1,firstname_input);
lnamediv.append(lastname,line_break3,lastname_input);
pindiv.append(pincode,line_break9,pincode_input);
addressdiv.append(address,line_break7,address_input);

// Append form elements
form.append(h1,description,fnamediv,line_break2,lnamediv,
    line_break4,email,line_break5,email_input,line_break6,addressdiv,
    line_break8,pindiv,
    line_break14,gender,line_break15,gender_input,male,gender_input1,female,
    line_break16,line_break28,choice,line_break23,message,
    line_break17,choice_input1,choice1,line_break18,
    choice_input2,choice2,line_break19,
    choice_input3,choice3,line_break20,
    choice_input4,choice4,line_break21,
    choice_input5,choice5,line_break22,
    line_break10,state,line_break11,state_input,
    line_break12,country,line_break13,country_input,
    line_break24,submit,line_break25);

    div3.append(form);

div2.append(div3,div4);

div1.append(div2);

div.append(div1)

document.body.append(div);

// Get form values
function get_values()
{
    document.documentElement.scrollTop = 0;   

   let fname = document.getElementById("first-name").value;
   let lname = document.getElementById("last-name").value;
   let email1 = document.getElementById("email").value;
   let add = document.getElementById("address").value;
   let pn = document.getElementById("pincode").value;
   let state1 = document.getElementById("state").value;
   let country1 = document.getElementById("country").value;

   let countr=0;
   let radiob = document.getElementsByName('gender');
let res="";
   for(let i=0; i<radiob.length;i++)
   
    {
        if(radiob[i].checked)
        {
            countr=countr+1;
            res= radiob[i].value;
        }
    }

   let checkb = document.getElementsByName('choicegroup');

   let result = "";
   let count=0;
   for(let i=0; i<checkb.length;i++)
   {
    if(checkb[i].checked)
    {
        count=count+1;
        result += checkb[i].value + " ";
    }
   } 
let req =0;
  if(fname==""||lname==""||pn=="")
   {
    req=1;
   }

   if(count<=1)
    {
     document.getElementById("sudo").innerText = 
     "Select atleast 2 food choices !";
    }
    else
    {
        document.getElementById("sudo").innerText = "";
    }

if(count>=2 && req==0)
{
    document.getElementById("sudo").innerText = "";
    
   let tbody_tr = create_tr();
   //append values to table
let td2 = create_td("td",fname);
let td3 = create_td("td",lname);
let td4 = create_td("td",email1);
let td5 = create_td("td",add);
let td6 = create_td("td",pn);
let td7 = create_td("td",res);
let td8 = create_td("td",result);
let td9 = create_td("td",state1);
let td10 = create_td("td",country1);

tbody_tr.append(td2,td3,td4,td5,td6,td7,td8,td9,td10);
tbody.append(tbody_tr);
document.getElementById("first-name").value='';
document.getElementById("last-name").value='';
document.getElementById("email").value='';
document.getElementById("address").value='';
document.getElementById("pincode").value='';
document.getElementById("state").value='';
document.getElementById("country").value='';

for(let j=0; j<checkb.length;j++)
    {
     if(checkb[j].checked)
     {
        checkb[j].checked=false;
     }
    }
    for(let k=0; k<radiob.length;k++)
   
        {
            if(radiob[k].checked)
            {
                radiob[k].checked=false;
            }
        }

document.getElementsById("northindian").checked=false;
document.getElementsById("southindian").checked=false;
document.getElementsById("chinese").checked=false;
document.getElementsById("japanese").checked=false;
document.getElementsById("seafood").checked=false;
document.getElementsById("male").checked=false;
document.getElementsById("female").checked=false;

    }
 
}

