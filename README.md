# QA Test 2

This documentation is a solution to WalletHub's *QA Test 2*,

written by Gideon Iduma.

### Testing the Account Diversity Grade of a User

#### Task: 

Below you will find the requirements to identify the Account Diversity Grade of a user. Read the requirements carefully and identify what test users you need to setup in order to completely test and make sure all the below requirements are covered.

(Note: you should identify the optimum (minimum) number of users needed to test all of the requirements)

Requirements:

A user can have different types of loan accounts. Now we grade a user's Account Diversity based on two factors.

1. loanTypeCount
2. totalAccounts

loanTypeCount is the number of different (distinct) LoanType values for all account that the user has.

However do not include LoanType = Unknown & Collections but include all others

Applicable value for LoanType = (Home Loan, Heloc, Credit Card, Car Loans, Collection, Unknown).

totalAccounts is the total number of loan accounts a user has (do not include LoanType = Unknown & Collections but include all others).

#### Solution:

Identifying the test users needed to setup can be derived by either factor: total accounts or loan type count.

Given `totalAccounts` ;

And `loanTypeCount` (from 1 to 4);

We can derive a finite and minimum number of users to test by evaluating loanTypeCount.
For every account diversity grade, we must consider a grade that matches the `totalAccounts` and `loanTypeCount`.

We can say `loanTypeCount` = {1, 2, 3, 4} and `usersToTest` = {null, D, C, B, A}

Let us make these values, key-value object:

`accountDiversityGrades` = { (null: 0), (D: 1), (C: 2), (B: 3), (A: 4) }

accountDiversityGrades.length = 5;
We can therefore conclude that the minimum number of users to test is 5;

### Instruction:

- Initialize node package manager (npm) to run and manage the dependencies for the tests.
  From your command line or terminal, run `npm init -y`
- Install JEST globally as it is a great testing library and a major dependency for the tests.
  From your command line or terminal, run `npm install jest --global`
- Import the function `accountDiversityGrade` to run the various user tests.

Now you are ready to use JEST to run the test scripts.

- From your command line or terminal, run `jest <user test>`

## Test for User A

In this test case, we used a testing library (Jest) to create a test case that covers all the possible factors for `'accountDiversityGrade A'` 

i.e. *User A* matches the `totalAccounts` and `loanTypeCount` parameter.

The `accountDiversityGrade` function takes in a `loanTypeCount` parameter, checks for the `totalAccounts` and asserts that the function returns the expected result for grade A.

The account diversity grade is determined as follows:

* If the `loanTypeCount` is 4 and `totalAccounts` > 20, the account diversity grade is "A".

## Test for User B

In this test case, we used a testing library (Jest) to create a test case that covers all the possible factors for `'accountDiversityGrade B'`

i.e. *User B* matches the `totalAccounts` and `loanTypeCount` parameter.

The `accountDiversityGrade` function takes in a `loanTypeCount` parameter, checks for the `totalAccounts` and asserts that the function returns the expected result for grade B.

The account diversity grade is determined as follows:

* If the `loanTypeCount` is 3 and `totalAccounts` > 10, the account diversity grade is "B".

## Test for User C

In this test case, we used a testing library (Jest) to create a test case that covers all the possible factors for `'accountDiversityGrade C'`

i.e. *User C* matches the `totalAccounts` and `loanTypeCount` parameter.

The `accountDiversityGrade` function takes in a `loanTypeCount` parameter, checks for the `totalAccounts` and asserts that the function returns the expected result for grade C.

The account diversity grade is determined as follows:

* If the `loanTypeCount` is 2 and `totalAccounts` >= 5, the account diversity grade is "C".

## Test for User D

In this test case, we used a testing library (Jest) to create a test case that covers all the possible factors for `'accountDiversityGrade D'`

i.e. *User D* matches the `totalAccounts` and `loanTypeCount` parameter.

The `accountDiversityGrade` function takes in a `loanTypeCount` parameter, checks for the `totalAccounts` and asserts that the function returns the expected result for grade D.

The account diversity grade is determined as follows:

* If the `loanTypeCount` is 1 and `totalAccounts` > 0, the account diversity grade is "D".

## Test for User null

In this test case, we used a testing library (Jest) to create a test case that covers all the possible factors for `'accountDiversityGrade NULL'`

i.e. *User NULL* matches the `totalAccounts` and `loanTypeCount` parameter.

The `accountDiversityGrade` function takes in a `loanTypeCount` parameter, checks for the `totalAccounts` and asserts that the function returns the expected result for grade NULL.

The account diversity grade is determined as follows:

* If the `loanTypeCount` is 0 and `totalAccounts` is 0, the account diversity grade is "null".

## Conclusion

By testing all possible factors and their corresponding expected results, we can ensure that the `accountDiversityGrade` function is working correctly and producing the desired results for the various cases.

# Written & Documented by Gideon, I.
