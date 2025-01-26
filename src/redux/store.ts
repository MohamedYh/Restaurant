import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateInterface {
    theme: number;
}

const initialState: StateInterface = {
    theme: 0,
};

const Slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        light: (state: StateInterface) => {
            state.theme = 0;
        },
        dark: (state: StateInterface) => {
            state.theme = 1;
        },
    },
});

export const { light, dark } = Slice.actions;

export const store = configureStore({
    reducer: {
        slice: Slice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
