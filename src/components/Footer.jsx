import React from 'react'

export default function Footer(props) {
  const {setShowModal, data} = props
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>Apod PROJECT</h1>
      </div>
      <button onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}
