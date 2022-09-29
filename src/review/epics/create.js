import { ofType } from 'redux-observable'
import { catchError, mergeMap, of } from 'rxjs'
import { createReview } from '../repositories'
import { actions } from '../slices/create-review'

export const create = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = payload => createReview(payload)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))
