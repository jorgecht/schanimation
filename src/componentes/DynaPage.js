import { Component, Fragment } from "react";
import '../css/menubar.css'
import { FaMailBulk, FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsArrowsFullscreen, BsFileSpreadsheet } from "react-icons/bs";

class DynaPage extends Component {
    render() {

        return (
            <Fragment>
                <div className="main-content">
                    <nav className="main-nav">
                        <ul className="menu">
                            <li className="menu__item">
                                <a className="menu__link" href="#">esade</a>
                            </li>
                            <li className="menu__item centered">
                                <a className="menu__linkc" href="#">Meet Esade</a>
                                <a className="menu__linkc" href="#">Programmers</a>
                                <a className="menu__linkc" href="#">Admissions</a>
                                <a className="menu__linkc" href="#">Campuses</a>
                                <a className="menu__linkc" href="#">Student Life</a>
                                <a className="menu__linkc" href="#">Contact</a>
                                <a className="redbutton" type="button">Upcoming Events</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><FaSearch /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><FaMailBulk /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><FaFacebookF /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><FaTwitter /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><FaLinkedinIn /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><BsFileSpreadsheet /></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#"><BsArrowsFullscreen /></a>
                            </li>



                        </ul>
                    </nav>
                </div>
                <div className="navpresentation">
                    <div class="container">
                        <div class="vertical-center">
                            <p>Es el proceso de facilitar el aprendizaje o la adquisición de conocimientos,
                                así como habilidades, valores, creencias y hábitos. El proceso educativo se da a
                                través de la investigación, el debate, la narración de cuentos, la discusión, la enseñanza,
                                el ejemplo y la formación en general. La educación no solo se produce a través de la palabra,
                                pues además está presente en todas nuestras acciones, sentimientos y actitudes.
                                Generalmente, la educación se lleva a cabo bajo la dirección de las figuras de autoridad:
                                los padres, los educadores</p>
                        </div>
                    </div>
               
                    <div class="container">
                        <div class="vertical-center">
                            <p>Es el proceso de facilitar el aprendizaje o la adquisición de conocimientos,
                                así como habilidades, valores, creencias y hábitos. El proceso educativo se da a
                                través de la investigación, el debate, la narración de cuentos, la discusión, la enseñanza,
                                el ejemplo y la formación en general. La educación no solo se produce a través de la palabra,
                                pues además está presente en todas nuestras acciones, sentimientos y actitudes.
                                Generalmente, la educación se lleva a cabo bajo la dirección de las figuras de autoridad:
                                los padres, los educadores</p>
                        </div>
                    </div>
                
                    <div class="container">
                        <div class="vertical-center">
                            <p>Es el proceso de facilitar el aprendizaje o la adquisición de conocimientos,
                                así como habilidades, valores, creencias y hábitos. El proceso educativo se da a
                                través de la investigación, el debate, la narración de cuentos, la discusión, la enseñanza,
                                el ejemplo y la formación en general. La educación no solo se produce a través de la palabra,
                                pues además está presente en todas nuestras acciones, sentimientos y actitudes.
                                Generalmente, la educación se lleva a cabo bajo la dirección de las figuras de autoridad:
                                los padres, los educadores</p>
                        </div>
                    </div>
               
                    <div class="container">
                        <div class="vertical-center">
                            <p>Es el proceso de facilitar el aprendizaje o la adquisición de conocimientos,
                                así como habilidades, valores, creencias y hábitos. El proceso educativo se da a
                                través de la investigación, el debate, la narración de cuentos, la discusión, la enseñanza,
                                el ejemplo y la formación en general. La educación no solo se produce a través de la palabra,
                                pues además está presente en todas nuestras acciones, sentimientos y actitudes.
                                Generalmente, la educación se lleva a cabo bajo la dirección de las figuras de autoridad:
                                los padres, los educadores</p>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }

}

export default DynaPage


