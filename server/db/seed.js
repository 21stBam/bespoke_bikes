const db = require("./db");
const {Customer, Discount, Product, Sale, Salesperson} = require("../db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const sp1 = await Salesperson.create({
    first_name: "John",
    last_name: "Thomas",
    address: "123 Main St",
    phone: "678-111-1111", 
    start_date: new Date("12-19-2017"),
    termination_date: "",
    manager: "Jeffery",
  });

  const sp2 = await Salesperson.create({
    first_name: "Tony",
    last_name: "Morgan",
    address: "124 Main St",
    phone: "678-222-2222", 
    start_date: new Date("06-10-2016"),
    termination_date: new Date("12-10-2021"),
    manager: "Jeffery",
  });

  const sp3 = await Salesperson.create({
    first_name: "Hanna",
    last_name: "Pearl",
    address: "125 Main St",
    phone: "678-333-3333", 
    start_date: new Date("07-21-2015"),
    termination_date: null,
    manager: "Jeffery",
  });

  const cust1 = await Customer.create({
    first_name: "Johnson",
    last_name: "Johnson",
    address: "234 South St",
    phone: "404-444-4444",
    start_date: new Date("07-30-2018"),
  })

  const cust2 = await Customer.create({
    first_name: "Pete",
    last_name: "Jackson",
    address: "235 South St",
    phone: "404-555-5555",
    start_date: new Date("08-10-2019"),
  })

  const cust3 = await Customer.create({
    first_name: "George",
    last_name: "Jackson",
    address: "235 South St",
    phone: "404-555-6666",
    start_date: new Date("08-12-2019"),
  })

  const cust4 = await Customer.create({
    first_name: "Ashley",
    last_name: "Bakerson",
    address: "234 North St",
    phone: "404-111-1111",
    start_date: new Date("09-09-2020"),
  })

  const prod1 = await Product.create({
    name: "Quest 2",
    manufacturer: "Meta",
    style: "",
    purchase_price: 200.00,
    sale_price: 300.00,
    quantity: 20,
    commission_percentage: 30,
  });

  const prod2 = await Product.create({
    name: "Index",
    manufacturer: "Valve",
    style: "",
    purchase_price: 500.00,
    sale_price: 1000.00,
    quantity: 10,
    commission_percentage: 15,
  });

  const prod3 = await Product.create({
    name: "Playstation 5",
    manufacturer: "Sony",
    style: "",
    purchase_price: 300.00,
    sale_price: 500.00,
    quantity: 5,
    commission_percentage: 10,
  });

  const prod4 = await Product.create({
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    style: "",
    purchase_price: 300.00,
    sale_price: 500.00,
    quantity: 10,
    commission_percentage: 20,
  });

  const prod5 = await Product.create({
    name: "Switch Pro",
    manufacturer: "Nintendo",
    style: "",
    purchase_price: 200.00,
    sale_price: 400.00,
    quantity: 30,
    commission_percentage: 40,
  });

  const sale1 = await Sale.create({
    productId: 1,
    customerId: 1,
    salespersonId: 1,
    sale_date: new Date("10-20-2020"),
  });

  const sale2 = await Sale.create({
    productId: 1,
    customerId: 2,
    salespersonId: 3,
    sale_date: new Date("10-20-2020"),
  });

  const sale3 = await Sale.create({
    productId: 2,
    customerId: 2,
    salespersonId: 3,
    sale_date: new Date("10-20-2020"),
  });

  const sale4 = await Sale.create({
    productId: 3,
    customerId: 3,
    salespersonId: 3,
    sale_date: new Date("12-20-2020"),
  });

  const sale5 = await Sale.create({
    productId: 4,
    customerId: 1,
    salespersonId: 2,
    sale_date: new Date("12-20-2020"),
  });

  console.log(`seeded customers, products, sales, discounts, etc`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
