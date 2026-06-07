class PaymentMethod {
}
class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing credit card payment: $${amount}`);
    }
}
class PaypalPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing PayPal payment: $${amount}`);
    }
}
// Test
const creditCard = new CreditCardPayment();
creditCard.processPayment(100);
const paypal = new PaypalPayment();
paypal.processPayment(50);
