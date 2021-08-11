import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const date = props.expenses.date;
  const title = props.expenses.title;
  const price = props.expenses.price;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div>
        <h2 className="expense-item__description">{title}</h2>
      </div>
      <div className="expense-item__price">{price}$</div>
    </div>
  );
}

export default ExpenseItem;
