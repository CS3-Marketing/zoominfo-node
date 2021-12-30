import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve News Search Info
  await zoom.search.newsSearch
    .getNewsSearch({})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.search.newsSearch
    .getNewsSearchInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.search.newsSearch
    .getNewsSearchOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
