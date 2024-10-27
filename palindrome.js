// function palindrome(str){
//     const pali = str.split("").reverse().join("");
//     return pali === str
// }

function stars(){

    const n = parseInt(document.getElementById('input').value);
    let result = '';


for (let i = 1; i <= n; i++) { 
    let str = "*"; 
    let space = ' '; 
    result +=space.repeat((n - i)) + str.repeat(i * 2 - 1)+'\n'; 
} 
for (let i = n - 1; i >= 1; i--) { 
    let str = "*"; 
    let space = ' '; 
    result+=space.repeat((n - i)) + str.repeat(i * 2 - 1) +'\n'; 
}

document.getElementById('out').textContent = result;

}