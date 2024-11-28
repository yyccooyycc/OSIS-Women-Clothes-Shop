import { ofType } from 'redux-observable';
import { switchMap, debounceTime, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchImagesSuccess, fetchImagesFailure } from '../productSlice';

const fetchImagesEpic = (action$) =>
  action$.pipe(
    ofType('products/fetchImages'),
    debounceTime(300), 
    switchMap((action) =>
      ajax.getJSON(`/api/images/${action.payload}`).pipe(
        map((response) => fetchImagesSuccess(response)), 
        catchError((error) => [fetchImagesFailure(error)]) 
      )
    )
  );

export default fetchImagesEpic;
