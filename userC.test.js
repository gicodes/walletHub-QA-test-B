// Import global testing methods from Jest
const { describe, it, expect } = require('@jest/globals');

// Import the accountDiversityGrade function to be tested
const { accountDiversityGrade } = require('./path/to/file/');

// Define the user test
describe('accountDiversityGrade C', () => {
  it('should return "C" when loanTypeCount is 2', () => {
    // Define the loanTypeCount and initialize totalAccounts
    const loanTypeCount = 2;
    let totalAccounts;
    let result;

    // Check that totalAccounts matches the loanTypeCount
    if (totalAccounts >= 5 && totalAccounts < 10) {
      result = accountDiversityGrade(loanTypeCount);
    }

    else {
      throw new Error('Failed to load accountDiversityGrade')
    }

    // Assert that the result is correct
    expect(result).toEqual('C');
  });
});