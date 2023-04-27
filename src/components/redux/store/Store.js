import { createStore } from 'redux'
import {reducer} from '../productReducer/Reducer'

 export const store = createStore(reducer,{})