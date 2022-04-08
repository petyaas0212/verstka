import './Header.css'

const Header = () =>{
    return (
        <div className='Header'>
            <div className='container'>
           <link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap" rel="stylesheet"></link>
           <div className='logo'>
               <img srcSet='Vector (1).svg'></img>
               </div>
            <div className='menu'>
                <li>
                <a href=''>Главная</a>
                </li>
                <li>
                <a href=''>Сеансы</a>
                </li>
                <li>
                <a href=''>Отзывы</a>
                </li>
                <li>
                <a href=''>Контакты</a>
                </li>
                <li>
                <a href=''>Новости</a>
                </li>
                <li>
                <a href=''>Обо мне</a>
                </li>
                <li>
                <a href=''>Блог</a>
                </li>
             
            </div>
            <button className='button'>Записаться на сеанс</button>
            
            </div>
            </div>
        );
    }
    
    export default Header;