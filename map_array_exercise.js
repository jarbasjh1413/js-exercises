/* exercise 1
const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const setNewList = listArray => {

    const newList = {
        name: listArray.name,
        sector: (listArray.vip) ? 'Black' : 'Green'

    }
    return newList
}


const newlist = list.map(setNewList)

console.log(list)
console.log(newlist)

--------------------------------------------------

exercise 2

const stundents = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const mediaVerify = grades => {
    const stundents = {
        name: grades.name,
        finalResult: grades.testGrade >= 7 ? 'approved' : 'disapproved'
    }

    return stundents

}

stundentsResult = stundents.map(mediaVerify);
console.log(stundents)
console.log(stundentsResult)

*/