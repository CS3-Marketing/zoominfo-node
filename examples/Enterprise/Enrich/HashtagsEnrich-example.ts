import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Hashtags Info
  await zoom.enrich.hashtagsEnrich
    .getHashtagsEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.hashtagsEnrich
    .getHashtagsEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
