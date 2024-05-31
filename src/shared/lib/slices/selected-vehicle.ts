import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Vehicle } from '../../types';

const initialState: Vehicle = {
    title: '',
    description: '',
    level: '',
    type: '',
    icon: '',
    nation: ''
};

export const selectedVehicleSlice = createSlice({
    name: 'selectedVehicle',
    initialState,
    reducers: {
        selectVehicle: (_, action: PayloadAction<Vehicle>) => {
            return (action.payload)
        }
    }
});

export const { selectVehicle } = selectedVehicleSlice.actions;