enum OrderStatus {
  "PENDING",
  "SHIPPED",
  "DELIVERED",
}

class Order {
  status: OrderStatus;

  checkStatus() {
    if (this.status === OrderStatus.DELIVERED) {
      console.log("Order finished");
    }
  }
}
