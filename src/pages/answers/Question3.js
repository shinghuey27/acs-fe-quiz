export default function Question3() {
  const twoSum = function (numbers, target) {
    const length = numbers.length;

    //left start with index 0 , right start from the end -1 because index start from 0
    for (let left = 0, right = length - 1; left < right; ) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        //if sum match with target then return index + 1 because index start from 0
        return `[${left + 1}, ${right + 1}]`;
      } else if (sum > target) {
        //if some is larger than target, move right pointer to left,
        right--;
      } else {
        //if some is smaller than target, move left pointer to righ,
        left++;
      }
    }
    console.log(twoSum([4, 11, 17, 25], 21));
    console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
    console.log(twoSum([-1, 0], -1));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
        margin: "auto",
      }}
    >
      <h1> Question 3</h1>

      <div style={{ marginBottom: ".5rem" }}>
        1. [4, 11, 17, 25] target : 21
        <br /> Output: {twoSum([4, 11, 17, 25], 21)}
      </div>

      <div style={{ marginBottom: ".5rem" }}>
        2. [0, 1, 2, 2, 3, 5] target : 4
        <br /> Output: {twoSum([0, 1, 2, 2, 3, 5], 4)}
      </div>

      <div>
        3. [-1,0] target : -1
        <br /> Output: {twoSum([-1, 0], -1)}
      </div>
    </div>
  );
}
