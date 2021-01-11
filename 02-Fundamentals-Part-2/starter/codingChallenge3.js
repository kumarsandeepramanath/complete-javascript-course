const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * 2)
        console.log(`Mark BMI : ${this.bmi}`)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * 2)
        console.log(`John BMI : ${this.bmi}`)

        return this.bmi
    }
}

const markBMI = mark.calcBMI()
const johnBMI = john.calcBMI()

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
}
else {
    console.log(`John's BMI (${john.bmi}) is higher than Mark's's (${mark.bmi})`)
}

