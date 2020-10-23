import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { getNewsPaper } from '../redux/actions/newpaper'
import Arrow from '../images/svg/arrowback'
import Slider from 'react-slick'

const GalleryNewPaper = () => {

    const history = useHistory();

    const newspaper = useSelector(state => state.newspaper.newspaper)

    const [ loadingNewspaper, setLoadingNewspaper] = useState(true)

    const dispatch = useDispatch()

    const apiNewsPaper = () => {
        dispatch(getNewsPaper());
        setLoadingNewspaper(false)
    }

    useEffect(() => {
        apiNewsPaper();
    }, [])

    const back = () => {
        history.goBack();
    }

    const settingsNewsPaper = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1  
    };

    if(loadingNewspaper) {
        return 'Loading'
    }

    console.log(newspaper)

    return (
        <Fragment>
            <Header />
            <div className="Detail-new_pm gallery-paper">
                <div className="back">
                    <button onClick={back}><Arrow />Volver</button>
                </div>
            </div>
            <div className="container-detail_new news-search" style={{background: "#f9f9f9"}}>
                <h2>Galería periodística</h2>
                <p className="text">Visita nuestra galería de artículos impresos, conoce más de nosotros y de nuestro compromiso con la sociedad y le medioambiente</p>
                
                <div className="" style={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        margin: "90px auto",
                        height: "auto",
                }}>
                    <Slider {...settingsNewsPaper}>
                        {
                            newspaper && newspaper.length > 0 ?
                            newspaper.map(item => (
                                <div key={item.id} style={{maxWidth: "1440px", margin: "0 auto"}}>
                                    <div className="newpaper-gallery" style={{marginLeft:"20px"}}>
                                        <div className="newpaper-header-gallery">
                                            <img src={`http://` + item.file.url} alt=""/>
                                        </div>
                                        <div className="newpaper-body">
                                            <span>{item.created}</span>
                                            <p>{item.name_newspaper}</p>
                                            <Link to={`/noticias/galeria-periodistica/${item.id}`}>Visualizar</Link>
                                        </div>
                                    </div>
                                </div>
                            )) : ''
                        }
                    </Slider>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default GalleryNewPaper;