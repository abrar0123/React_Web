export default function test() {
  const arr = ["a", "b", "a", "b", "a", "b", "d", "e", "d"];

  const arr1 = [1, 4];

  function repeated(str) {
    let n = [];

    for (let ar of str) {
      let p = n.findIndex((e) => e.value === ar);
      if (p !== -1) {
        console.log(p);
        n[p].count++;
      } else {
        n.push({ value: ar, count: 1 });
      }
    }
    const n1 = n.filter((e) => e.count < 3);

    return n1;
  }

  //    function 2

  function penTwoTimes(str) {
    let n = [];

    for (let ar of str) {
      let p = n.findIndex((e) => e.value === ar);
      if (p !== -1) {
        console.log(p);
        n[p].count++;
      } else {
        n.push({ value: ar, count: 1 });
      }
    }
    let t = "";
    for (let p1 of n) {
      t += p1.value;
    }
    return t;
  }

  const missingarray = (arr) => {
    let max = arr[0];
    let sep = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      console.log("max", max);

      for (let j = 0; j < max; j++) {
        sep.push(j);
      }
      console.log("sep", sep);
    }

    let fil = [];
    for (let o of arr) {
      fil = sep.filter((e) => e !== o);
    }
    console.log("filter__", fil);
  };

  const f1 = repeated(arr);
  const f2 = penTwoTimes(arr);
  const f3 = missingarray(arr1);

  console.log("funtion_1:", f1);
  console.log("funtion_2:", f2);
  console.log("funtion_3:", f3);
}
