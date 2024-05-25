function confirmEnding(str, target) {
    // find the point at which you start comparing
    var start = str.length - target.length;

    // portion of str 
    var endingStr = str.substring(start);

    // logical action 
    return endingStr === target;
}

confirmEnding("Matrix", "rix");