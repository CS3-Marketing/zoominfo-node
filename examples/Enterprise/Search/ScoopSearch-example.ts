import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Scoop Search Info
  await zoom.search.scoopSearch
    .getScoopSearch({companyName: 'ZoomInfo'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.search.scoopSearch
    .getScoopSearchInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.search.scoopSearch
    .getScoopSearchOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
