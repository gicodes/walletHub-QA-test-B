// Import global testing methods from Jest
const { describe, it, expect } = require('@jest/globals');

// Import the accountDiversityGrade function to be tested
const { accountDiversityGrade } = require('./path/to/file/');

// Define the user test
describe('accountDiversityGrade NULL', () => {
  it('should return null when loanTypeCount is null', () => {
    // Define the loanTypeCount and initialize totalAccounts
    const loanTypeCount = null;
    let totalAccounts;
    let result;

    // Check that totalAccounts matches the loanTypeCount
    if (totalAccounts === null || totalAccounts === 0) {
      result = accountDiversityGrade(loanTypeCount);
    }

    else {
      throw new Error('Failed to load accountDiversityGrade')
    }

    // Assert that the result is correct
    expect(result).toBeNull();
  });
});