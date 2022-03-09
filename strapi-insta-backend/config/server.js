module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9f2af4eb944a712353e064c59e3f2246"),
    },
  },
  cron: {
    enabled: true,
  },
});
