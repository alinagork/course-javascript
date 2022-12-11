export const formTemplate = `
<form data-role="review-form" class="form" id="add-form">
  <h3>Отзыв:</h3>
  <div class="field">
    <input data-role="review-name" type="text" placeholder="Укажите ваше имя" name="author">
  </div>
  <div class="field">
    <input data-role="review-place" type="text" placeholder="Укажите место" name="place">
  </div>
  <div class="field">
    <textarea data-role="review-text" rows="5" placeholder="Оставьте отзыв" name="textReview"></textarea>
  </div>

  <button data-role="review-add" id="add-btn">Добавить</button>
  <span class="form-error"></span>
</form>
`

export const reviewsTemplate = review => {
  return `
  <div class="review">
    <div><strong>Имя: </strong>${review.author}</div>
    <div><strong>Место: </strong>${review.place}</div>
    <div><strong>Отзыв: </strong>${review.reviewText}</div>
  </div>
  `
}