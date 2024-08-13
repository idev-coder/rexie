import path from "path";
import { setViews, rexie } from "rexie";
import client from './routes/client'
import service from './routes/service'

export const app = rexie()

setViews(app, {
    viewsDirectory: path.join(__dirname, 'views')
})

app.use(rexie.static(path.join(__dirname, 'public')));

app.use('/', client)

app.use('/api', service)

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`RexJS example started at http://localhost:${port}`);
});

