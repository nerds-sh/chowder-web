import {Box, Button, Grid, Typography} from '@material-ui/core'
import { RadioGroupRating } from './reviews'
import {useDispatch, useSelector} from 'react-redux'
import { useCallback } from 'react'
import { actions } from './slices/create-review'
import { Field, Form, Formik } from 'formik'
import { SeeReviews } from './see-reviews'
import { Behaviour } from './behaviour'
import { get } from 'lodash'

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
    rate: null,
    text: null
}

export const Review = () => <>
    <Behaviour />
    <Formik initialValues={initialValues} onSubmit={useCreateReview()}>
      <Form>
        <h2 style={{ marginTop: 40 }}>Leave us your opinion.</h2>
        <Box style={{ marginTop: 100 }}>
            <Typography>Add your name</Typography>
            <Field type="text" name="userName" style={{ width: '80%' }}/>
            <Typography style={{ marginTop: 50 }}> What do you think about our restaurant ?</Typography>
            <RadioGroupRating />
            <Typography style={{ marginTop: 50 }}>What would you like to share with us ?</Typography>
            <Field type="text" name="text" style={{ height: 150, width: '80%' }}/>
            <Grid sm={12} xs={12} md={12} style={{ marginTop: 20 }}>
            <Button type="submit" color="success">Submit</Button>
            </Grid>
        </Box>
      </Form>
    </Formik>
   <SeeReviews />
</>