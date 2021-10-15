import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
const testArticle = [{
    id: '', 
    headline: "LALALAL",
    author: 'LALALA',
    createdOn: '',
    summary: "", 
      body: ""
},{
    id: '', 
    headline: "LALALAL",
    author: 'LALALA',
    createdOn: '',
    summary: "", 
      body: ""
},{
    id: '', 
    headline: "LALALAL",
    author: 'LALALA',
    createdOn: '',
    summary: "", 
      body: ""
}]

test("renders zero articles without errors", async () => {
    render(<View articles={testArticle}/>)
});

test("renders three articles without errors", async ()=> {
    render(<View articles={testArticle}/>)
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.