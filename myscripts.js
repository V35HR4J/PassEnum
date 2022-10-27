pass='';
pass_list = ["1","321","@123","123","1234","@1234","12345","123456","1234567","1234568"]
var arrayLength = pass_list.length;
function printName() {
    firstName = document .getElementById("first").value;
    upper=firstName[0].toUpperCase()+firstName.slice(1);
    lower=firstName[0].toLowerCase()+firstName.slice(1);
    replace=firstName.replace(/a/g, "@");
    if(firstName.includes("a")){
        replaced=firstName.replace(/a/gi, "@");
        for (var i = 0; i < arrayLength; i++) {
            pass+=upper+pass_list[i]+'<br>';
            pass+=lower+pass_list[i]+'<br>';
            pass+=replaced+pass_list[i]+'<br>';
        }
    }
    else{
        for (var i = 0; i < arrayLength; i++) {
            pass+=upper+pass_list[i]+'<br>';
            pass+=lower+pass_list[i]+'<br>';
    }
}
hello=document.querySelector('#wordlist');
hello.innerHTML = pass;
}

function copyFunc(){
    var range = document.createRange();
    range.selectNode(document.getElementById("wordlist"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert('Copied to Clipboard')
}
    
