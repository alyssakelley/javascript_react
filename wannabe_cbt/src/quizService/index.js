const qBank = [
  {
    question:
      "Why should CBT Nuggets hire Alyssa Kelley as a Software Engineer?   ",
    answers: ["Her problem solving skills", "Her display of initiative to learn CBT's technologies", "Her love for working as a team", "She loves CBT Nuggets!", "All of the above"],
    correct: "All of the above",
    questionId: "000000"
  },
  {
    question:
      "Why should CBT Nuggets hire Alyssa Kelley as a Software Engineer?   ",
    answers: ["Her problem solving skills", "Her display of initiative to learn CBT's technologies", "Her love for working as a team", "She loves CBT Nuggets!", "All of the above"],
    correct: "All of the above",
    questionId: "000001"
  },
  {
    question:
      "Why should CBT Nuggets hire Alyssa Kelley as a Software Engineer?   ",
    answers: ["Her problem solving skills", "Her display of initiative to learn CBT's technologies", "Her love for working as a team", "She loves CBT Nuggets!", "All of the above"],
    correct: "All of the above",
    questionId: "000002"
  },
];

export default (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
