const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remainingCount = document.getElementById('remaining-counter');


let char = 0;

const updatecounter= () => {
    userChar = charVal.value.length;

    totalCount.innerText = userChar;
    remainingCount.innerText= 150-userChar;

}

charVal.addEventListener('keyup' ,() => updatecounter());

//Copy the text which is in clipboard

const copyText = () => {
    //when we click on copyText button then it select the words that write on clipboard.
    charVal.select();
    //It also select content or words that you written on clipboard it is for mobile.
    charVal.setselectionRange(0,9999); 
    //This method actually copy the content or words that you selected using select() method.
    navigator.clipboard.writeText(charVal.value);
}