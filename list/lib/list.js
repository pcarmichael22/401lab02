'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }



  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }
  /**
 * @param none
 * @returns {this.data, this.length}
 */


  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }
  /**
 * @param item
 * @returns {this.length}
 */


  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  /**
 * @param 
 * @returns {item}
 */


  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }
  /**
 * @param none
 * @returns {item}
 */


  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }
  /**
 * @param item
 * @returns {this.length}
 */


  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }
  /**
 * @param callback
 * @returns {null}
 */


  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }
  /**
 * @param callback
 * @returns {result}
 */


  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }
  /**
 * @param callback
 * @returns {result}
 */


  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }
  /**
 * @param {callback, state}
 * @returns {state}
 */


}

module.exports = List;
