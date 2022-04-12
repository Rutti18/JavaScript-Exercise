reverse_a_number(); 
sort_alphabet();
capitalise_each_word('the quick brown fox'); 
find_is_prime(5); 
makeUnique('thequickbrownfoxjumpsoverthelazydog'); 
secondLowest_Highest(); 

function reverse_a_number()
{
    let  x = 349210;
	x = x.toString();
    var reversed = x.split("").reverse().join("");
    console.log(reversed)
}

function sort_alphabet(){

    var str = 'webmaster';
    str = str.split("");
    str = str.sort();
    str = str.sort( case_insensitive_comp )
    str = str.join("");
    console.log(str)
}

function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

function capitalise_each_word(text){
    const str = text;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    console.log(str2);
}

function find_is_prime(val){
    let value = parseInt(val);
    let isPrime = true;

    if (value === 1) {
        console.log("1 is neither prime nor composite value.");
    } else if (value > 1) {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(value,'is a prime value');
        } else {
            console.log(value,'is a not prime value');
        }
    }else {
        console.log("The value is not a prime number.");
    }
}

function makeUnique(str) {
    var uniqueStr =  String.prototype.concat(...new Set(str))
    console.log(uniqueStr);
}
  
function secondLowest_Highest(){
    var array = [1,2,3,4,5];
    array = array.sort();
    secondLowest = '';
    var countForLowest = 1; 
    for(let i=0;i<array.length;i++){
        if(array[i] < array[i+1] ){
            if(countForLowest == 2){
             secondLowest = array[i];
             break;
            }
            countForLowest = countForLowest+1;
        }
    }

    reversed_array = array.reverse();

    secondGreatest = '';
    var countForGreatest = 1; 
    for(let i=0;i<reversed_array.length;i++){
        if(reversed_array[i] > reversed_array[i+1] ){
            if(countForGreatest == 2){
                secondGreatest = reversed_array[i];
             break;
            }
            countForGreatest = countForGreatest+1;
        }
    }

    console.log(secondLowest,secondGreatest);
}