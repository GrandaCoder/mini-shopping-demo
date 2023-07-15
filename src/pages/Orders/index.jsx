import { useContext } from "react";
import Layout from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard"
import { ShoppingContext } from "../../context";
import { Link } from "react-router-dom";

function Orders() {
    const contexto = useContext(ShoppingContext);
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative">
                <h1>My Orders</h1>
            </div>
            {contexto.order?.map((order, index) => (
                <Link to={`/orders/${index}`} key={index}>
                    <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
                </Link>
            )
            )}  
        </Layout>
    )
}
export default Orders