//function for naive search
function naiveSearch(longString, subString){
    //init counter;
    var count = 0;
    //loop through longer string
    for(var i = 0; i < longString.length; i++){
        //loop through shorter string
        for(var j = 0; j < subString.length; j++){
            //check if no match
            if(subString[j] !== longString[i+j]){
                //break out of the substring and start loop again
                break;
            }
            //check if you have reached end of substring
            if(j === subString.length - 1){
                //means match(es) was(were) found
                count++;
            }
        }
    }
    return count;//count will be 0 if substring not found

}

console.log(naiveSearch("foodies", "uy"));