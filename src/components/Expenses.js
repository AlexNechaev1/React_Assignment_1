import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const expenses = [
    { date: new Date(2020, 8, 14), title: "Screen", price: "780" },
    { date: new Date(2021, 7, 26), title: "Mouse", price: "21" },
    { date: new Date(2019, 8, 20), title: "Keyboard", price: "124" }
  ];

  return (
    <div>
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
    </div>
  );
}

export default Expenses;
