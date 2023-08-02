import { useContext, useEffect, useRef } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingContext } from "../../context"
import { useParams } from "react-router-dom"

function Home() {
    const contexto = useContext(ShoppingContext)
    const inputsearch = useRef()
    let products = (contexto.searchByTitle?.length > 0) ? contexto.filteredProducts : contexto.products
    const { category } = useParams()

    useEffect(() => {
        return () => {
            contexto.setSearchByTitle('')
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (category) {
        products = contexto.filterByCategory(category, products)
    }

    let renderProducts = () => {
        if (products?.length > 0) {
            return products.map(product => (
                <Card key={product.id} producto={product} />
            ));
        } else {
            return <h1>No hay productos</h1>;
        }
    }

    const handleOnChange = () => {
        let valorBuscado = inputsearch.current.value
        contexto.setSearchByTitle(valorBuscado)
    }

    return (
        <Layout>
            <input
                ref={inputsearch}
                className="w-80 rounded-lg p-2 m-4 border border-black focus:outline-none"
                type="text"
                placeholder="Search"
                onChange={handleOnChange} />

            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {renderProducts()}
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home