// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  DisplayLeftReview = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(previousState => ({index: previousState.index - 1}))
    }
  }

  DisplayRightReview = () => {
    const {index} = this.state
    const {reviewsData} = this.props
    const {length} = reviewsData
    if (index < length - 1) {
      this.setState(previousState => ({index: previousState.index + 1}))
    }
  }

  renderReviewComponent = reviewItem => {
    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="review-card">
        <div className="card-image-container">
          <img
            src={imgUrl}
            alt={`${username}-"avatar"`}
            className="card-image"
          />
        </div>
        <div className="card-text-content">
          <h1 className="card-heading">{username}</h1>
          <p className="card-company">{companyName}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    )
  }

  render() {
    const {reviewsData} = this.props
    const {index} = this.state
    const reviewItem = reviewsData[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-carousel-container">
          <button testid="leftArrow" className="button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt=""
              onClick={this.DisplayLeftReview}
            />
          </button>
          {this.renderReviewComponent(reviewItem)}

          <button testid="rightArrow" className="button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt=""
              onClick={this.DisplayRightReview}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
