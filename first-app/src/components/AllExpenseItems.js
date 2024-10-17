import ExpenseItem from "./ExpenseItem";


export default function AllExpenseItems(props){
    return (
        <div className="row border rounded p-4 gy-4 gx-5">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[0].title} price={props.items[0].price} date={props.items[0].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[1].title} price={props.items[1].price} date={props.items[1].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[2].title} price={props.items[2].price} date={props.items[2].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[3].title} price={props.items[3].price} date={props.items[3].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[4].title} price={props.items[4].price} date={props.items[4].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[5].title} price={props.items[5].price} date={props.items[4].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[6].title} price={props.items[6].price} date={props.items[4].date} />
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-sm-12 border py-3 rounded">
                <ExpenseItem title={props.items[7].title} price={props.items[7].price} date={props.items[4].date} />
            </div>
        </div>
    );
}