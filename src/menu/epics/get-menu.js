import { ofType } from 'redux-observable'
import { catchError, mergeMap, of } from 'rxjs'
import { actions } from '../slices/get-menu'
import { repository } from '../repository'

export const getMenu = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = payload => repository.getMenu(payload)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))
