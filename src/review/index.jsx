import { Typography } from '@material-ui/core'
import { RadioGroupRating } from './reviews'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from './slices/create-review'
import { Field, Form, Formik } from 'formik'

const useCreateReview = () => {
    const dispatch = useDispatch()
    
    return useCallback(values => {
        dispatch(actions.attempt({ username: values.userName,
            rate: values.rate,
            text: values.text,
            restaurant: {
                connect: {
                    id: "cl8ncnvio0273byyf5uuzveaa"
                }
            }}))
    }, [dispatch])
}

const initialValues = {
    userName: null,
    rate: 1,
    text: null
}

export const Review = () => {
    return <Formik initialValues={initialValues} onSubmit={useCreateReview()}>
      <Form>
        <h2>Leave us your opinion.</h2>
        <Typography>Add your name</Typography>
        <Field type="text" name="userName" />
        <Typography> What do you think about our restaurant ?</Typography>
        <RadioGroupRating />
        <Typography>What would you like to share with us ?</Typography>
        <Field type="text" name="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
}