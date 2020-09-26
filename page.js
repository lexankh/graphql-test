const container = document.querySelector('.lists__wrapper');

const list = (...arg) => new List(...arg);
const serverApi = new ServerApi();
const listRoll = new ListRoll(container, serverApi, list);

listRoll.render();