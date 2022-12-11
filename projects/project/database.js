export const getReview = () => {
  const reviews = localStorage.reviews

  return JSON.parse(reviews || "[]")
}

export const addReview = review => {
  localStorage.reviews = JSON.stringify([...getReview(), review])
}