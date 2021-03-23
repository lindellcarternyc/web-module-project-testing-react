import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    ...testEpisode,
    image: null
}

const renderEpisode = ({episode}) => {
  return render(<Episode episode={episode}/>, { wrapper: MemoryRouter })
}

test("renders without error", () => {
  // render(<Episode episode={testEpisode} />)
  renderEpisode({ episode: testEpisode })
});

test("renders the summury test passed as prop", ()=>{
  // TASK 2...
  const testEpisodeWithCustomSummary = {
    ...testEpisode,
    summary: 'This is a summary'
  }

  renderEpisode({ episode: testEpisodeWithCustomSummary})
  const summary = screen.queryByText(testEpisodeWithCustomSummary.summary)

  expect(summary).not.toBeNull()
  expect(summary).toBeInTheDocument()
  expect(summary).toHaveTextContent(testEpisodeWithCustomSummary.summary)
});

test("renders default image when image is not defined", ()=>{
    renderEpisode({ episode: testEpisodeWithoutImage })

    const image = screen.queryByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', './stranger_things.png')
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.