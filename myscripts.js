pass = [];
pass_list = ["1", "321", "@123", "123", "1234", "@1234", "12345", "123456", "1234567", "1234568"]
var arrayLength = pass_list.length;

//Wave the word.
function word_updown() {
    pass = [];
    word = document.getElementById("first").value;
    word = word.toLowerCase();
    word = word.split('');
    for (i in word) {
        word[i] = word[i].toUpperCase();
        letter = word.join('');
        wordlist_maker(letter);
        word[i] = word[i].toLowerCase();
    }

    printName();
}

function wordlist_maker(word) {
    firstName = word || document.getElementById("first").value;
    first_letter_uppercase = firstName[0].toUpperCase() + firstName.slice(1);
    first_letter_lowercase = firstName[0].toLowerCase() + firstName.slice(1);
    if (firstName.includes("a")) {
        replaced = firstName.replace(/a/gi, "@");
        for (var i = 0; i < arrayLength; i++) {
            pass.push(first_letter_uppercase + pass_list[i]);
            pass.push(first_letter_lowercase + pass_list[i]);
            pass.push(replaced + pass_list[i]);
        }
    }
    else {
        for (var i = 0; i < arrayLength; i++) {
            pass.push(first_letter_uppercase + pass_list[i]);
            pass.push(first_letter_lowercase + pass_list[i]);
        }
    }
}
// prints all password in pass array to html element
function printName() {
    var textarea = document.getElementById('wordlist');
    textarea.value = '';
    hello = document.querySelector('#wordlist');
    hello.innerHTML = "";
    pass.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item
        hello.append(p);
        textarea.value += item + '\n';
    })
}


// copy to clipboard
function copyFunc() {
    document.querySelector("textarea").select();
    document.execCommand('copy');
    alert('Copied to Clipboard')

}

