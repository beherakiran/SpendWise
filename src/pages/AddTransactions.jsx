import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate, useParams } from "react-router-dom";

function AddTransactions() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const navigate = useNavigate();
   const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const form = e.target;

    const transaction = {
      id:id ?Number(id): Date.now(),
      title: form.title.value,
      amount: Number(form.amount.value),
      type: form.type.value,
      category: form.category.value,
      date: form.date.value,
      note: form.note.value,
    };

    if(id){
      const updatedTransactions = transactions.map((item)=>
        item.id === Number(id) ? transaction : item
      );
      setTransactions(updatedTransactions)
    }else{
      setTransactions([...transactions, transaction]);
    }

    form.reset();
    navigate("/transactions");
    //console.log(transaction)
  };

  //    useEffect(() => {
  //   console.log(transactions);
  // }, [transactions]);

  

  const existingTransaction = transactions.find(
    (transaction) => transaction.id === Number(id),
  );

  return (
    <>
      <div className="min-h-screen mx-auto p-5 bg-blue-50">
        <div className="mx-auto max-w-3xl ">
          <h1 className="mb-6 text-2xl text-center text-blue-800 font-bold">
              {id ? "Edit Transaction" : "Add Transaction"}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full rounded-xl border border-blue-100 p-6 shadow-sm space-y-3 bg-white"
          >
            <div className="flex flex-col gap-3">
              <label className="font-medium text-xl" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g grocery shopping..."
                name="title"
                id="title"
                 defaultValue={existingTransaction?.title || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium text-xl" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                placeholder="₹Enter Amount"
                id="amount"
                name="amount"
                min="0.01"
                step="0.01"
                defaultValue={existingTransaction?.amount || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="type" className="font-medium text-xl">
                Transaction Type
              </label>

              <select
                id="type"
                name="type"
                defaultValue={existingTransaction?.type || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3"
              >
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium text-xl" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={existingTransaction?.category || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="bills">Bills</option>
                <option value="shopping">Shopping</option>
                <option value="travel">Travel</option>
                <option value="personal">Personal</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium text-xl" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                placeholder="DD/MM/YY"
                id="date"
                name="date"
                defaultValue={existingTransaction?.date || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium text-xl" htmlFor="note">
                Note
              </label>
              <textarea
                id="note"
                name="note"
                placeholder="Add a description..."
                rows="3"
                defaultValue={existingTransaction?.note || ""}
                required
                className="rounded-lg border border-blue-400 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 block mx-auto rounded-md px-4 py-2 text-white mt-4 hover:bg-blue-700 transition"
            >
             {id ? "Update Transaction" : "Add Transaction"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTransactions;
