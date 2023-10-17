function convert(){ 
    let celciusval=(document.getElementById("input").value);
    let farenheitval= (celciusval*9)/5+32;
    let convert=document.getElementById("result");
convert.innerHTML= farenheitval.toFixed(0)+"farenheit";
}