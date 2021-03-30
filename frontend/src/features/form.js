import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '../utilities/FormData'

const slice = createSlice({
  name: 'form',
  initialState: {
    form: {},
    loaded: false
  },
  reducers: {
    loadData: (state) => {
      state.form = initialState;
      state.loaded = true;
    },
    updateData: (state, action) => {
        const { name, data } = action.payload;
        state.form[name] = data;
    }
  },
});


export default slice.reducer

const { loadData, updateData } = slice.actions

export const updateField = ({ name, data }) => dispatch => {
    dispatch(updateData({ name, data }));
}

export const loadInfo = () => dispatch => {
  dispatch(loadData());
}