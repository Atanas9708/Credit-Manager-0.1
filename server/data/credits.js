const credits = require('./../credits-mock');
const genId = require('./genId');


const manager = {
  getCredits: (page, pageLength) => {
    let creditsCount = credits.length;
    let maxPages = Math.ceil(creditsCount / pageLength);

    if (maxPages <= 0) {
      maxPages = 1;
    }

    if (page > maxPages) {
      page = maxPages;
    }

    if (page < 0) {
      page = 1;
    }

    let allPages = [];

    for (let i = 1; i <= maxPages; i++) {
      allPages.push(i);
    }

    let pages = {
      prevPage: page - 1 < 1 ? 1 : page - 1,
      nextPage: page + 1 > maxPages ? maxPages : page + 1,
      hasPrevPage: page - 1 > 0,
      hasNextPage: page + 1 <= maxPages,
      maxPages: allPages,
      result: {
        first: (pageLength * page) - pageLength + 1,
        last: page + 1 <= maxPages
          ? ((pageLength * page) - pageLength) + pageLength
          : ((pageLength * page) - pageLength) + (creditsCount - ((pageLength * page) - pageLength)),
        max: creditsCount
      }
    };

    let skip = (pageLength * page) - pageLength;
    let outputCredits = credits.slice(skip, skip + pageLength);
    console.log(skip);
    return {
      credits: outputCredits,
      pages
    };

  },

  addCredit: (payload) => {
    let id = genId();

    let creditToCreate = {
      id,
      borrower: payload.borrower,
      amount: payload.amount,
      repaymentPeriod: payload.repaymentPeriod,
      firstMaturityDate: payload.firstMaturityDate,
      interestRate: payload.interestRate,
      duration: payload.duration,
      creationDate: Date.now(),
      status: 'Pending',
      notes: []
    };

    credits.push(creditToCreate);

    return creditToCreate;
  },

  creditDetails: (creditId) => {
    let foundCredit = credits.filter(c => c['id'] === creditId);

    if (foundCredit.length === 0) {
      return;
    }

    return foundCredit[0];
  },

  postNote: (creditId, note) => {
    let foundCredit = credits.filter(c => c['id'] === creditId);

    if (foundCredit.length === 0) {
      return;
    }

    let noteToCreate = { content: note, createdOn: Date.now() };

    console.log(foundCredit);
    console.log(noteToCreate)

    foundCredit[0]['notes'].unshift(noteToCreate);

    return foundCredit[0];
  },

  status: (creditId, newStatus) => {
    let foundCredit = credits.filter(c => c['id'] === creditId);

    if (foundCredit.length === 0) {
      return;
    }

    if (newStatus !== undefined && newStatus !== '' &&
      newStatus !== null && typeof newStatus === 'string' &&
      newStatus.length > 0) {

      foundCredit[0]['status'] = newStatus;

      return foundCredit[0];
    }
  }
}

module.exports = manager;