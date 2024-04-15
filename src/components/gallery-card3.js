import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card3-image"
      />
      <div className="gallery-card3-container">
        <h1 className="gallery-card3-text">{props.title}</h1>
        <span className="gallery-card3-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard3.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imageAlt: 'image',
  rootClassName: '',
  title: 'Project Title',
}

GalleryCard3.propTypes = {
  imageSrc: PropTypes.string,
  subtitle: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard3
