function makeLine(size) {
    //return line with exaxtly size hashe
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}
//console.log(makeLine(5));

function makeSquare(size){
    //return 5 rows of makeLine
    let square = "";
    for (let i = 0; i < size; i++) {
        square += (makeRectange(4,4)) + '\n';
    }
      return square;  
    }
//console.log(makeSquare(3));

function makeRectange(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
//console.log(makeRectange(5,3));

function makeDownStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n')
    }
    return stairs.slice(0, -1)
}
//console.log(makeDownStairs(5))

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
        for (let i = 0; i < numSpaces; i++) {
        spaces += (" ");
}
    return spaces + makeLine(numChars) + spaces;
}
//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i -1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}
//console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = ""
    for (let i = 0; i < height; i++) {
        diamond = (makeIsoscelesTriangle(height) + '\n' + reverse(makeIsoscelesTriangle(height)))
    }
    return diamond;
}
console.log(makeDiamond(5));