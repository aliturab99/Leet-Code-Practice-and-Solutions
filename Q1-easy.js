// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,5,5,11]
const target = 10
var twoSum = function(nums, target) {
    for( let i = 0; i < nums.length; i++)
    {
        for(let y = 1; y < nums.length; y++){
            if(i !== y){
                if( nums[i] + nums[y] === target ){
                    return [i,y]
                }
            }
        }
    }
};


console.log(twoSum(nums, target))