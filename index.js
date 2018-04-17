recipes = {omelet: 'eggs'};

function updateObjectWithKeyAndValue (object, key, val) {
  return Object.assign({}, object, {key: val});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var temp = Object.assign({}, object);
  delete temp[object];
  return temp;
}

