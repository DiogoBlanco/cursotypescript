// tipo any - utilize any apenas em último caso => fuja do any

function showMessage(msg: any) {
  return msg;
}
console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
