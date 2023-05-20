import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   */
  addItemToCart(item) {
    if (this.state.cart.some(cartItem => cartItem.code === item.code)) {
      this.setState({
        ...this.state,
        cart: this.state.cart.map(cartItem => cartItem.code === item.code ? {...cartItem, count: cartItem.count + 1} : cartItem)
      })
    } else {
      this.setState({
        ...this.state,
        cart: [...this.state.cart, {...item, count: 1}]
      })
    }
  };

  /**
   * Удаление товара из корзины
   * @param code
   */
  deleteCartItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(item => item.code !== code)
    })
  };

}

export default Store;
