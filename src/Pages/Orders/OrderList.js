import { useEffect, useMemo, useState } from "react";
import ProductTable from "./ProductTable";
import { db } from "../../Configs/firebase-config";
import "../../App.css";
import { collection, getDocs } from "firebase/firestore";

function OrderList() {
  const [products, setProducts] = useState([]);
  /* const [loading, setLoading] = useState(true); */
  useEffect(() => {
    const getWallet = async () => {
      const userColletionRef = collection(db, "wallet");
      const data = await getDocs(userColletionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getWallet();
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "کوین",
        accessor: "coin",
      },

      {
        Header: "مقدار",
        accessor: "amount",
      },
      {
        Header: "خریدار/فروشنده",
        accessor: "email",
      },
    ],
    []
  );
  return (
    <div className="users">
      <div className="table-container ">
        <ProductTable columns={columns} data={products} />
      </div>
    </div>
  );
}

export default OrderList;
