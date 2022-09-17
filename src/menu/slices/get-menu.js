import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attempt: null,
    data: undefined,
    errors: null
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

export const getMenuSlice = createSlice({
    initialState,
    name: 'getMenu',
    reducers: {
        attempt,
        success,
        failure,
    },
})

export const { actions } = getMenuSlice