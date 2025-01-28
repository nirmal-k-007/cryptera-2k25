import React, { useRef } from 'react'
import '../../Styles/WebDevs.css'
import web_devs_data from '../../Data/web_devs_data'
function WebDevs() {
    const contentref = useRef(null)
    return (
        <div className='webdevs' ref={contentref}>
            <div className='webdevs-container'>
                <div>
                    <h1 className='webdevs-title'>Web Developers</h1>
                    <p className='webdevs-tilte-description'>The team that is similar to the root of the tree</p>
                </div>
                <br /><br /><br />
                <div className='content-container'>
                    {
                        web_devs_data.map((data, index) => (
                            <Web_devs_card data={data} key={index + 1} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WebDevs

const Web_devs_card = (props) => {

    return (
        <div className='web-card'>
            <div className='web-card-image'>
                <img src={props.data.profile} alt='webdevs-1' />
            </div>
            <div className='web-card-content'>
                <div className='name'>{props.data.name}</div>
                <div className='description'>{props.data.about}</div>
                <div className='media-container'>
                    {/* { props.data.portfolio && <a href={props.data.portfolio} target="_blank" ><i class="fas fa-globe" ></i></a> } */}
                    <a href={props.data.instagram} target="_blank" ><i class="fab fa-instagram" ></i></a>
                    <a href={props.data.github} target="_blank" >   <i class="fab fa-github" ></i> </a>
                    <a href={props.data.linkedin} target="_blank">  <i class="fab fa-linkedin"  ></i>            </a>

                </div>
            </div>

        </div>
    )
}
