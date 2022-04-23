# amd-coding-exercises
GitHub repository for the solutions of the AMD Coding Exercises - Interview.

## Table of Contents
- [Python Questions](#python-questions)
  1. Max Value from a list of Integers (Recursion)
  2. JSON Transformation
  3. Convert String to List of Pairs (Recursion)
- [React UI Implementation](#react-ui-implementation)
- [Javascript Questions](#javascript-questions)
  1. Top 2 Ranked Products
  2. 2-D Array Transformation
- [SQL Questions](#sql-questions)
  1. Rank Products by Company
  2. 2nd Most Expensive Product by Company

## Python Questions
### 1) Implement `max()` to return the max value from a list of integers using recursion
The solution for this problem is in the file [maxElement.py](./Python/maxElement.py)

At each step, I recursively find the max element in the list without the first element. Then I compare this max element to the first element and return which ever is greater.
The base case is when the length of the list becomes 0.
> I have assumed that if the input list is empty, the function will return -1.


### 2) Implement the below transformation on a JSON object
#### Input:
```javascript
{
  "superheros": [
    {"name": "batman", "id": 1, "city": "gotham"},
    {"name": "spiderman", "id": 2, "city": "NYC"},
    {"name": "superman", "id": 3, "city": "NYC"}
  ]
}
```
#### Output:
```javascript
{
  "superherosbyCity": [
    {"gotham": ["batman"]},
    {"NYC": ["spiderman", "superman"]}
  ]
}
```
The solution for this problem is in the file [jsonTransform.py](./Python/jsonTransform.py)

I have created a `JSON` file ([data.json](./Python/data.json)) for the input, from which I read and then perform the transformation. In the `transform` function, I first loop through the
`superheros` list and create the `superherosbyCity` list containg each superhero's city. Then I loop through the `superheros` again and for each superhero,
I append their name to their city's list in `superherosbyCity`. Finally, I take this transformation and write it back to the [transformedData.json](./Python/transformedData.json) file.

### 3) Implement a python recursive function which accepts a string and yields the output as below
#### Input:
```python
"123R456"
```
#### Output:
```python
[(1,6),(2,5),(3,4),(R,)]
```
The solution for this problem is in the file [stringPairs.py](./Python/stringPairs.py)

At each step, I recursively compute the output list by removing the first and last element from the list. Then I append the pair of the first and last element
to the output list that has the pairs for the rest of the elements. The base case for input string of even length is when there are only 2 elements left in the
string, I make a pair of those 2 elements and return it. The base case for input string of odd length is when there is only 1 element left.

## React UI Implementation
Build a User Interface in React.
#### Requirements
- Create an application that accepts words from a user and sorts the words alphabetically into four columns, vertically, then horizontally.
- The last row should be the only row that contains any empty cells if the number of words is not evenly divisible by 4.
- Click "Arrange" / Enter to sort and arrange.
- Click a word to remove it and resort and re-arrange.
- Click "Reset" to start over.

For this exercise, I have created a simple React application ([react-amd](./react-amd)) using `create-react-app`. Inside the `src` directory, I have created
a `components` directory which contains the files `MainComponent.jsx` and `WordTile.jsx`. These two files are where all the logic happens and the main UI is implemented.

The `MainComponent.jsx` file exports a functional component which returns a `div` containing the input field, the 'Arrange' and 'Reset' buttons and the grid
to display the words. The component also contains two state variables: `wordInput` (To store the input field value) and `wordList` (To store the list of words
in the input after they are sorted and arranged in the correct order). Finally, the component has 5 functions which perform various tasks:-
- `arrangeSortedList()` - The function takes in an alphabetically sorted array of words and returns an array with those words arranged in the required order.
- `handleArrange()` - This function runs everytime the 'Arrange' button is pressed. It splits the input string into an array of words and sorts them alphabetically. Then it calls the `arrangeSortedList()` function and stores the output in the `wordList` state variable.
- `handleReset()` - This function runs everytime the 'Reset' button is pressed. It resets the input string and the `wordList` array to empty.
- `removeWord()` - This function runs when a word inside the grid is pressed. It removes the word from the grid and rearranges the array by calling `arrangeSortedList()`. It is sent as a prop to the `WordTile` component.
- `handleEnter()` - When a user presses the "Enter/return" key instead of the 'Arrange' button, this function is triggered which then simply calls the `handleArrange()` function.

For the word grid, I have used a grid (using Flexbox) of 4 columns which maps through the `wordList` array and returns the `WordTile` component for each word.

The `WordTile.jsx` file also exports a functional component which is used to display each word in the grid. It accepts `word` and `removeWord()` as props.

> I have made use of the [MaterialUI](https://mui.com) library for its `Grid` component as it saves time.

## Javascript Questions
### 1) Given a JSON as below, write a function that returns top 2 rank products
#### Input:
```javascript
const productRankings = [
  {name: "AMD_Product-A", rank: 1},
  {name: "AMD_Product-B", rank: 10},
  {name: "AMD_Product-C", rank: 2},
  {name: "AMD_Product-X", rank: 4}
]
```
#### Output:
```javascript
{
  top2: ["AMD_Product-A", "AMD_Product-C"]
}
```
The solution for this problem in in the file [top2Rank.js](./Javascript/top2Rank.js)

I simply sort the products based on their rankings, then I slice the top 2 ranked products from the array and map through them to return an array with their names.
I have created a `HTML` file so that I could run the code on the browser.

### 2) Given a 2D array, implement the “transform” function to produce the desired output
#### Input:
```javascript
const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data = [d1, d2, d3];
```
#### Implement:
```javascript
function transform(data) {
  ...
  ...
}

transform(data)
```
The solution for this problem is in the file [2dTransform.js](./Javascript/2dTransform.js)

Here, we know that the last row might be of a larger size than the first row, so first I increase the size of the first row to match the size of the last row. I do this by padding the first row with `undefined`.
Next, I simply loop through each element of the first row, and for each element, I map through the corresponding column in all the other rows to get the desired output.

For this also, I have used the `HTML` file to run the Javascript code on the browser. To run this code, simple comment-out the `script` tag for `top2Rank.js` file and uncomment the `script` tag for `2dTransform.js` file.
> The code in both Javascript problems is declarative in nature.

## SQL Questions
Given you have a table called `product_price` as below:
| Brand | Name     | Price |
| ----- | -------- | ----- |
| AMD   | Product1 | 10    |
| AMD   | Product2 | 30    |
| AMD   | Product3 | 60    |
| AMD   | Product5 | 40    |
| ACME  | Product1 | 44    |
| ACME  | Product2 | 1     |
| ACME  | Product4 | 90    |

### 1) Write a SQL query to rank the products by price and by company
#### Expected Result
| Brand | Name     | Price | Rank |
| ----- | -------- | ----- | ---- |
| AMD   | Product1 | 10    | 4    |
| AMD   | Product2 | 30    | 3    |
| AMD   | Product3 | 60    | 1    |
| AMD   | Product5 | 40    | 2    |
| ACME  | Product1 | 44    | 2    |
| ACME  | Product2 | 1     | 3    |
| ACME  | Product4 | 90    | 1    |

The solution with the SQL query for this problem is in the file [rankProducts.sql](./SQL/rankProducts.sql)

In this query, I make the use of a sub-query to compute the rank of each product for the two brands.

### 2) Write a SQL query to return the 2nd most expensive product by company
#### Expected Result
| Brand | Name     | Price | Rank |
| ----- | -------- | ----- | ---- |
| AMD   | Product5 | 40    | 2    |
| ACME  | Product1 | 44    | 2    |

The solution with the SQL query for this problem is in the file [2ndMostExpensive.sql](./SQL/2ndMostExpensive.sql)

In this query, I make the use of sub-queries along with the `WHERE` and `GROUP BY` clauses to compute the rank of each product for the two brands, and then display the 2nd most expensive product for each brand.

## Author

👤 **Kunal Kashyap**

- LinkedIn: [Kunal Kashyap](https://www.linkedin.com/in/kunal-kashyap-233a9914a/)
- Github: [@kunalkashyap855](https://github.com/kunalkashyap855)
- Instagram: [@thatwebdevguy](https://www.instagram.com/thatwebdevguy)
