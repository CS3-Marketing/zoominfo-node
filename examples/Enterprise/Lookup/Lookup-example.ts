import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve accepted Board Member values
  await zoom.lookup
    .getBoardMembers()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve accepted Company Ranking values
  await zoom.lookup
    .getCompanyRanking()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
