import PropTypes from 'prop-types'
import CheckoutSideMenu from '../CheckoutSideMenu'
const Layout = ({ children }) => {
    
    Layout.propTypes = {
        children: PropTypes.node
    }

    // items center
    return (
        <div className='flex flex-col mt-20 '>
            {children}
            <CheckoutSideMenu />
        </div>
    )
}


export default Layout