import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
const testArticle = {
    id: '', 
    headline: "LALALAL",
    author: 'LALALA',
    createdOn: '',
    summary: "", 
      body: ""
}
const testWithoutAuthor = {
    id: '', 
    headline: "LALALAL",
    author: '',
    createdOn: '',
    summary: "", 
      body: ""
}
test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testWithoutAuthor}/>)
    const author = screen.getByTestId('author')
    expect(author).toHaveTextContent("Associated Press");

});

test('executes handleDelete when the delete button is pressed', ()=> {
    const fakeHandleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={fakeHandleDelete}/>)
    const deleteButton = screen.queryByTestId('deleteButton');
    userEvent.click(deleteButton);
    expect(fakeHandleDelete).toHaveBeenCalled();

});

//Task List:
//1. Complete all above tests. Create test article data when needed.