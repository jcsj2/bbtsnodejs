const yup = require('yup')

// import * as yup from 'yup';

const user = {
    name: 'John doe',
    email: 'johndoe@email.com',
    birthday: new Date(1990, 4, 5),
    website: 'https://www.johnspage.com',
    numberOfApplications: 4,
    marvelOrDC: 'Marvel'
}

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    website: yup.string().url(),
    birthday: yup.date(),
    numberOfApplications: yup.number().positive(),
    marvelOrDC: yup.mixed().oneOf(['Marvel', 'DC'])
})

//exists valid with promise
console.log(schema.isValidSync(user))

try {

    const wrongUser = {
        name: '',
        email: 'johndoe',
        birthday: '1991-04-05',
        website: 'johnspage.com',
        numberOfApplications: -4,
        marvelOrDC: 'Warner'
    }

    // talk about internationalization

    schema.validateSync(wrongUser, { abortEarly: false })
} catch (err) {
    console.log(err.errors)
}