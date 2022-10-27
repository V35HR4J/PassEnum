pass=[];
pass_list = ["1","321","@123","123","1234","@1234","12345","123456","1234567","1234568"]
var arrayLength = pass_list.length;
function printName() {
    hello=document.querySelector('#wordlist');
    firstName = document .getElementById("first").value;
    upper=firstName[0].toUpperCase()+firstName.slice(1);
    lower=firstName[0].toLowerCase()+firstName.slice(1);
    replace=firstName.replace(/a/g, "@");
    if(firstName.includes("a")){
        replaced=firstName.replace(/a/gi, "@");
        for (var i = 0; i < arrayLength; i++) {
            pass.push(upper+pass_list[i]);
            pass.push(lower+pass_list[i]);
            pass.push(replaced+pass_list[i]);
        }
    }
    else{
        for (var i = 0; i < arrayLength; i++) {
            pass.push(upper+pass_list[i]);
            pass.push(lower+pass_list[i]);
    }
}

pass.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item
    hello.append(p)
})

}

// TODO:
// function copytc() {
//     let text = quoteText.textContent;
//     navigator.clipboard.writeText(`${text}`);
// }
    