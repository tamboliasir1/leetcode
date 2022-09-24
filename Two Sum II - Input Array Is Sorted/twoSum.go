package main

import "fmt"

func twoSums(numbers []int, target int) []int {
	i := 0
	j := len(numbers) - 1
	for i < j {
		if numbers[i]+numbers[j] == target {
			break

		}
		if target > (numbers[i] + numbers[j]) {
			i++
		} else {
			j--
		}
	}
	return []int{i + 1, j + 1}
}

func main() {
	fmt.Println(twoSums([]int{2, 7, 11, 15}, 9))
}
