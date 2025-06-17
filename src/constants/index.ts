import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30"
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "typescript", name: "TypeScript", icon: "/typescript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    typescript: string;
    python: string;
    java: string;
    cpp: string;
  };
  constraints?: string[];
}

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {\n  // Write your solution here\n}`,
      python: `def two_sum(nums, target):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n    }\n}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {\n    // Write your solution here\n}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    description:
      "Write a function that reverses a string. Input is given as an array of characters s.\nMust be done in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {\n  // Write your solution here\n}`,
      typescript: `function reverseString(s: string[]): void {\n  // Write your solution here\n}`,
      python: `def reverse_string(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public void reverseString(char[] s) {\n        // Write your solution here\n    }\n}`,
      cpp: `void reverseString(vector<char>& s) {\n    // Write your solution here\n}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 is the same forward and backward.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Write your solution here\n}`,
      typescript: `function isPalindrome(x: number): boolean {\n  // Write your solution here\n}`,
      python: `def is_palindrome(x):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n    }\n}`,
      cpp: `bool isPalindrome(int x) {\n    // Write your solution here\n}`,
    },
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6",
      },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
      typescript: `function maxSubArray(nums: number[]): number {\n  // Write your solution here\n}`,
      python: `def max_sub_array(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n    }\n}`,
      cpp: `int maxSubArray(vector<int>& nums) {\n    // Write your solution here\n}`,
    },
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: (1 step + 1 step) or (2 steps)",
      },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
      typescript: `function climbStairs(n: number): number {\n  // Write your solution here\n}`,
      python: `def climb_stairs(n):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        // Write your solution here\n    }\n}`,
      cpp: `int climbStairs(int n) {\n    // Write your solution here\n}`,
    },
  },
  {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day to sell that stock in the future.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5",
      },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}`,
      typescript: `function maxProfit(prices: number[]): number {\n  // Write your solution here\n}`,
      python: `def max_profit(prices):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your solution here\n    }\n}`,
      cpp: `int maxProfit(vector<int>& prices) {\n    // Write your solution here\n}`,
    },
  },
];

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
