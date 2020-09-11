import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe("Author Quiz",() => {
    it("render without crashing",() => {
        const div = document.createElement("div");
        ReactDOM.render(<AuthorQuiz />, div);
    });
});
