import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"

function Home() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        
        <Layout>
            <h1>Home</h1>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    products?.map(product => (
                        <Card key={product.id} producto={product} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home