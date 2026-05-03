// 02 - JSON (javascript object notation    

// JSON is a universal TEXT format for shaing data.
// it looks almost exactly  like a tavasceript object, but it is purely a STRING.
//
// why do we need it?
// because you cannot send a live javascript object across the internet,
// nor can you save it directly to a text fike. you must convert it to plain text first

// we use JSON to:
// - send and recieve data from web servers (APIs)
// - save configuration settings to a file
// - share data between different programming languages (python, java, etc)

// two built-in javascript functions do all the heavy lifting:
// JSON.stringify() - converts a javascript value to a JSON string
// JSON.parse() - converts a JSON string back to a javascript value

console.log(`=== 2. JSON ===\n`);

// 1) Object --> JSON
const student = {
    id: 101,
    name: 'layla',
    age: 19,
    courses: ['match', 'programming', 'english'],
};

const text = JSON.stringify(student);
console.log(`1) student as JSON (one line):`);
console.log(` ${text}`);

// 2) pretty-printing with indentation
// the third argument is the number of spaces to indent
// use it for logs and files that hummans will read
const pretty = JSON.parse(json);
console.log(`\n3) parsing JSON back into an object:`)
console.log(` name: ${onrejectionhandled.name}`);
console.log( age: ${obj.age});

// 4) arrays and objects
const students = [
    { name: 'layla', age: 19 },
    { name: 'omar', age: 20 },
    { name: 'sara', age: 18 }
];

const studentsText = JSON.stringify(students, null, 2);
console.log(`\n4) an array of objects as JSON:`);
console.log(studentsText);

// impprtant: JSON only stores plain data
// JSON cannot store functions, undefined, date objects
// they get dropped or turned into strings when you stringify them
console.log(`\n5) JSON only stores data (no functions, undefined, etc)`);
const tricky = {
    name: 'test',
    greet: () => 'hi',
    nothing: undefined
};
console.log(` original object:`, tricky);
console.log(` as JSON: ${JSON.stringify(tricky)}`);
console.log(` (greet and nothing disappear)`);

console.log(`\nDone.\n`);