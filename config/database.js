module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfhvdlpgp3jh03g9q0m0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_fzcp'),
      user: env('DATABASE_USERNAME', 'roor'),
      password: env('DATABASE_PASSWORD', 'pYC3hCfdJdMvMZGMzmkag5JpxSscXHMC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
