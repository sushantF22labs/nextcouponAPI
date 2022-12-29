import type {NextApiRequest,NextApiResponse} from 'next'
import { connectToDb } from '../../../db'

export default function useHandler(req: NextApiRequest, res: NextApiResponse){
    connectToDb()
    const {
        query: { id, name },
        method,
      } = req

      switch (method) {
        case 'GET':
          // Get data from your database
          res.status(200).json({ id, name: `coupon ${id}` })
          break
        case 'PUT':
          // Update or create data in your database
          res.status(200).json({ id, name: name || `coupon ${id}` })
          break
        default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
    }