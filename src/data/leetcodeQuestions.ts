// Sample dataset of LeetCode-style questions
 export const leetcodeQuestions = [
  
  {
    "id": "two-sum",
    "title": "Two Sum",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    "examples": [
      { "input": "nums = [2,7,11,15], target = 9", "output": "[0,1]" }
    ],
    "constraints": ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i], target ≤ 10⁹", "One valid answer exists."],
    "starterCode": {
      "javascript": "function twoSum(nums, target) {\n  // Write code here\n}",
      "typescript": "function twoSum(nums: number[], target: number): number[] {\n  // Write code here\n}",
      "python": "def two_sum(nums, target):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    // Write code here\n  }\n}",
      "cpp": "vector<int> twoSum(vector<int>& nums, int target) {\n  // Write code here\n}"
    }
  },
  {
    "id": "two-sum-ii",
    "title": "Two Sum II - Input Array Is Sorted",
    "description": "Given a 1-indexed array of sorted numbers, find two numbers that add up to `target`.",
    "examples": [
      { "input": "numbers = [2,7,11,15], target = 9", "output": "[1,2]" }
    ],
    "constraints": ["2 ≤ numbers.length ≤ 10⁴", "numbers is sorted", "-10⁹ ≤ numbers[i], target ≤ 10⁹"],
    "starterCode": {
      "javascript": "function twoSumII(numbers, target) {\n  // Write code here\n}",
      "typescript": "function twoSumII(numbers: number[], target: number): number[] {\n  // Write code here\n}",
      "python": "def two_sum_ii(numbers, target):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int[] twoSumII(int[] numbers, int target) {\n    // Write code here\n  }\n}",
      "cpp": "vector<int> twoSumII(vector<int>& numbers, int target) {\n  // Write code here\n}"
    }
  },
  {
    "id": "add-two-numbers",
    "title": "Add Two Numbers",
    "description": "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
    "examples": [
      { "input": "l1 = [2,4,3], l2 = [5,6,4]", "output": "[7,0,8]" }
    ],
    "constraints": ["The lists represent numbers in reverse order", "Each node's value is in [0,9]"],
    "starterCode": {
      "javascript": "function addTwoNumbers(l1, l2) {\n  // Write code here\n}",
      "typescript": "function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {\n  // Write code here\n}",
      "python": "def add_two_numbers(l1, l2):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    // Write code here\n  }\n}",
      "cpp": "ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n  // Write code here\n}"
    }
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "description": "Given a string `s`, return the length of the longest substring without repeating characters.",
    "examples": [
      { "input": "s = \"abcabcbb\"", "output": "3" }
    ],
    "constraints": ["0 ≤ s.length ≤ 5 × 10⁴", "s consists of ASCII characters"],
    "starterCode": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  // Write code here\n}",
      "typescript": "function lengthOfLongestSubstring(s: string): number {\n  // Write code here\n}",
      "python": "def length_of_longest_substring(s):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int lengthOfLongestSubstring(String s) {\n    // Write code here\n  }\n}",
      "cpp": "int lengthOfLongestSubstring(string s) {\n  // Write code here\n}"
    }
  },
  {
    "id": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "description": "Given two sorted arrays `nums1` and `nums2`, return the median of the two sorted arrays.",
    "examples": [
      { "input": "nums1 = [1,3], nums2 = [2]", "output": "2.0" }
    ],
    "constraints": ["0 ≤ m, n ≤ 10⁶", "-10⁶ ≤ nums[i] ≤ 10⁶"],
    "starterCode": {
      "javascript": "function findMedianSortedArrays(nums1, nums2) {\n  // Write code here\n}",
      "typescript": "function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n  // Write code here\n}",
      "python": "def find_median_sorted_arrays(nums1, nums2):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    // Write code here\n  }\n}",
      "cpp": "double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n  // Write code here\n}"
    }
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "description": "Given a string `s`, return the longest palindromic substring in `s`.",
    "examples": [
      { "input": "s = \"babad\"", "output": "\"bab\"" }
    ],
    "constraints": ["1 ≤ s.length ≤ 1000", "s consists of printable ASCII characters"],
    "starterCode": {
      "javascript": "function longestPalindrome(s) {\n  // Write code here\n}",
      "typescript": "function longestPalindrome(s: string): string {\n  // Write code here\n}",
      "python": "def longest_palindrome(s):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public String longestPalindrome(String s) {\n    // Write code here\n  }\n}",
      "cpp": "string longestPalindrome(string s) {\n  // Write code here\n}"
    }
  },
  {
    "id": "zigzag-conversion",
    "title": "ZigZag Conversion",
    "description": "Convert a string to ZigZag pattern on a given number of rows, then read line by line.",
    "examples": [
      { "input": "s = \"PAYPALISHIRING\", numRows = 3", "output": "\"PAHNAPLSIIGYIR\"" }
    ],
    "constraints": ["1 ≤ s.length ≤ 1000", "1 ≤ numRows ≤ 1000"],
    "starterCode": {
      "javascript": "function convertZigZag(s, numRows) {\n  // Write code here\n}",
      "typescript": "function convertZigZag(s: string, numRows: number): string {\n  // Write code here\n}",
      "python": "def convert_zigzag(s, numRows):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public String convert(String s, int numRows) {\n    // Write code here\n  }\n}",
      "cpp": "string convert(string s, int numRows) {\n  // Write code here\n}"
    }
  },
  {
    "id": "reverse-integer",
    "title": "Reverse Integer",
    "description": "Given a signed 32-bit integer `x`, return `x` with its digits reversed. Return 0 when the reversed integer overflows.",
    "examples": [
      { "input": "x = 123", "output": "321" }
    ],
    "constraints": ["-2³¹ ≤ x ≤ 2³¹−1"],
    "starterCode": {
      "javascript": "function reverse(x) {\n  // Write code here\n}",
      "typescript": "function reverse(x: number): number {\n  // Write code here\n}",
      "python": "def reverse(x):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int reverse(int x) {\n    // Write code here\n  }\n}",
      "cpp": "int reverse(int x) {\n  // Write code here\n}"
    }
  },
  {
    "id": "string-to-integer-atoi",
    "title": "String to Integer (atoi)",
    "description": "Implement `myAtoi(string s)` which converts a string to a 32-bit signed integer similar to C/C++ `atoi`.",
    "examples": [
      { "input": "s = \"42\"", "output": "42" }
    ],
    "constraints": ["0 ≤ s.length ≤ 200", "Only whitespace and digits, plus signs, minus signs allowed"],
    "starterCode": {
      "javascript": "function myAtoi(s) {\n  // Write code here\n}",
      "typescript": "function myAtoi(s: string): number {\n  // Write code here\n}",
      "python": "def my_atoi(s):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int myAtoi(String s) {\n    // Write code here\n  }\n}",
      "cpp": "int myAtoi(string s) {\n  // Write code here\n}"
    }
  },
  {
    "id": "palindrome-number",
    "title": "Palindrome Number",
    "description": "Given an integer `x`, return `true` if `x` is palindrome, otherwise `false`.",
    "examples": [
      { "input": "x = 121", "output": "true" }
    ],
    "constraints": ["-2³¹ ≤ x ≤ 2³¹−1"],
    "starterCode": {
      "javascript": "function isPalindrome(x) {\n  // Write code here\n}",
      "typescript": "function isPalindrome(x: number): boolean {\n  // Write code here\n}",
      "python": "def is_palindrome(x):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public boolean isPalindrome(int x) {\n    // Write code here\n  }\n}",
      "cpp": "bool isPalindrome(int x) {\n  // Write code here\n}"
    }
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "description": "Given `height[]`, find two lines that together with x-axis forms a container, so the container contains the most water.",
    "examples": [
      { "input": "height = [1,8,6,2,5,4,8,3,7]", "output": "49" }
    ],
    "constraints": ["2 ≤ height.length ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    "starterCode": {
      "javascript": "function maxArea(height) {\n  // Write code here\n}",
      "typescript": "function maxArea(height: number[]): number {\n  // Write code here\n}",
      "python": "def max_area(height):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public int maxArea(int[] height) {\n    // Write code here\n  }\n}",
      "cpp": "int maxArea(vector<int>& height) {\n  // Write code here\n}"
    }
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "description": "Given an array `nums`, find all unique triplets where the sum is zero.",
    "examples": [
      { "input": "nums = [-1,0,1,2,-1,-4]", "output": "[[-1,-1,2],[-1,0,1]]" }
    ],
    "constraints": ["0 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    "starterCode": {
      "javascript": "function threeSum(nums) {\n  // Write code here\n}",
      "typescript": "function threeSum(nums: number[]): number[][] {\n  // Write code here\n}",
      "python": "def three_sum(nums):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public List<List<Integer>> threeSum(int[] nums) {\n    // Write code here\n  }\n}",
      "cpp": "vector<vector<int>> threeSum(vector<int>& nums) {\n  // Write code here\n}"
    }
  },
  {
    "id": "letter-combinations-of-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "description": "Given a digit string, return all possible letter combinations that the number could represent.",
    "examples": [
      { "input": "digits = \"23\"", "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" }
    ],
    "constraints": ["0 ≤ digits.length ≤ 4", "digits contains 2-9 only"],
    "starterCode": {
      "javascript": "function letterCombinations(digits) {\n  // Write code here\n}",
      "typescript": "function letterCombinations(digits: string): string[] {\n  // Write code here\n}",
      "python": "def letter_combinations(digits):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public List<String> letterCombinations(String digits) {\n    // Write code here\n  }\n}",
      "cpp": "vector<string> letterCombinations(string digits) {\n  // Write code here\n}"
    }
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "description": "Merge `k` sorted linked lists and return it as one sorted list.",
    "examples": [
      { "input": "lists = [[1,4,5],[1,3,4],[2,6]]", "output": "[1,1,2,3,4,4,5,6]" }
    ],
    "constraints": ["k == lists.length", "0 ≤ sum(lists[i].length) ≤ 10⁴"],
    "starterCode": {
      "javascript": "function mergeKLists(lists) {\n  // Write code here\n}",
      "typescript": "function mergeKLists(lists: ListNode[]): ListNode {\n  // Write code here\n}",
      "python": "def merge_k_lists(lists):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public ListNode mergeKLists(ListNode[] lists) {\n    // Write code here\n  }\n}",
      "cpp": "ListNode* mergeKLists(vector<ListNode*>& lists) {\n  // Write code here\n}"
    }
  },
  {
    "id": "swap-nodes-in-pairs",
    "title": "Swap Nodes in Pairs",
    "description": "Given a linked list, swap nodes in pairs and return the new head.",
    "examples": [
      { "input": "head = [1,2,3,4]", "output": "[2,1,4,3]" }
    ],
    "constraints": ["The number of nodes is in the range [0,100]"],
    "starterCode": {
      "javascript": "function swapPairs(head) {\n  // Write code here\n}",
      "typescript": "function swapPairs(head: ListNode): ListNode {\n  // Write code here\n}",
      "python": "def swap_pairs(head):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public ListNode swapPairs(ListNode head) {\n    // Write code here\n  }\n}",
      "cpp": "ListNode* swapPairs(ListNode* head) {\n  // Write code here\n}"
    }
  },
  {
    "id": "reverse-nodes-in-k-group",
    "title": "Reverse Nodes in k‑Group",
    "description": "Given a linked list, reverse the nodes of a list k at a time and return its modified list.",
    "examples": [
      { "input": "head = [1,2,3,4,5], k = 2", "output": "[2,1,4,3,5]" }
    ],
    "constraints": ["The number of nodes is in [1,5000]"],
    "starterCode": {
      "javascript": "function reverseKGroup(head, k) {\n  // Write code here\n}",
      "typescript": "function reverseKGroup(head: ListNode, k: number): ListNode {\n  // Write code here\n}",
      "python": "def reverse_k_group(head, k):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public ListNode reverseKGroup(ListNode head, int k) {\n    // Write code here\n  }\n}",
      "cpp": "ListNode* reverseKGroup(ListNode* head, int k) {\n  // Write code here\n}"
    }
  },
  {
    "id": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "description": "Given a linked list, remove the nth node from the end and return the head.",
    "examples": [
      { "input": "head = [1,2,3,4,5], n = 2", "output": "[1,2,3,5]" }
    ],
    "constraints": ["The number of nodes is in [1,30]"],
    "starterCode": {
      "javascript": "function removeNthFromEnd(head, n) {\n  // Write code here\n}",
      "typescript": "function removeNthFromEnd(head: ListNode, n: number): ListNode {\n  // Write code here\n}",
      "python": "def remove_nth_from_end(head, n):\n    # Write code here\n    pass",
      "java": "class Solution {\n  public ListNode removeNthFromEnd(ListNode head, int n) {\n    // Write code here\n  }\n}",
      "cpp": "ListNode* removeNthFromEnd(ListNode* head, int n) {\n  // Write code here\n}"
    }
},
];
