// 输入n个整数，找出其中最小的K个数。
// 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if (input === null) {
    	return null;
    }
    if (input.length < k) {
    	return [];
    }
    input.sort((a,b) => a-b);
    var res = input.slice(0,k);
    return res;
}

console.log(GetLeastNumbers_Solution([1,8,5,6,7],3));
