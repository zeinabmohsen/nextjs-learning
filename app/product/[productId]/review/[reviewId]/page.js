import React from 'react'

export default function page({params}) {
  return (
    <div>
      review details {params.reviewId} for product {params.productId}
    </div>
  )
}
