function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}


function woodCalculator(chair, table, bed){
    var chairWood  = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}


function brickCaculator(floor){
    if(floor >=1 && floor <= 10){
        firstCount = 15000 * floor;
        console.log(firstCount);
    }
    else if(floor >=11 && floor <= 20){
        remainingFloor = floor - 10;
        brick = 12000 * remainingFloor;
        firstCount = 15000 *10;
        secondCount = firstCount + brick;
        console.log(secondCount);
    }
    else if(floor >= 21){
        restOfFloor = floor - 20;
        brick_1 = 10000 * restOfFloor;
        firstCount = 15000 * 10;
        secondCount = 12000 * 10;
        thirdCount = firstCount + secondCount +  brick_1;
        console.log(thirdCount);
    }
}


function tinyFriend(names){
    minLength = names[0].length;
    for(var i = 0; i<names.length; i++){
        var minimum = names[i].length;
        if(minimum < minLength ){
            minLength = minimum;
            var minName = names[i];
        }
    }
    return minName;
}