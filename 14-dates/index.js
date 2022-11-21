const data = new Date(2022, 1, 20, 13, 45, 40, 2)

// console.log(data)
// console.log(new Date('2021-01-01'))

const aniversario = "05/03/1985"
const partesData = aniversario.split('/')
// console.log(new Date(partesData[2], Number(partesData[1]) - 1, partesData[0]))

// console.log('data.toString()', data.toString())
// console.log('data.toTimeString()', data.toTimeString())
// console.log('data.toUTCString()', data.toUTCString())
// console.log('data.toDateString()', data.toDateString())
// console.log('data.toISOString()', data.toISOString())
// console.log('data.toLocaleString()', data.toLocaleString())
// console.log('data.toLocaleDateString()', data.toLocaleDateString())
// console.log('data.toLocaleTimeString()', data.toLocaleTimeString())

// console.log(data.toLocaleString('pt-BR'))
// console.log(data.toLocaleDateString('pt-BR'))
// console.log(data.toLocaleTimeString('pt-BR'))

// console.log(data.getDate())

data.setDate(5)

// console.log(data.getDate())

let novaData = new Date()
// console.log(novaData)
novaData.setDate(novaData.getDate() + 3)
// console.log(novaData)

novaData.setMonth(novaData.getMonth() + 3)
// console.log(novaData)

const compararDatas = (data1, data2) => {

    let timestamp1 = data1.getTime()
    let timestamp2 = data2.getTime()

    const formatarData = (dataParaFormatar) => {
        return dataParaFormatar.toLocaleDateString('pt-BR')
    }

    if (timestamp1 < timestamp2) {
        // console.log(`${formatarData(data1)} é menor que ${formatarData(data2)}`)
    } else if (timestamp1 > timestamp2) {
        // console.log(`${formatarData(data1)} é maior que ${formatarData(data2)}`)
    } else {
        // console.log('São iguais')
    }
}

compararDatas(new Date(2022, 1, 1), new Date(2022, 3, 5))
compararDatas(new Date(2022, 9, 1), new Date(2022, 3, 5))
compararDatas(new Date(2022, 3, 5), new Date(2022, 3, 5))

// date-fns

const dateFns = require('date-fns')

novaData = new Date()

console.log(dateFns.format(novaData, "dd 'de' MMMM yyyy HH:mm:ss"))

// imutabilidade
const dataComDiasAdicionados = dateFns.add(novaData, {
    days: 4
})

console.log(novaData)
console.log(dataComDiasAdicionados)

console.log(dateFns.addDays(novaData, 2))

console.log(dateFns.parse('24/09/1991 08:55', 'dd/MM/yyyy HH:mm', new Date()))

console.log(dateFns.isBefore(new Date(2022, 1, 1), new Date(2022, 3, 1)))
console.log(dateFns.isAfter(new Date(2022, 1, 1), new Date(2022, 3, 1)))

console.log(dateFns.differenceInMonths(new Date(2022, 10, 1), new Date(2022, 3, 1)))