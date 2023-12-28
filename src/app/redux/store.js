const { configureStore } = require("@reduxjs/toolkit");
import usersreducer from './slice'
import todoReducer from './todoSlice'
export const store = configureStore({
    reducer:{
      usersData: usersreducer,
      todosData: todoReducer
    }
})