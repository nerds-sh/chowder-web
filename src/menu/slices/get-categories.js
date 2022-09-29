import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attempt: null,
    data: null,
    errors: null
}

const attempt = (state, { payload }) => ({...state, attempt: payload})

const success = (state, { payload }) => {
    console.log('payyyy', payload)
    return ({...state, data: payload})
}

const failure = (state, { payload }) => ({ ...state, errors: payload })

export const getCategoriesSlice = createSlice({
    initialState,
    name: 'getCategories',
    reducers: {
        attempt,
        success,
        failure,
    },
})

export const { actions } = getCategoriesSlice