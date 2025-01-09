import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
    `;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userPrompt }],
    });

    const advice = chatCompletion.choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return;
    //return "To manage your finances more effectively, consider allocating the surplus income towards savings or investments to build financial security and future growth. Additionally, maintain your current spending habits while regularly reviewing your budget to ensure you continue to live within your means.";
  }
};

export default getFinancialAdvice;