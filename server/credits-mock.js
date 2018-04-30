const genId = require('./data/genId');

module.exports = [
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 5000,
    repaymentPeriod: '2020-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 5,
    duration: 24,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'ivan@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 3500,
    repaymentPeriod: '2021-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 7,
    duration: 36,
    creationDate: Date.now(),
    status: 'Delivered',
    notes: [{ content: 'Vankata is a trusty one', createdOn: Date.now() }]
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Georgi',
      lastName: 'Georgiev',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'gosho@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 1200,
    repaymentPeriod: '2029-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 4,
    duration: 12,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Maria',
      lastName: 'Mariova',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'maria@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 4400,
    repaymentPeriod: '2023-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 8,
    duration: 60,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Stamat',
      lastName: 'Stamatov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'stamat@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 2750,
    repaymentPeriod: '2020-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 5,
    duration: 24,
    creationDate: Date.now(),
    status: 'Rejected',
    notes: [{content: 'Stamat was very rude on the phone - rejected bb', createdOn: Date.now()}]
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 1700,
    repaymentPeriod: '2019-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 4,
    duration: 12,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 3600,
    repaymentPeriod: '2021-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 7,
    duration: 36,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 1730,
    repaymentPeriod: '2019-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 3,
    duration: 12,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 4350,
    repaymentPeriod: '2022-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 9,
    duration: 48,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Atanas',
      lastName: 'Stoilov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'nasko_9708@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 2680,
    repaymentPeriod: '2021-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 6,
    duration: 36,
    creationDate: Date.now(),
    status: 'Pending',
    notes: []
  },
  {
    id: genId(),
    borrower: {
      firstName: 'Pesho',
      lastName: 'Peshov',
      PIN: 1234567890,
      phone: 0899956935,
      email: 'pesho@mail.bg',
      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    amount: 5000,
    repaymentPeriod: '2020-04-30',
    firstMaturityDate: '2018-04-30',
    interestRate: 5,
    duration: 24,
    creationDate: Date.now(),
    status: 'Delivered',
    notes: [{ content: 'Pesho is the man', createdOn: Date.now() }]
  }
]