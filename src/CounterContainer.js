import React from "react";
import { connect } from "react-redux";

// const add = document.getElementById("add");
// add.addEventListener("click", () => {
//   store.dispatch(addAction);
// });

// const remove = document.getElementById("remove");
// remove.addEventListener("click", () => {
//   store.dispatch(removeAction);
// });

// const add10 = document.getElementById("add10");
// add10.addEventListener("click", () => {
//   store.dispatch(add10Action);
// });

// const remove10 = document.getElementById("remove10");
// remove10.addEventListener("click", () => {
//   store.dispatch(remove10Action);
// });

// const reset = document.getElementById("reset");
// reset.addEventListener("click", () => {
//   store.dispatch(resetAction);
// });
const mapStateToProps = state => ({ counter: state });

const mapDispatchToPros = dispatch => ({
  onAddAction: () => dispatch({ type: "ADD" }),
  onAdd10Action: () => dispatch({ type: "ADD10" }),
  onRemoveAction: () => dispatch({ type: "REMOVE" }),
  onRemove10Action: () => dispatch({ type: "REMOVE10" }),
  onResetAction: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
  onAdd10Action,
  onAddAction,
  onRemoveAction,
  onRemove10Action,
  onResetAction,
  counter
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAdd10Action}>+10</button>
    <button onClick={onAddAction}>+1</button>
    <button onClick={onResetAction}>Reset</button>
    <button onClick={onRemoveAction}>-1</button>
    <button onClick={onRemove10Action}>-10</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CounterComponent);
