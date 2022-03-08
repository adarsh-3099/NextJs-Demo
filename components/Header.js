import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={ headStyles.title }>
                <span>WebDev</span> News
            </h1>
            <p className={ headStyles.description }>Keeps you to date with Web Development news
            </p>
        </div>
    )
}

export default Header