/* @flow */

import { Observable } from 'rxjs'
import type { MiddlewareAPI } from 'redux'

import { type ReturnType } from './types'

export type Epic<S, A, D> = (
    action$: ActionObserable<A>,
    store: MiddlewareAPI<S, A>,
    dependencies: D,
) => Observable<*>;

class ActionObserable<A> extends Observable<A> {
    ofType: <T>(...keys: T) => ActionObserable<$ElementType<
      $TupleMap<T, <V>(V) => $Call<ReturnType, $ElementType<A, V>>>,
      number
    >>;
}
