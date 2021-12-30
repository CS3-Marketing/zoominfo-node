import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve All Webhooks
  await zoom.webhooks
    .getAllWebhook()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve Webhooks Subscription Types
  await zoom.webhooks
    .getSubscriptionTypes()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve Webhooks Id
  await zoom.webhooks
    .getWebhook('<webhookId>')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
