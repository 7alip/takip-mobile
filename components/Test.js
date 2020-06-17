import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Text, Card } from '@ui-kitten/components'

const GET_BANKS = gql`
  query GetBooks {
    book {
      title
    }
  }
`

const Test = () => {
  const { loading, error, data } = useQuery(GET_BANKS)

  if (loading) return <Text>Loading</Text>
  if (error) return <Text>Error</Text>

  return data.book.map(b => (
    <Card key={b.title}>
      <Text>{b.title}</Text>
    </Card>
  ))
}

export default Test
