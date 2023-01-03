import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="img-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
