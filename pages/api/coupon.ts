// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import CouponModel from '../../couponmodel';

// // type Data = {
// //   name: string
// // }

export interface Data{
  couponCode:number,
  expiry: string,
  title: string,
  description: string[],
  paymentMode: string,
  discount: {
      percentage: string,
      amount: number,
  },
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a POST request
    console.log(req.body);
    let data  = await CouponModel.find()
    
    res.status(200).json(data)
  } else if(req.method === 'POST'){
    let { couponCode } = req.body;
    try {
      const checkCouponCode :Data|null = await CouponModel.findOne({
        couponCode: couponCode,
      });
  
      if (checkCouponCode === null) {
        const newData = await CouponModel.create(req.body);
        res.status(201).send({ message: "Coupon created successfully", data: newData });
      } else {
        res.status(400).send({ message: "Coupon already exists" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ data: "check entered data once again" });
    }
  }
}
