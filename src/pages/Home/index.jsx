import { useContext, useRef } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingContext } from "../../context"

function Home() {
    // const { products, setSearchByTitle , searchByTitle} = useContext(ShoppingContext)
    const contexto = useContext(ShoppingContext)
    const inputsearch = useRef()

   // let products = (contexto.searchByTitle?.length > 0) ? contexto.filteredProducts : contexto.products

    let renderProducts = () => {
        if(contexto.searchByTitle?.length > 0){
            return (
                contexto.filteredProducts?.map(product => (
                    <Card key={product.id} producto={product} />
                ))

            )
        }else{
            return (
                contexto.products?.map(product => (
                    <Card key={product.id} producto={product} />
                ))
            )
        }
    }

    return (
        <Layout>
            <div>
                <h1 className="text-2xl">Home</h1>
            </div>
            <input
                ref={inputsearch}
                className="w-80 rounded-lg p-2 m-4 border border-black focus:outline-none"
                type="text"
                placeholder="Search"
                onChange={()=> contexto.setSearchByTitle(inputsearch.current.value)} />

            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    renderProducts()
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}
export default Home