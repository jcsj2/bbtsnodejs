"use strict";
// public => qualquer lugar 
// protected => classe e suas filhas 
// private => classe
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
class Cat extends Animal {
    constructor(nome) {
        super(nome);
    }
    fazerBarulho() {
        console.log(this.nome + " fez " + " miau ");
    }
}
class Dog extends Animal {
    constructor(nome) {
        super(nome);
    }
    fazerBarulho() {
        console.log(this.nome + " fez " + " au ");
    }
}
const rex = new Dog('Rex');
rex.fazerBarulho();
class PayPalPaymentGateway {
    pay(paymentInfo) {
        console.log('Pagando pelo paypal', paymentInfo);
    }
}
class StripePaymentGateway {
    pay(paymentInfo) {
        console.log('Pagando pela stripe', paymentInfo);
    }
}
class PagseguroPaymentGateway {
    pay(paymentInfo) {
        console.log('Pagando pelo pag seguro', paymentInfo);
    }
}
const paypal = new PayPalPaymentGateway();
class Pay {
    constructor(paymentGatewat) {
        this.paymentGatewat = paymentGatewat;
    }
    doPay(paymentInfo) {
        this.paymentGatewat.pay(paymentInfo);
    }
}
const pagandoPeloPayPal = new Pay(new PayPalPaymentGateway());
const pagandoPelaStripe = new Pay(new StripePaymentGateway());
const pagandoPeloPagseguro = new Pay(new PagseguroPaymentGateway());
const informacoesCartao = {
    cardNumber: '234234234',
    expirationDate: '05/25',
    securityCode: '432'
};
pagandoPeloPayPal.doPay(informacoesCartao);
pagandoPelaStripe.doPay(informacoesCartao);
pagandoPeloPagseguro.doPay(informacoesCartao);
