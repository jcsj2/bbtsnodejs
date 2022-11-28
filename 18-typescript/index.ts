// public => qualquer lugar 
// protected => classe e suas filhas 
// private => classe

abstract class Animal {

    constructor(public nome: string) {

    }

    public abstract fazerBarulho(): void

}

class Cat extends Animal {

    constructor(nome: string) {
        super(nome)
    }

    public fazerBarulho(): void {
        console.log(this.nome + " fez " + " miau ")
    }
}

class Dog extends Animal {

    constructor(nome: string) {
        super(nome)
    }

    public fazerBarulho(): void {
        console.log(this.nome + " fez " + " au ")
    }
}

const rex = new Dog('Rex')

rex.fazerBarulho()

// ------

type PaymentInfo = {
    cardNumber: string;
    securityCode: string;
    expirationDate: string;
}

interface PaymentGateway {
    pay(paymentInfo: PaymentInfo): void
}

class PayPalPaymentGateway implements PaymentGateway {

    pay(paymentInfo: PaymentInfo): void {
        console.log('Pagando pelo paypal', paymentInfo)
    }

}

class StripePaymentGateway implements PaymentGateway {

    pay(paymentInfo: PaymentInfo): void {
        console.log('Pagando pela stripe', paymentInfo)
    }

}

class PagseguroPaymentGateway implements PaymentGateway {

    pay(paymentInfo: PaymentInfo): void {
        console.log('Pagando pelo pag seguro', paymentInfo)
    }

}

const paypal = new PayPalPaymentGateway()

class Pay {

    constructor(private paymentGatewat: PaymentGateway) {

    }

    doPay(paymentInfo: PaymentInfo): void {
        this.paymentGatewat.pay(paymentInfo)
    }
}

const pagandoPeloPayPal = new Pay(new PayPalPaymentGateway())
const pagandoPelaStripe = new Pay(new StripePaymentGateway())
const pagandoPeloPagseguro = new Pay(new PagseguroPaymentGateway())

const informacoesCartao: PaymentInfo = {
    cardNumber: '234234234',
    expirationDate: '05/25',
    securityCode: '432'
}

pagandoPeloPayPal.doPay(informacoesCartao)
pagandoPelaStripe.doPay(informacoesCartao)
pagandoPeloPagseguro.doPay(informacoesCartao)

const mapa = new Map<string, string>()
mapa.set('chave1', 'valor1')
mapa.set('chave2', 'valor2')

// const nomes: Array<string> = ['asdasd', 'qssdfs']
const nomes: string[] = ['asdasd', 'qssdfs']