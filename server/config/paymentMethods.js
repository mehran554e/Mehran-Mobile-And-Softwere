const paymentMethods = [
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    enabled: true,
    accountTitle: 'Mehran Mobile & Software',
    accountNumber: process.env.EASYPAISA_ACCOUNT || '',
    instructions: 'Send the exact order amount and enter your transaction ID.',
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    enabled: true,
    accountTitle: 'Mehran Mobile & Software',
    accountNumber: process.env.JAZZCASH_ACCOUNT || '',
    instructions: 'Send the exact order amount and enter your transaction ID.',
  },
  {
    id: 'sadapay',
    name: 'SadaPay',
    enabled: true,
    accountTitle: 'Mehran Mobile & Software',
    accountNumber: process.env.SADAPAY_ACCOUNT || '',
    instructions: 'Send the exact order amount and enter your transaction ID.',
  },
]

module.exports = paymentMethods