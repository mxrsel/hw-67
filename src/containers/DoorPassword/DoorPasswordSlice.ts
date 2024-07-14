import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DoorPasswordState {
  input: string;
  status: string;
  message: string;
}

const initialState: DoorPasswordState = {
  input: '',
  status: '',
  message: ''
};

const correctPin = '2626';

const doorPasswordSlice = createSlice({
  name: 'doorPassword',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeNumber: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkStatus: (state) => {
      if (state.input === correctPin) {
        state.status = 'success';
        state.message = 'Successfully checked your pin';
      } else {
        state.status = 'error';
        state.message = 'Wrong pin';
      }
    },
    resetAll: (state) => {
      state.input = '';
      state.status = '';
      state.message = '';
    }
  }
});

export const { addNumber,
  removeNumber,
  checkStatus,
  resetAll } = doorPasswordSlice.actions;
export default doorPasswordSlice.reducer;
