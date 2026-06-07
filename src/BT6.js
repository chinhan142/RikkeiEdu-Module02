var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
class Order {
    status;
    checkStatus() {
        if (this.status === OrderStatus.DELIVERED) {
            console.log("Order finished");
        }
    }
}
