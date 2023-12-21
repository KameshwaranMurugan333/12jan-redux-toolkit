import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, multiplyByNum } from "./../redux/slices/counterSlice";

export const Counter = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const onIncrementBtnClicked = () => {
        dispatch(increment());
    }

    const onDecrementBtnClicked = () => {
        dispatch(decrement());
    }

    const onMultBtnClicked = () => {
        dispatch(multiplyByNum(2));
    }

    return <div>
        <h3>Count: {count}</h3>
        <button onClick={onIncrementBtnClicked} >+</button>
        <button onClick={onDecrementBtnClicked}>-</button>
        <button onClick={onMultBtnClicked}>Mul by 2</button>
    </div>
}