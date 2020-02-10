const searchFun = () =>{
    let filter = document.getElementById("myInput").value.toUpperCase();
    let myteble = document.getElementById("myTable");
    let tRow = myteble.getElementsByTagName("tr");
    var i;
    for(i=1 ; i<tRow.length; i++){
      let tData = tRow[i].getElementsByTagName("td")[0];

      if(tData){
        let textValue = tData.textContent || tData.innerHTML;

        if (textValue.toUpperCase().indexOf(filter) > -1){
           tRow[i].style.display = "";
        }
        else{
          tRow[i].style.display = "none";
        }
      }
    }
    
  }