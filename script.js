const form = document.querySelector("form");
iField = form.querySelector(".idNumber"),
iInput = iField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault();
  (iInput.value == "") ? iField.classList.add("shake", "error") : CheckID();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ 
    iField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  iInput.onkeyup = ()=>{CheckID();}
  pInput.onkeyup = ()=>{checkPass();}

  function CheckID(){
    if(iInput.value == ""){
      iField.classList.add("error");
      iField.classList.remove("valid");
    }else{ 
      iField.classList.remove("error");
      iField.classList.add("valid");
    }
  }

  function checkPass(){
    if(pInput.value == ""){
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  
  if(!iField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}
function editData(button){
  let row = button.parentNode.parentNode;
  let mytbl = document.querySelector("table");
  let scoreCell = row.cells[2];
  let scoreInput = prompt("نمره جدید را وارد کنید :", scoreCell.innerHTML);
  scoreCell.innerHTML = scoreInput;
}
