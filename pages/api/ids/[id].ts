import type {NextApiRequest,NextApiResponse} from 'next'
import { connectToDb } from '../../../db'

export default function useHandler(req: NextApiRequest, res: NextApiResponse){
    connectToDb()
    const {couponId}= req.query
    res.status(200).json({coupon: couponId,message:"GET by id"})
    const {
        query: { id },
        method,
      } = req

      switch (method) {
        case 'GET':
          // Get data from your database
          res.status(200).json({ id: `${id}` })
          break
        default:
          res.setHeader('Allow', ['GET'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
    }