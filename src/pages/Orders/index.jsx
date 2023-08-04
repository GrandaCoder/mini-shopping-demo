import { useContext } from "react";
import Layout from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard"
import { ShoppingContext } from "../../context";
import { Link } from "react-router-dom";

function Orders() {
    const contexto = useContext(ShoppingContext);
    return (
        <Layout>
            <div className="flex items-center justify-center flex-col">
                <div className="flex w-80 items-center justify-center relative">
                    <h1 className="font-medium text-lg">My Orders</h1>
                </div>
                {contexto.order?.map((order, index) => (
                    <Link to={`/orders/${index}`} key={index} className="w-80">
                        <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} date={order.date} />
                    </Link>
                )
                )}
            </div>
        </Layout>
    )
}
export default Orders