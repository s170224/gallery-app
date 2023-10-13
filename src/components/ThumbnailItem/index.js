import './index.css'

const ThumbnailItem = props => {
  const {eachImage, clickEachItem} = props
  const {imageUrl, thumbnailUrl, id, thumbnailAltText} = eachImage

  const onClickEachItem = () => {
    clickEachItem(id)
  }

  return (
    <div>
      <li className="list-of-images">
        <button type="button" className="button1" onClick={onClickEachItem}>
          <img className="img1" src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
