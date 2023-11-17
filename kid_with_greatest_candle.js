var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    //let i = 0;
    let temp1;
    let temp2;
    let size = candies.length;
    for (let i = 0; i < size; i++) { 
        for (let j = 0; j < size; j++) {
            temp1 = candies[i] + extraCandies;
            temp2 = candies[j]
            //candies[i] = candies[j]+extraCandies
            //if (candies[j]>= candies[j+1]) {
            if(temp1>=temp2) {
                // result.push(true);
                result[i] = true;
                console.log(result);
            }
            else{
                // result.push(false);
                result[i] = false;
                console.log(result);
                break;
            }
      //  }
    }
}
    return result;
    
    
};

let candies1 =  [1,3,9];//[2,3,5,1,3];

let extraCandies1 = 4;//3;
kidsWithCandies(candies1, extraCandies1);

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]