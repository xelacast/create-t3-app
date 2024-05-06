const cliResults = {
  databaseProvider: "sqlite",
  packages: ["drizzle"],
  flags: {
    dbProvider: "mysql",
  },
};

console.log(cliResults);

cliResults.databaseProvider =
  cliResults.packages.includes("drizzle") ||
  cliResults.packages.includes("prisma")
    ? cliResults.flags.dbProvider
    : "sqlite";

console.log(cliResults);
