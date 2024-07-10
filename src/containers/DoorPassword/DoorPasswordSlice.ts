import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  input: string;
  correctPassword: number;
  status: string,
  message: string,
}

const initialState: CounterState = {
  input: '',
  correctPassword: 2626,
  status: '',
  message: '',
};

const DoorPasswordSlice = createSlice({
  name: 'doorPassword',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      if (state.input.length < 4) {
        state.input = action.payload;
      }
    },
    removeNumber: (state) => {
      state.input = state.input.slice(0, state.input.length - 1);
    }

  }
});

export const doorPassword = DoorPasswordSlice.reducer;

