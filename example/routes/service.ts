import { Router, Request, Response } from "rexie";

export const router = Router();

router.get('/', function (req: Request, res: Response) {
    res.json({ title: 'Rexie Framework', foo: { bar: 'baz' } })
})

export default router