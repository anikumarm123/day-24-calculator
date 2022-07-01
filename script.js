var display = [];
var num = "";
function fun(no) {
    document.getElementById("ip").value += no;
   num += no;
}
function fun_1(oparator) {
    document.getElementById("ip").value += oparator;
    if (num != '') {
        display.push(num);
    }
    num = '';
    display.push(oparator);
}
// function equal(){
//     document.getElementById("ip").value=eval(document.getElementById("ip").value);
// }
 

function equal() {
    display.push(num);
    var x = [];
    var optr; 
    for (i = 0; i < display.length; i++) {
        switch (display[i]) {
           case '+':
              if(x.length == 0){
                optr =parseFloat( display[i-1])+parseFloat(display[i+1]);
                x.push(optr);
              }
              else{
                optr = x[0]+parseFloat(display[i+1]);
                x=[];
                x.push(optr);
              }
            break;
            case '-':
              if(x.length == 0){
                optr =parseFloat( display[i-1])-parseFloat(display[i+1]);
                x.push(optr);
              }
              else{
                optr = x[0]-parseFloat(display[i+1]);
                x=[];
                x.push(optr);
              }
            break;
            case '*':
              if(x.length == 0){
                optr =parseFloat( display[i-1])*parseFloat(display[i+1]);
                x.push(optr);
              }
              else{
                optr = x[0]*parseFloat(display[i+1]);
                x=[];
                x.push(optr);
              }
            break;
            case '/':
              if(x.length == 0){
                optr =parseFloat( display[i-1])/parseFloat(display[i+1]);
                x.push(optr);
              }
              else{
                optr = x[0]/parseFloat(display[i+1]);
                x=[];
                x.push(optr);
              }
            break;
           

    }
    }

    document.getElementById('ip').value=optr;
    num = optr.toString();
    display=[];
}

function clear1() {
    num='';
    display=[];
    document.getElementById('ip').value=display
}






