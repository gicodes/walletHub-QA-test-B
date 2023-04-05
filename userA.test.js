// Import global testing methods from Jest
const { describe, it, expect } = require('@jest/globals');

// Import the accountDiversityGrade function to be tested
const { accountDiversityGrade } = require('./path/to/file/');

// Define the user test
describe('accountDiversityGrade A', () => {
  it('should return "A" when loanTypeCount is 4', () => {
    // Define the loanTypeCount and initialize totalAccounts
    const loanTypeCount = 4;
    let totalAccounts;
    let result;

    // Check that totalAccounts matches the loanTypeCount
    if (totalAccounts > 20) {
      result = accountDiversityGrade(loanTypeCount);
    }

    else {
      throw new Error('Failed to load loanTypeCount')
    }

    // Assert that the result is correct
    expect(result).toEqual('A');
  });
});
