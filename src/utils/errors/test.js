import {parseResponseErrors} from './';

it('Should return a list of errors', () => {
  const errorMessage = 'An error occurred.';

  const response = {
    data: {
      errors: [{message: errorMessage}]
    }
  };

  const expected = [errorMessage];

  expect(parseResponseErrors(response)).toEqual(expected);
});
