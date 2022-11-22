class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index]
  }

  push(val) {

  //  if (this.length < this.capacity) {

      this.data[this.length] = val
      this.length++
      return this.length
  //}
  }


  pop() {

    let index = this.data[this.length - 2]  //find end of array
    let val = this.data.splice(index, 1)
    if (this.length > 0) {
      this.length --
    }
    return val[0]

  }

  shift() {
        let val = this.data.splice(0,1)

        if (this.length > 0) {
          this.length --
        }

        for (let i = this.data.length; i > 0; i--) {
          this.data[i] = this.data[i + 1]
          return val[0]
        }
  }

  unshift(val) {
    for (let i =this.data.length - 1; i> 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = val;
    this.length++;
    return this.length

  }

  indexOf(val) {

    for (let i = 0; i < this.length; i ++) {
      if(this.data[i] === val) {
        return i
      }
    }
    return -1
  }

  resize() {
    // if (this.data.length = this.capacity) {
      // return this.capacity *2
    // }
    // Your code here
    //if the length = capacity then capacity * 2

    this.capacity = this.capacity * 2
    let oldData = this.data
    this.data = new Array(this.capacity)
    oldData.forEach((ele) => {
      this.data.push(ele)
    })
  }

}

dynamicArr = new DynamicArray()
dynamicArr.push(10);
dynamicArr.push(11);
dynamicArr.push(12);
dynamicArr.push(13);
console.log('before resize', dynamicArr.data)
dynamicArr.resize()
console.log('after resize', dynamicArr.data)


module.exports = DynamicArray;
