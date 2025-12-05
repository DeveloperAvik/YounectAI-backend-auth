import app from "./app.js";
import { env } from "./config/env.js";
app.listen(env.PORT, () => {
    console.log(`Gateway running on http://localhost:${env.PORT}`);
});
//# sourceMappingURL=server.js.map