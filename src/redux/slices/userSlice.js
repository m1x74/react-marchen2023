import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null

}

const getAll=createAsyncThunk(
    "userSlice/getAll",
    async (_, rejectWithValue) => {
        try {
            const {data} = await userService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.value)
        }

    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
   extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.users=action.payload
                state.loading=false
            })
            .addCase(getAll.pending,(state)=>{
                state.loading=true
            })
   }

});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice

const userActions = {
    setSelectedUser,
    getAll
}

export {
    userReducer,
    userActions
}