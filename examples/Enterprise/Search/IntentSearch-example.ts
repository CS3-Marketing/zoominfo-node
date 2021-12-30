import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Intent Search Company Specific Info
  await zoom.search.intenetSearch
    .getIntentCompanySearch({companyType: 'public', topics: ['Business Loans']})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve Intent Search Specific Info
  await zoom.search.intenetSearch
    .getIntentSpecificSearch({topics: ['Business Loans']})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.search.intenetSearch
    .getIntentSearchInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.search.intenetSearch
    .getIntentSearchOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
