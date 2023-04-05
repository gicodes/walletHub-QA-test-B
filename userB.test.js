// Import global testing methods from Jest
const { describe, it, expect } = require('@jest/globals');

// Import the accountDiversityGrade function to be tested
const { accountDiversityGrade } = require('./path/to/file/');

// Define the user test
describe('accountDiversityGrade B', () => {
  it('should return "B" when loanTypeCount is 3', () => {
    // Define the loanTypeCount and initialize totalAccounts
    const loanTypeCount = 3;
    let totalAccounts;
    let result;

    // Check that totalAccounts matches the loanTypeCount
    if (totalAccounts > 10 && totalAccounts <= 20) {
      result = accountDiversityGrade(loanTypeCount);
    }

    else {
      throw new Error('Failed to load accountDiversityGrade')
    }

    // Assert that the result is correct
    expect(result).toEqual('B');
  });
});
