import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShoppingContext } from "../../context"
import { OrderCard } from "../../components/OrderCard"

function Order() {
    const contexto = useContext(ShoppingContext);
    const latestOrderProducts = contexto.order?.slice(-1)[0]?.products || [];
    return (
        <Layout>
            <h1>Order</h1>
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