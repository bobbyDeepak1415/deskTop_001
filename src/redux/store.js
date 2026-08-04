

import { configureStore } from "@reduxjs/toolkit"
 


const store=configureStore({
    counter:"counterReducer"
})


export default store
