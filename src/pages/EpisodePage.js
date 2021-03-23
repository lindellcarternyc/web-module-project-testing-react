import React from 'react'
import { useHistory, useParams } from 'react-router'
import Episode from '../components/Episode'

const EpisodePage = (props) => {
  const { season } = props
  const { episodeId } = useParams()
  const history = useHistory()

  const onClick = () => history.push('/')

  if (season === null) {
    return null
  }

  const episode = season.episodes.find(e => e.id === parseInt(episodeId))
  
  return (
    <div>
      <button onClick={onClick}>Back</button>
      <Episode episode={episode} />
    </div>
  )
}

export default EpisodePage