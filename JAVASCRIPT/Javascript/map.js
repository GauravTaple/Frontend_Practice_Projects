const map = new Map();

map.set("In","India");
map.set("Fr","France");
map.set("Us","United States");
map.set("My","Malaysia");
map.set("In","India");

console.log(map,"-------------------------------------");

for (const [key,value] of map) {
    console.log("Key : -----"+key);
    console.log(key +":-" + value);
    
}
