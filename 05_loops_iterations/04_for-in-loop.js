// For In loop is mostly used for objects
// for Object = FOR IN loop
// for arrays = FOR OF loop 

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
    //console.log(`${key} Shortcut is for ${myObject[key]}`);
}

//for in loops in Array

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
   // console.log(programming[key]);
}

// use of for in loops in MAP (map is not iterable)

// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United State")
// map.set('AU', "Australia")

// for (const key in map) {
//     console.log(key);
// }

