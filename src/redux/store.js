import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { Asalam} from './reducer'

const reducers = combineReducers({
    Asalam:Asalam
})

const initialStates = {

}
const middlewares = [thunk]

export const store = legacy_createStore(
    reducers,
    initialStates,
    composeWithDevTools(applyMiddleware(...middlewares))
)