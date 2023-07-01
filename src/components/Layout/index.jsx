import PropTypes from 'prop-types'
const Layout = ({ children }) => {
    
    Layout.propTypes = {
        children: PropTypes.node
    }

    return (
        <div className='flex flex-col mt-20 items-center'>
            {children}
        </div>
    )
}


export default Layout