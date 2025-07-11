let myMap = new Map()
myMap = new Map ([
    ["name", "hugo"],       
    ["age", 37],
    ["email", "hugo@gmail.com"],
    ["city", "lima"]
])

console.log(myMap)


myMap.set("direccion", "av jose marti 123")
console.log(myMap)


myMap.delete("city")
console.log(myMap)
