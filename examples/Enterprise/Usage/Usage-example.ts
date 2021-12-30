import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve API Usage Info
  await zoom.usage
    .getUsage()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
