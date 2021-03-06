import React, { useEffect } from 'react';
import Logo from '../images/svg/logo';
import '../styles/footer.css'
import ArrowFooter from '../images/svg/arrowfooter'
import $ from 'jquery'


const Footer = () => {

    return (
        <div>
            <div className="Footer-pm">
                <div className="container-footer">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="declaration">
                        <div className="title">
                            <h6>Declaración de beneficiario final</h6>
                            <div className="info-contact">
                                <div className="center">
                                <a rel="noopener noreferrer" target="_blank" href="https://pamolsa.com.pe/web/frontend/files/DECLARACION_BENEFICIARIO_FINAL.pdf">Peruana de Modelos SAC</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="title">
                            <h6>Documento informativo</h6>
                            <div className="info-contact">
                                <div className="center">
                                    <a rel="noopener noreferrer" target="_blank" href="https://pamolsa.com.pe/web/frontend/files/POLITICA_DE_PROTECCION_DE_DATOS2020.pdf">Politica de privacidad</a>
                                </div>
                                {/*<div className="cell">
                                    <a href="">Documento 1</a>
                                </div>
                                <div className="cell">
                                    <a href="">Documento 2</a>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="title">
                            <h6>Contacto</h6>
                            <div className="info-contact">
                                <div className="center">Central: (511) 710 3020</div>
                                <div className="cell">Central de ventas: (01) 641 9595</div>
                                <div className="cell">WhatsApp: 934 440 291</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copy-socials desktop">
                    <div className="copy">
                        <a style={{ textDecoration: "none" }} target="_blank" href="http://www.arquimarkets.com/"><p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p></a>
                    </div>
                    <div className="copy-right">
                        <div className="span">Nuestras redes</div>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/pamolsaoficial" target="_blank"><img src={require('../images/img/facebook.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/13052324/admin/" target="_blank"><img src={require('../images/img/in.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/pamolsa/" target="_blank"><img src={require('../images/img/instagram.png')} /></a>
                        </div>
                    </div>
                </div>
                <div className="copy-socials movil">
                    <div className="copy-right">
                        <div className="span">Nuestras redes</div>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/pamolsaoficial" target="_blank"><img src={require('../images/img/facebook.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/13052324/admin/" target="_blank"><img src={require('../images/img/in.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/pamolsa/" target="_blank"><img src={require('../images/img/instagram.png')} /></a>
                        </div>
                    </div>
                    <div className="copy">
                        <a style={{ textDecoration: "none" }} target="_blank" href="http://www.arquimarkets.com/"><p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p></a>
                    </div>

                </div>
            </div>
            <div className="Footer-pm movil">
                <div className="container-footer">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="accordion-footer">
                        <div className="declaration collapse-footer" id="declaration">
                            <div className="title">
                                <div className="sp-title">
                                    <a rel="noopener noreferrer" href="#declaration" className="">Declaración de beneficiario final</a><ArrowFooter />
                                </div>
                                <div className="info-contact content">
                                    <div className="center">
                                        <a rel="noopener noreferrer" target="_blank" href="https://pamolsa.com.pe/web/frontend/files/DECLARACION_BENEFICIARIO_FINAL.pdf">Peruana de Modelos SAC</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="information collapse-footer" id="information">
                            <div className="title">
                                <div className="sp-title">
                                    <a href="#information" className="">Documento informativo</a><ArrowFooter />
                                </div>
                                <div className="info-contact content">
                                    <div className="center">
                                        <a rel="noopener noreferrer" target="_blank" href="https://pamolsa.com.pe/web/frontend/files/POLITICA_DE_PROTECCION_DE_DATOS2020.pdf">Politica de privacidad</a>
                                    </div>
                                    <div className="cell">
                                        <a rel="noopener noreferrer" target="_blank" href="">Documento 1</a>
                                    </div>
                                    <div className="cell">
                                        <a rel="noopener noreferrer" target="_blank" href="">Documento 2</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact collapse-footer" id="contact">
                            <div className="title">
                                <div className="sp-title">
                                    <a rel="noopener noreferrer" href="#contact" className="">Contacto</a><ArrowFooter />
                                </div>
                                <div className="info-contact content">
                                    <div className="center">Central: (511) 710 3020</div>
                                    <div className="cell">Central de ventas: (01) 641 9595</div>
                                    <div className="cell">WhatsApp: 934 440 291</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="copy-socials desktop">
                    <div className="copy">
                        <a style={{ textDecoration: "none" }} target="_blank" href="http://www.arquimarkets.com/"><p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p></a>
                    </div>
                    <div className="copy-right">
                        <div className="span">Nuestras redes</div>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/pamolsaoficial" target="_blank"><img src={require('../images/img/facebook.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/13052324/admin/" target="_blank"><img src={require('../images/img/in.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/pamolsa/" target="_blank"><img src={require('../images/img/instagram.png')} /></a>
                        </div>
                    </div>
                </div>
                <div className="copy-socials movil">
                    <div className="copy-right">
                        <div className="span">Nuestras redes</div>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/pamolsaoficial" target="_blank"><img src={require('../images/img/facebook.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/13052324/admin/" target="_blank"><img src={require('../images/img/in.png')} /></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/pamolsa/" target="_blank"><img src={require('../images/img/instagram.png')} /></a>
                        </div>
                    </div>
                    <div className="copy">
                        <a style={{ textDecoration: "none" }} target="_blank" href="http://www.arquimarkets.com/"><p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;