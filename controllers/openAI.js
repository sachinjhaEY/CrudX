const OpenAIApi = require("openai");
const catchAsync = require("./../utils/catchAsync");

// OpenAI API Configuration
const configuration = new OpenAIApi({
  apiKey:
    "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",
});
const openai = new OpenAIApi(configuration);

exports.generateQuery = catchAsync(async (req, res, next) => {
  const { prompt, dbSchema } = req.body;

  try {
    const openAiResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a SQL query generator. The schema for the database is as follows: ${dbSchema}`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const generatedQuery = openAiResponse.data.choices[0].message.content;
    res.json({ query: generatedQuery });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating SQL query" });
  }
});
