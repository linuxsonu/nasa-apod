import React from 'react'

export default function SideBar(props) {
    const {setShowModal, data} = props
  return (
    <div className='sidebar'>
        <div className='bgOverlay' onClick={() => setShowModal(false)}></div>
        <div className='sidebarContents'>
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
