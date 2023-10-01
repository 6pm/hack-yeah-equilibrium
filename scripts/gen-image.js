const OpenAI = require('openai')

const OPENAI_API_KEY = 'OPENAI_API_KEY';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

async function generateImage(prompt) {
  // const response = await openai.createImage({
  //   prompt,
  //   n: 1,
  //   // 256x256, 512x512, or 1024x1024
  //   size: "256x256",
  // });
  // return response.data.data[0].url

  const image = await openai.images.generate({ prompt, size: "256x256", n: 1, });

  return image.data
}





async function main() {
  const img = await generateImage('generage abstract picture in dark colours in Van Gogh stype')
  console.log(img)
}

main()