const marvelheros=["thor","ironman","captain America"]
const dcheros=["superman","flash0","aquaman"]
marvelheros.push(dcheros);

// console.log(marvelheros);
// console.log(marvelheros[3][1]);
// marvelheros.concat(dcheros)
// console.log(marvelheros);
const all_new_heros=[...marvelheros, ...dcheros] //spread Operator

console.log(all_new_heros);
 const another_array=[1,2,3,[2,3,5],[6,5,4,[7,54,5]]]
 const real_another_array=another_array.flat(Infinity
 )
 console.log(real_another_array);
 
 console.log(Array.isArray("thrhgfb")); // false
 console.log(Array.from("ssghwrhh")) // COnvert String into Array
 console.log(Array.from({name:"Pushkar"})); //interesting
 let sc1=232
 let sc2=34
 let sc3=234
 console.log(Array.of(sc1,sc2,sc3));
 
 


