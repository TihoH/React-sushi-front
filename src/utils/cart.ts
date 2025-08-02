 export function orderPrice(cart, adedToOrderProducts) {
    if (!cart || !adedToOrderProducts) return 0;

    const priceAdedToOrderProducts = adedToOrderProducts.reduce(
      (total, item) => {
        return total + item.price * (item.quantity > 1 ? item.quantity : 0);
      },
      0
    );

    const priceCart = cart.reduce((total, item) => {
      return total + item.price * (item.quantity || 0);
    }, 0);

    return priceCart + priceAdedToOrderProducts;
  }