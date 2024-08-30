import styles from "./calculatorui.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../calculator_reducer/calculatorReducer";
import { calculatorState } from "../calculator_reducer/calculatorReducer";
export function CalculatorUi() {
  const dispatch = useDispatch();
  const { number, result, expression, prevResult } =
    useSelector(calculatorState);
  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.header}>
          <div className={styles.window}>
            <span className={styles.red}></span>
            <span className={styles.yellow}></span>
            <span className={styles.green}></span>
          </div>
          <div className={styles.input}>
            {expression}= <span>{result}</span>
          </div>
        </div>
        <div className={styles.keys}>
          <div className={styles.row}>
            <div className={styles.number}>
              <span onClick={() => dispatch(calculatorActions.setNumber("7"))}>
                7
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("8"))}>
                8
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("9"))}>
                9
              </span>
            </div>
            <div className={styles.symbol}>
              <span
                onClick={() => dispatch(calculatorActions.setOperator("/"))}
              >
                ÷
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.number}>
              <span onClick={() => dispatch(calculatorActions.setNumber("4"))}>
                4
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("5"))}>
                5
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("6"))}>
                6
              </span>
            </div>
            <div className={styles.symbol}>
              <span
                onClick={() => dispatch(calculatorActions.setOperator("-"))}
              >
                -
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.number}>
              <span onClick={() => dispatch(calculatorActions.setNumber("1"))}>
                1
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("2"))}>
                2
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("3"))}>
                3
              </span>
            </div>
            <div className={styles.symbol}>
              <span
                onClick={() => dispatch(calculatorActions.setOperator("+"))}
              >
                +
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.number}`}>
              <span
                className={styles.action}
                onClick={() => dispatch(calculatorActions.calculateResult())}
              >
                =
              </span>
              <span
                onClick={() => dispatch(calculatorActions.clear())}
                className={styles.dull}
              >
                AC
              </span>
              <span onClick={() => dispatch(calculatorActions.setNumber("0"))}>
                0
              </span>
            </div>
            {/* <div className={styles.number}>


            </div> */}
            <div className={styles.symbol}>
              <span
                onClick={() => dispatch(calculatorActions.setOperator("*"))}
              >
                *
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
