import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={ headerStyles.title }>
                <span>WebDev</span> News
            </h1>
            <p className={ headerStyles.description }>Keeps you to date with Web Development News</p>
        </div>
    )
}

export default Header