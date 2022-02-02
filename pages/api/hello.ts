// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cheerio from 'cheerio';
import axios from 'axios';

type Data = {
  name: string,
  title: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await axios.get('https://monwar.uk')
  const $ = cheerio.load(data)
  const title = $('p').text()
  console.log($.text())
  res.status(200).json({ name: 'John Doe', title })
}
