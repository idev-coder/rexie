import { Router, Request, Response } from "rexie";

export const router = Router();

router.get('/', function (req: Request, res: Response) {
    res.render('home/index', { title: 'Rexie Framework', foo: { bar: 'baz' } })
})

export default router
