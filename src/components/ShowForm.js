import React, { useState } from 'react'

const SHOWS = [
  {  name: 'Stranger Things', value: 'stranger-things' },
  {  name: 'Girls', value: 'girls' },
  {  name: 'Sex And The City', value: 'sex-and-the-city' },
  {  name: 'The Flash', value: 'the-flash' },
  {  name: 'Gotham', value: 'gotham'}
]

export default function ShowForm(props) {
  const { onSubmit } = props
  const [shows] = useState(SHOWS)
  const [selectedShow, setSelectedShow] = useState(shows[0].value)

  const handleChange = (evt) => {
    const { value } = evt.target
    setSelectedShow(value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    onSubmit(selectedShow)
  }
  return (
    <form>
      <select value={selectedShow} onChange={handleChange}>
        {shows.map((show) => {
          return <option key={show.value} value={show.id}>{show.name}</option>
        })}
      </select>
      <br />
      <button onClick={handleSubmit}>Press to Get Show Data</button>
    </form>
  )
}