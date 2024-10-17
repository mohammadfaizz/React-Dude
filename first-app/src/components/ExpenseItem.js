import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return <div className="text-center bg-primary rounded">
        <h6 className="fw-bold text-primary bg-white d-inline-block rounded py-1 px-3">
            <ExpenseDate date={props.date} />
        </h6>
        <div>
            <h4>{props.title}</h4>
            <div>{props.price}</div>
        </div>
    </div>
}

export default ExpenseItem;