import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: [] = [];

export const filteredVehiclesSlice = createSlice({
    name: 'filteredVehicles',
    initialState,
    reducers: {
        setFilteredVehicles: (state, action: PayloadAction<[]>) => {
            return (action.payload)
        }
    }
});

export const { setFilteredVehicles } = filteredVehiclesSlice.actions;