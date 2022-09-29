import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attempt: null,
    data: null,
    errors: null
}

const attempt = (state, { payload }) => ({...state, attempt: payload})

const success = (state, { payload }) => ({...state, data: payload})

const failure = (state, { payload }) => ({ ...state, errors: payload })

export const getReviewSlice = createSlice({
    initialState,
    name: 'getReview',
    reducers: {
        attempt,
        success,
        failure,
    },
})

export const { actions } = getReviewSlice