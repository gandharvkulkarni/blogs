'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'

const PaginationControls = (
  {
    hasNextPage,
    hasPrevPage,
    dataLength
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '10'

  return (
    <div className='flex gap-2 justify-end items-center my-2'>
      <Button
        varient="secondary"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Prev
      </Button>

      <div>
        {page} / {Math.ceil(dataLength / Number(per_page))}
      </div>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next
      </Button>
    </div>
  )
}

export default PaginationControls