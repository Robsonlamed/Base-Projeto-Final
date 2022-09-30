export type GetProps = {
  content: [
    {
      id: number
      nome: string
      produtos: [
        {
          id: number
          nome: string
          proximaCompra: string
        }
      ]
    }
  ]
  empty: true
  first: true
  last: true
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: number
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: number
  totalPages: number
}[]
