import PropTypes from 'prop-types'
import CheckoutSideMenu from '../CheckoutSideMenu'
const Layout = ({ children }) => {
    
    Layout.propTypes = {
        children: PropTypes.node
    }

    return (
        <div className='flex flex-col mt-20 items-center'>
            {children}
            <CheckoutSideMenu />
        </div>
    )
}


export default Layout