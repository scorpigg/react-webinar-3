import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import { CartBlock } from './components/cart-block';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItemToCart(item);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <CartBlock cart={store.state.cart}/>
      <List 
        list={list}
        onAddItem={callbacks.onAddItem}
      />
    </PageLayout>
  );
}

export default App;
