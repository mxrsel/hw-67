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
  reducers: {}
});

export const doorPassword = DoorPasswordSlice.reducer;

