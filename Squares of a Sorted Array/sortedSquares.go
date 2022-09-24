package main

import (
	"fmt"
)

func sortedSquares(nums []int) []int {
	for index, num := range nums {
		nums[index] = num * num
	}

	fmt.Println(nums)
	for curr := 1; curr <= len(nums)-1; curr = 2 * curr {
		for left := 0; left < len(nums)-1; left += 2 * curr {
			mid := min((curr + left - 1), len(nums)-1)
			right := min((left + 2*curr - 1), len(nums)-1)

			nums = sort(nums, left, mid, right)
		}
	}
	return nums
}

func sort(nums []int, left int, mid int, right int) []int {
	i, j, k := 0, 0, 0
	n1 := mid - left + 1
	n2 := right - mid

	leftArr := make([]int, n1)
	rightArr := make([]int, n2)

	for i = 0; i < n1; i++ {
		leftArr[i] = nums[left+i]
	}
	for j = 0; j < n2; j++ {
		rightArr[j] = nums[mid+j+1]
	}

	i, j, k = 0, 0, left

	for i < n1 && j < n2 {
		if leftArr[i] <= rightArr[j] {
			nums[k] = leftArr[i]
			i++
		} else {
			nums[k] = rightArr[j]
			j++
		}
		fmt.Println(leftArr, rightArr, nums, i, j, k)
		k++
	}

	for i < n1 {
		nums[k] = leftArr[i]
		i++
		k++
	}

	for j < n2 {
		nums[k] = rightArr[j]
		j++
		k++
	}
	return nums
}

func min(a, b int) int {
	if a < b {
		return a
	}

	return b
}

func main() {
	fmt.Println(sortedSquares([]int{-4, -1, 0, 10, 3}))
}
