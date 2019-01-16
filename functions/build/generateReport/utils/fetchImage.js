"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImage = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetchImage = async imageUrl => {
  try {
    const response = await (0, _nodeFetch.default)(imageUrl);
    const type = response.headers['content-type'];
    const buffer = await response.buffer();
    const image = `data:${type};base64,${buffer.toString('base64')}`;
    return image;
  } catch (error) {
    // console.log(error)
    return null;
  }
};

exports.fetchImage = fetchImage;