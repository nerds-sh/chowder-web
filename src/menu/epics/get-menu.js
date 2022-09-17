import { getMenu as getMenuRepository } from '../repository'
import { ofType } from 'redux-observable'
import { catchError, mergeMap, of } from 'rxjs'
import { actions } from '../slices/get-menu'

export const getMenu = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = () => of(getMenuRepository())
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => {
    console.log('p', payload)
    return of(actions.success(payload))
}

const failure = payload => {
    console.log('a', payload)
    return of(actions.failure(payload))
}
