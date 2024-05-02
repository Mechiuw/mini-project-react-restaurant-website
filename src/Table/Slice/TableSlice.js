import TableService from "../Service/TableService.js";
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";

const service = new TableService();
export const postTableAction =
    createAsyncThunk('table/postTable', async (payload,thunkAPI) => {
        await service.create(payload)
        const response = await thunkAPI.dispatch(getTableAction())
        return response.payload;
    })
export const getTableAction = createAsyncThunk('table/getTable',
    async () => {
    return await service.getAll();
    })

export const  putTableAction = createAsyncThunk('table/putTable',
    async (payload,thunkAPI) => {
    const response = await service.put(payload)
        await thunkAPI.dispatch(getTableAction())
        return response;
    })

export const removeTableAction = createAsyncThunk('table/deleteTable', async (payload,thunkAPI) => {
    await service.deleteTable(payload)
    const response = await thunkAPI.dispatch(getTableAction())
    return response.payload;
})

const tableSlice = createSlice({
    name: "table",
    initialState: {
        tables: [],
        table: null,
        isLoading: false,
        message:''
    },
    reducers:{
        add: (state,{payload}) => {
            state.tables.push(payload)
        },
        remove: (state,{payload}) => {
            state.tables = state.tables.filter(table => table.id !== payload)
        },
        selectedTable: (state, {payload}) => {
            state.tables = state.tables.find(table => table.id === payload||null)
        },
        update : (state, {payload}) => {
            state.tables = state.tables.map(table => {
                if(table.id === payload.id) {
                    return {...payload}
                }
                return table;
            });
        }
    },
    extraReducers : (builder)=> {
        builder.addCase(getTableAction.pending,state => {
            state.isLoading = true;
        });
        builder.addCase(getTableAction.fulfilled,(state,{payload}) => {
            state.tables = payload;
            state.isLoading = false;
        });
        builder.addCase(getTableAction.rejected,state => {
            state.isLoading = false;
        });
        builder.addCase(postTableAction.pending,state => {
            console.log(state.tables);
            state.isLoading = true;
        });
        builder.addCase(postTableAction.fulfilled,(state,{payload}) => {
            state.tables = payload;
            state.isLoading = false;
        });
        builder.addCase(postTableAction.rejected,state => {
            state.isLoading = false;
        });
        builder.addCase(removeTableAction.pending,state => {
            state.isLoading = true;
        });
        builder.addCase(removeTableAction.fulfilled,(state,{payload}) => {
            state.tables = payload;
            state.isLoading = false;
        })
        builder.addCase(removeTableAction.rejected, state => {
            state.isLoading = false;
        });
    }
})

export const {
    add,
    remove,
    selectedTable,
    update
} = tableSlice.actions;

export default tableSlice;
