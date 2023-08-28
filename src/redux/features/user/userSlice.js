import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "TH Raju",
    email: "thraju@gmail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        updateStatus: (state, { payload }) => {
            const target = state.tasks.find(item => item.id == payload.id);
            target.status = payload.status;
        }
    }
})

export const { updateStatus } = userSlice.actions
export default userSlice.reducer