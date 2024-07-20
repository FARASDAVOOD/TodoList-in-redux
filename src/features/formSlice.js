import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    id: 0,
    todo: []
};

const formSlice = createSlice({
    name: "FORM",
    initialState,
    reducers: {
        submit: (state, action) => {
            state.name = action.payload.value;
            state.id = state.id + 1;
            state.todo = [...state.todo, { isEditing: false, task: action.payload.value, id: state.id }];
        },
        delet: (state, action) => {
            state.todo = state.todo.filter((value) => value.id !== action.payload.id);
        },
        edit: (state, action) => {
            state.todo = state.todo.map((value) =>
                value.id === action.payload.id ? { ...value, isEditing: !value.isEditing } : value
            );
        },
        update: (state, action) => {
            state.todo = state.todo.map((value) =>
                value.id === action.payload.id ? { ...value, task: action.payload.value1, isEditing: !value.isEditing } : value
            );
        }
    }
});

export default formSlice.reducer;
export const { submit, delet, edit, update } = formSlice.actions;
