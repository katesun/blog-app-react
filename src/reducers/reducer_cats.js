import { FETCH_CATS } from '../actions/index';

export default function(state = [ ], action) {
    switch (action.type) {
        case FETCH_CATS:
            return action.payload.data;
        default:
            return state;
    }
}