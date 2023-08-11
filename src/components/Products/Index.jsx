import { useContext, useRef } from "react"
import Card from "../../components/Card"
import { ShoppingContext } from "../../context"

import PropTypes from 'prop-types';

function ProductsRender({ products }) {
    const contexto = useContext(ShoppingContext)
    const inputsearch = useRef()

    let renderProducts = () => {
        if (products?.length > 0) {
            return products.map(product => (
                <Card key={product.id} producto={product} />
            ));
        } else {
            return <h1>No hay productos</h1>;
        }
    }

    return (
        <div>
            <input
                ref={inputsearch}
                className="w-80 rounded-lg p-2 m-4 border border-black focus:outline-none"
                type="text"
                placeholder="Search"
                onChange={()=> contexto.setSearchByTitle(inputsearch.current.value)} />

            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {renderProducts()}
            </div>
        </div>
        

    )
}

ProductsRender.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductsRender