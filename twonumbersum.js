const twoSum = (arr, target) => {
  const numObj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const complement = target - currentElement;
    // Example: If target = 10 and currentElement = 3, then complement = 10 - 3 = 7
    // If 7 exists in the array, we have found a pair (3, 7) whose sum is 10

    console.log(`Iteration ${i + 1}:`);
    console.log(`  Current element: ${currentElement}`);
    console.log(`  Complement sought: ${complement}`);

    if (complement in numObj) {
      // Example: If complement = 7 and numObj = {3: 0}, then this condition is true

      console.log(
        `  Complement found! Adding [${complement}, ${currentElement}] to the result`
      );
      result.push([complement, currentElement]);
      // If the condition is true, we add the pair to the result variable
      // For example, if complement = 7 and currentElement = 3, result becomes [[7, 3]]
    }

    numObj[currentElement] = i;
    // Example: If currentElement = 3 and i = 0, this becomes:
    // numObj[3] = 0;
    // This means that the number 3 was found at index 0 of the array

    console.log(`  Adding ${currentElement} to numObj`);
    console.log(`  numObj after addition: `, numObj);
    console.log("------------------------");
  }

  logResult(result);
  return result;
};

const logResult = (result) => {
  console.log(
    result.length > 0 ? `${result.length} pair(s) found` : "No pairs found"
  );
};

const arr = [3, 5, -4, 8, 11, 1, -1, 6, 4];
const target = 10;

console.log("Final result:", twoSum(arr, target));
