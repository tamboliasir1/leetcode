package main

import "fmt"

func reverse(nums *[]int, start int, end int) {
	for start < end {
		(*nums)[start], (*nums)[end] = (*nums)[end], (*nums)[start]
		start++
		end--
	}

}

func rotate(nums []int, k int) {

	reverse(&nums, 0, len(nums)-1)
	reverse(&nums, 0, k-1)
	reverse(&nums, k, len(nums)-1)

	fmt.Println(nums)
}

func main() {
	rotate([]int{1, 2, 3, 4, 5, 6}, 2)
}
