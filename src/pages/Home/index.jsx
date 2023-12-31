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

    // const styleWithCheckout = 'w-[calc(100%-360px)] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    // const styleWhitoutCheckout = 'w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '

    const styleWithCheckout = 'w-full md:w-[calc(100%-360px)] '
    const styleWhitoutCheckout = 'w-full '
    return (
        <Layout>
            <div className={`${(contexto.isCheckoutSideMenuOpen || contexto.isProductOpen) ? styleWithCheckout : styleWhitoutCheckout}flex flex-wrap justify-center items-center gap-6  px-5`}>
                <div className="w-full flex items-center justify-center">
                    <input
                        ref={inputsearch}
                        className="w-6/12  p-2 my-4 border border-gray-400 focus:outline-none rounded-s-lg"
                        type="text"
                        placeholder="Search"
                        onChange={handleOnChange}
                    />
                    <button className="bg-green-500 border border-green-500  text-white font-bold p-2 px-4 rounded-e-lg">Buscar</button>
                </div>
                {renderProducts()}
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home