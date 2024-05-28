import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { selectedVehicleSlice } from '../../shared/lib/slices';

const rootReducer = combineReducers({
    selectedVehicle: selectedVehicleSlice.reducer
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => (getDefaultMiddleware())
        })
    )
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;