import Welcom from '../components/welcome';
import * as actions from '../actions/welcome.action';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { WelcomeState } from '../reducers/welcome.reducer';
import { StoreState } from 'src/types';

export function mapStateToProps(state: StoreState) {
    console.log(state)
    let enthusiasmLevel = state.welcome.enthusiasmLevel
    console.log(enthusiasmLevel)
    return {
        enthusiasmLevel,
        languageName: state.welcome.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => {
            dispatch(actions.incrementEnthusiasm())
        },
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcom);
