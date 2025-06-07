import  connectDB  from '../config/db.js';
import Transaction from '../model/transaction.js';

const run = async () => {
  await connectDB();

  // Insert a sample document (optional)
  const tx = new Transaction({
    username: 'demo_user',
    transactionType: 'stake',
    token: 'BTC',
    amount: 1000,
    description: 'Initial funding',
  });

  await tx.save();
  console.log('Transaction created:', tx);

  process.exit(); // Close the script
};

run();