import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF5C1350d21D7C73829d0f5976e0882d808cED0C2'
);
console.log("Factory deployed to:", instance.address);

export default instance;
