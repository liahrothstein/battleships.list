import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { selectedVehicleSlice, filteredVehiclesSlice, vehiclesSlice } from '../../shared/lib/slices';
import { api } from '../services/generated';

const rootReducer = combineReducers({
    selectedVehicle: selectedVehicleSlice.reducer,
    filteredVehicles: filteredVehiclesSlice.reducer,
    vehicles: vehiclesSlice.reducer,
    [api.reducerPath]: api.reducer
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => (getDefaultMiddleware()
                .concat(api.middleware)
            )
        })
    )
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;