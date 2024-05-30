import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: [] = [];

export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehicles: (state, action: PayloadAction<[]>) => {
            return (action.payload)
        }
    }
});

export const { setVehicles } = vehiclesSlice.actions;