import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { AddTodo } from './screens/addTodo';
import { todoSlice } from './redux/slices';

const store = configureStore({
  reducer: todoSlice.reducer
})

function App() {
  return (<div>
    <Provider store={store}>
      <h1>Todo</h1>
      <AddTodo />
    </Provider>
  </div>
  );
}

export default App;
