// const bill = 275
// const bill = 40
// const bill = 430
function calculateTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill)
    return tip
}

const tip = console.log(calculateTip(100))

const bills = [125, 555, 44]
const tip1 = calculateTip(bills[0])
console.log(`Tip 1 is ${tip1}`)
const tip2 = calculateTip(bills[1])
console.log(`Tip 2 is ${tip2}`)
const tip3 = calculateTip(bills[2])
console.log(`Tip 3 is ${tip3}`)


const tips = [tip1, tip2, tip3]
const total = [(bills[0] + bills[1] + bills[2]), (tip1 + tip2 + tip3)]
console.log(`Total is ${total}`)

const jonas = {
    firstName: 'Jonas',
    friends: ['Mickel', 'David', 'William'],
    birthYear: 1989,
    calcAge: function () {
        // return 2021 - this.birthYear
        this.age = 2021 - this.birthYear
        return this.age
    },
    profession: 'teacher'
};

console.log(`Jonas has ${jonas['friends'].length}, and his best friend is ${jonas['friends'][0]}`)
console.log(`Age is ${jonas.calcAge()}`)
console.log(`Age is ${jonas.age}`)
console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.profession}`)