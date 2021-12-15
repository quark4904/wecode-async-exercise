// Promise 객체 사용법
// const getThreePromise = () =>
//   new Promise((resolve, reject) => {
//     resolve(3);
//   });

// // bad
// console.log(getThreePromise().result); // undefined

// // good
// getThreePromise().then((result) => console.log("result :", result));
// // result : 3

// async/await 사용법
// async function willGetThree() {
//   return 3;
// }
// async function main() {
//   const three1 = await willGetThree();

//   console.log(three1);
//   // 3
// }
// main();

// [개별 과제] 비동기 정보들 가져와서 붙이기
const nameObj = { 0: "Alpha", 1: "Beta", 2: "Chalie" };
const ageObj = { 0: 24, 1: 32, 2: 27 };
const genderObj = { 0: "Male", 1: "Female", 2: "Male" };

function getName(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nameObj[id]);
    }, 4200);
  });
}

function getAge(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ageObj[id]);
    }, 2700);
  });
}

function getGender(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(genderObj[id]);
    }, 5600);
  });
}

async function main() {
  const startTime = new Date();

  const id = 2; // 0 ~ 2 내에서 자유롭게 바꾸세요!

  // get함수들을 써서 해당 변수에 값을 담아주세요!
  //   const name = await getName(id);
  //   const age = await getAge(id);
  //   const gender = await getGender(id);

  // 첫번째 수행시간 스크린샷. await 를 차례대로 썼을 때,

  // 두번째 수행시간 스크린샷. Promise.all 을 썼을 때,
  const results = await Promise.all([getName(id), getAge(id), getGender(id)]);

  const endTime = new Date();

  console.log(`수행시간: ${(endTime - startTime) / 1000}s`);

  // await
  //   return {
  //     name,
  //     age,
  //     gender,
  //   };
  // Promise.all
  return {
    name: results[0],
    age: results[1],
    gender: results[2],
  };
}

main();
