import { EnthusiasmAction } from '../actions/welcome.action';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index.constants';
import { Reducer } from 'redux'

export interface WelcomeState {
    languageName: string;
    enthusiasmLevel: number;
}

// export function enthusiasm(state: WelcomeState, action: EnthusiasmAction): WelcomeState {
//     switch (action.type) {
//         case INCREMENT_ENTHUSIASM:
//             return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//         case DECREMENT_ENTHUSIASM:
//             return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//         default:
//             return state;
//     }
// }


export const enthusiasm: Reducer = (state: WelcomeState = { languageName: 'zzzz', enthusiasmLevel: 0 }, action: EnthusiasmAction): WelcomeState => {
    switch (action.type) {

        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}