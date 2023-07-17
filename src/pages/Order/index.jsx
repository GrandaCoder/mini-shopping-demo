import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShoppingContext } from "../../context"
import { OrderCard } from "../../components/OrderCard"
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function Order() {
    const contexto = useContext(ShoppingContext);
    //obetnemos nuestro orderId viene de APP
    let {orderId} = useParams();
    if(!orderId){
        orderId = contexto.order.length - 1
    }

    const latestOrderProducts = contexto.order?.[orderId]?.products || [];
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-5">
                <Link to="/orders" className="absolute left-0">
                    <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
                </Link>
                <h1>Order</h1>
            </div>
            <div className="flex flex-col w-80">
                {latestOrderProducts.map((producto) => (
                    <OrderCard
                        key={producto.id}
                        title={producto.title}
                        image={producto.images}
                        price={producto.price}
                    />
                ))}
            </div>
        </Layout>
    );
}
export default Order