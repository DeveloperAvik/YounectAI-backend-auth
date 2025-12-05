import dotenv from "dotenv";
dotenv.config();
export const env = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 5000,
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || "",
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || "",
    POST_SERVICE_URL: process.env.POST_SERVICE_URL || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
    FRONTEND_URL: process.env.FRONTEND_URL || "*"
};
//# sourceMappingURL=env.js.map