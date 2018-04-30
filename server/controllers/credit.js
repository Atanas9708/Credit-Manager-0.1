//const Credit = require('mongoose').model('Credit');
//const Note = require('./../models/Note');

const manager = require('./../data/credits');

module.exports = {

  getPage: (req, res) => {

    const pageLength = 5;
    let page = Number(req.params.page) || 1;

    let data = manager.getCredits(page, pageLength);


    if (data.credits.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'There are no credits in the database'
      });
    }

    return res.status(200).json({
      success: true,
      credits: data.credits,
      pages: data.pages
    });

    // Credit.count().then(creditsCount => {
    //   let maxPages = Math.ceil(creditsCount / pageLength);

    //   if (maxPages <= 0) {
    //     maxPages = 1;
    //   }

    //   if (page > maxPages) {
    //     page = maxPages;
    //   }

    //   if (page < 0) {
    //     page = 1;
    //   }

    //   let allPages = [];

    //   for (let i = 1; i <= maxPages; i++) {
    //     allPages.push(i);
    //   }

    //   let pages = {
    //     prevPage: page - 1 < 1 ? 1 : page - 1,
    //     nextPage: page + 1 > maxPages ? maxPages : page + 1,
    //     hasPrevPage: page - 1 > 0,
    //     hasNextPage: page + 1 <= maxPages,
    //     maxPages: allPages,
    //     result: {
    //       first: (pageLength * page) - pageLength + 1,
    //       last:  page + 1 <= maxPages 
    //       ? ((pageLength * page) - pageLength) + pageLength
    //       : ((pageLength * page) - pageLength) + (creditsCount - ((pageLength * page) - pageLength))
    //     }
    //   };

    //   Credit.find()
    //     .skip((pageLength * page) - pageLength)
    //     .limit(pageLength)
    //     .then(credits => {
    //       if (!credits) {
    //         return res.status(200).json({
    //           success: false,
    //           message: 'There are no credits in the database'
    //         });
    //       }

    //       return res.status(200).json({
    //         success: true,
    //         credits,
    //         pages
    //       });

    //     })
    // })

  },

  createCredit: (req, res) => {
    let payload = req.body;
    //TODO: Add validation
    let credit = manager.addCredit(payload);

    return res.status(200).json({
      success: true,
      credit
    })

    // let creditToCreate = {
    //   borrower: payload.borrower,
    //   amount: payload.amount,
    //   repaymentPeriod: payload.repaymentPeriod,
    //   firstMaturityDate: payload.firstMaturityDate,
    //   interestRate: payload.interestRate,
    //   duration: payload.duration,
    //   creationDate: Date.now(),
    //   status: 'Pending',
    //   notes: []
    // };

    // Credit.create(creditToCreate)
    //   .then(credit => {
    //     if (credit) {
    //       return res.status(200).json({
    //         success: true,
    //         credit
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     return res.status(200).json({
    //       success: false,
    //       err
    //     })
    //   })

  },

  getCreditDetails: (req, res) => {
    const creditId = req.params.id;

    let credit = manager.creditDetails(creditId);

    return res.status(200).json({
      success: true,
      credit
    });

    // Credit.findById(creditId)
    //   .then(credit => {
    //     if (!credit) {
    //       return res.status(404).json({
    //         success: false,
    //         message: 'Credit not found.'
    //       });
    //     }

    //     return res.status(200).json({
    //       success: true,
    //       credit
    //     });
    //   })
  },

  addNote: (req, res) => {
    const creditId = req.params.id;
    const note = req.body.note;

    //TODO: Add validation

    let credit = manager.postNote(creditId, note);

    if (!credit) {
      return res.status(404).json({
        success: false,
        message: 'Something went wrong'
      });
    }

    return res.status(200).json({
      success: true,
      notes: credit['notes']
    });

    // Credit.findById(creditId)
    //   .then(credit => {
    //     if (!credit) {
    //       return res.status(404).json({
    //         success: false,
    //         message: 'Credit not found.'
    //       });
    //     }

    //     let noteToCreate = new Note({ content: note, createdOn: Date.now() })

    //     credit.notes.unshift(noteToCreate);
    //     credit
    //       .save()
    //       .then(() => {
    //         return res.status(200).json({
    //           success: true,
    //           message: 'Note added successfully!',
    //           notes: credit.notes
    //         });
    //       })
    //       .catch(message => {
    //         console.log(message);
    //         return res.status(200).json({
    //           success: false,
    //           message
    //         });
    //       })
    //   })
  },

  changeStatus: (req, res) => {
    const creditId = req.params.id;
    const newStatus = req.body.status;

    let credit = manager.status(creditId, newStatus);

    if (!credit) {
      return res.status(404).json({
        success: false,
        message: 'Something went wrong'
      });
    }

    return res.status(200).json({
      success: true,
      credit
    });

    // Credit.findById(creditId)
    //   .then(credit => {
    //     if (!credit) {
    //       return res.status(404).json({
    //         success: false,
    //         message: 'Credit not found.'
    //       });
    //     }

    //     if (newStatus !== undefined && newStatus !== '' &&
    //       newStatus !== null && typeof newStatus === 'string' &&
    //       newStatus.length > 0) {

    //       credit.status = newStatus;
    //       credit.save()
    //         .then(() => {
    //           return res.status(200).json({
    //             success: true,
    //             message: 'Status changed successfully!'
    //           });
    //         })
    //         .catch(err => {
    //           console.log(err);
    //           return;
    //         })
    //     }

    //   })
    //   .catch(err => {
    //     console.log(err);
    //     return;
    //   })
  }

}