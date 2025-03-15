import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "slice",
  initialState: {

  },
  reducers: {
    cacheResults: (state, action)=>{ // we will send action like this :- {"ip": ["iphone11", "iphone pro max"]}
      state = Object.assign(state, action.payload) // will merge state and payload in one object
    }
  }
})


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;