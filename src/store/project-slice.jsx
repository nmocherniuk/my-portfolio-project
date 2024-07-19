import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    project: {
        title: null,
        description: null,
    },
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
            localStorage.setItem('projectState', JSON.stringify(state));
        },
    },
});

export const { setProject } = projectSlice.actions;

export default projectSlice.reducer;
