import './App.css';
import AllExpenseItem from './components/AllExpenseItems';

function App() {
  const element = [
    { title: "Rent House", price: "RS 12000", date: new Date("2023-01-12") },
    { title: "Phone", price: "RS 28000", date: new Date("2023-02-28") },
    { title: "Laptop", price: "RS 55,000", date: new Date("2023-04-23") },
    { title: "College Fees", price: "RS 8000", date: new Date("2023-07-3") },
    { title: "Netflix", price: "RS 599", date: new Date("2023-04-10")},
    { title: "Prepaid Recharge", price: "RS 719", date: new Date("2023-04-14")},
    { title: "Shoes", price: "RS 1219", date: new Date("2023-02-20")},
    { title: "Credit Bill", price: "RS 6870", date: new Date("2023-01-29")}
  ];

  return (
    <div className="container">
      <h1 className="text-center fw-bold text-primar">Expenses</h1>
      <AllExpenseItem items={element} />
    </div>
  );
}

export default App;