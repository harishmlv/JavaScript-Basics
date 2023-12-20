// This all are Array specific Loops

// For of loop
// [ "", "", ""]
// [ {}, {}, {} ]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//*********   MAP   ******** */

// for of loop on map

const map = new Map()
map.set('IN', "India")
map.set('US', "United State")
map.set('AU', "Australia")

//console.log(map);

for (const [key, value] of map) {
    // console.log(key, '=', value);
}

// For of loop on object

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spidermen'
}

// for (const [key, value] of myObject) {
//     console.log(key, '=', value);
// } // output ERROR : myObject is not iterable
