module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },

  pg: {
    user: "yxalqhzbxlfjqk",
    host: "ec2-18-214-208-89.compute-1.amazonaws.com",
    database: "df28vk9ps4k57u",
    password:
      "bad9c30fff066600af2557eb342b0aba6f37160d80a884e79c618cf4596fefbd",
    port: 5432,
    ssl: true,
  },

  pgService: {
    host: process.env.PG_SRV_HOST || "localhost",
    port: process.env.PG_SRV_PORT || 3001,
  },
};
