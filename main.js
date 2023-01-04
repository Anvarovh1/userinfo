const users = {
    1: {
        name: prompt(`1-Foydanauvching ismini kiriting`),
        age: prompt(`1-Foydanauvching yoshini kiriting`)
    },
    2: {
        name: prompt(`2-Foydanauvching ismini kiriting`),
        age: prompt(`2-Foydanauvching yoshini kiriting`)
    },
    3: {
        name: prompt(`3-Foydanauvching ismini kiriting`),
        age: prompt(`3-Foydanauvching yoshini kiriting`)
    },
}
for (const key in users){
    for (const key2 in users[key]) {
        let user1 = `Foydanauvchi 1  \nismi ${users[1].name} \nyoshi ${users[1].age}`
        let user2 = `\nFoydanauvchi 2  \nismi ${users[2].name} \nyoshi ${users[2].age}`
        let user3 = `\nFoydanauvchi 3  \nismi ${users[3].name} \nyoshi ${users[3].age}`
        console.log(user1,user2,user3)
    }
}
console.log(users)