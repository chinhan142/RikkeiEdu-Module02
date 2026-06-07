abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends PaymentMethod {
  override processPayment(amount: number): void {
    console.log(`Processing credit card payment: $${amount}`);
  }
}

class PaypalPayment extends PaymentMethod {
  override processPayment(amount: number): void {
    console.log(`Processing PayPal payment: $${amount}`);
  }
}

// Test
const creditCard = new CreditCardPayment();
creditCard.processPayment(100);

const paypal = new PaypalPayment();
paypal.processPayment(50);
