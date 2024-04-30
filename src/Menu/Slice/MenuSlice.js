import MenuService from "../Service/MenuService.js";
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";

const service = MenuService();

export const getMenuAction = createAsyncThunk('menu/getMenu',
    async () => {
    return await service.getAll();
})

export const postMenuAction = createAsyncThunk('menu/postMenu',
    async (payload,thunkAPI) => {
    await service.create(payload)
    const response = await thunkAPI.dispatch(getMenuAction())
    return response.payload;
})

export const putMenuAction = createAsyncThunk('menu/putMenu',
    async (payload,thunkAPI) => {
        console.log(payload)
    const response = await service.put(payload)
    await thunkAPI.dispatch(getMenuAction())
    return response;
})

export const removeMenuAction = createAsyncThunk('menu/deleteMenu', async (payload,thunkAPI) => {
    await service.deleteMenu(payload)
    const response = await thunkAPI.dispatch(getMenuAction())
    return response.payload;
})


const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menus : [],
        menu : null,
        isLoading: false,
        message:''
    },
    reducers: {
        add: (state,{payload}) => {
            state.menus.push(payload);
        },
        remove: (state,{payload}) => {
            state.menus = state.menus.filter(menu => menu.id !== payload)
        },
        selectedMenu: (state, {payload}) => {
            state.menus = state.menus.find(menu => menu.id === payload||null)
        },
        update : (state, {payload}) => {
            state.menus = state.menus.map(menu => {
                if(menu.id === payload.id) {
                    return {...payload}
                }
                return menu;
            });
        }
    },
    extraReducers : (builder)=> {
        builder.addCase(getMenuAction.pending,state => {
            state.isLoading = true;
        });
        builder.addCase(getMenuAction.fulfilled,(state,{payload}) => {
            console.log("getAll: ",payload)
            state.menus = payload;
            state.isLoading = false;
        });
        builder.addCase(getMenuAction.rejected,state => {
            state.isLoading = false;
        });
        builder.addCase(postMenuAction.pending,state => {
            console.log(state.menus);
            state.isLoading = true;
        });
        builder.addCase(postMenuAction.fulfilled,(state,{payload}) => {
            state.menus = payload;
            state.isLoading = false;
        });
        builder.addCase(postMenuAction.rejected,state => {
            state.isLoading = false;
        });
        builder.addCase(removeMenuAction.pending,state => {
            state.isLoading = true;
        });
        builder.addCase(removeMenuAction.fulfilled,(state,{payload}) => {
            state.menus = payload;
            state.isLoading = false;
        })

    }
})

export const { add,
    remove,
    selectedMenu,
    update
} = menuSlice.actions;
export default menuSlice;