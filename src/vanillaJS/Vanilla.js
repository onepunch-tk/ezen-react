function VanillaJS() {
  console.log("started");

  //   //let or const
  //   const a = 100;
  //   // a = 255;
  //   console.log(a);
  //   {
  //     let a = 50;
  //     console.log(a);
  //     {
  //       let a = 200;
  //       console.log(a);
  //       {
  //         let a = 300;
  //         console.log(a);
  //       }
  //       console.log(a);
  //     }
  //     console.log(a);
  //   }
  //   console.log(a);

  //Templetliteral();

  //Basic();

  //Lambda();

  //ArrayTest();

  //ObjectTest();

  //MapTest();

  //FilterTest();

  //SpreadTest();
  SpreadTest2();

  return <div></div>;
}

const Templetliteral = () => {
  let a = 20;
  const b = 30;
  const str1 = a + "와" + b + "의 합은" + (a + b);
  const str2 = `${a}와 ${b}의 합은 ${a + b}`;
  console.log(str1);
  console.log(str2);

  const name = "김다미";
  const age = 20;
  const addr = "서울";
  const str3 = `이름은 ${name}이고 나이는 ${age}이고 집은 ${addr}입니다.`;
  console.log(str3);
};

const Basic = () => {
  //함수 영역에서는 모든 연산자 제어문 사용가능
  const test1 = true;
  const test2 = false;
  const test3 = undefined;
  //같다 === ,!==
  //고민할 필요없음 if문없이 그냥 삼항연산자로 처리.
  const result1 = test1 === true ? `참` : `거짓`;
  console.log(result1);
  //이건 좀 다름... && <--and연산자 아님 순수 참일때 씀 &&
  const result2 = test1 && "참에대한결과";
  console.log(result2);
  //마찬가지로 || <--or연산자아님 그냥 순수 펄스 ||
  const result3 = test2 || "거짓의 결과";
  console.log(result3);

  const result4 = test3 || "값이 존재하지 않음";
  console.log(result4);

  const result5 = test3 === undefined ? "값없음" : "값 있음";
  console.log(result5);

  if (test3 === true) {
    console.log("참");
  } else {
    console.log("거짓");
  }
};

const Lambda = () => {
  const make1 = () => {
    console.log("test1");
  };
  const make2 = (num1) => {
    console.log(`${num1}`);
  };
  const make3 = (num1, num2) => {
    console.log(`${num1 + num2}`);
  };

  make1();
  make2(1);
  make3(2, 3);
};

const ArrayTest = () => {
  const arr = [10, 20, 30];
  arr.push(40);
  arr.push(50);
  arr.push(60);

  console.log(arr);

  const arr1 = [10, 20, 30];
  const arr2 = arr1.concat();
  arr1.push(40);
  console.log(arr1);
  console.log(arr2);
  const arr3 = arr1.concat(40, 50, 60);
  console.log(arr1);
  console.log(arr3);
};

const ObjectTest = () => {
  const datas = [
    { id: 1, name: "하태경1", age: 20 },
    { id: 2, name: "하태경2", age: 30 },
    { id: 3, name: "하태경3", age: 40 },
  ];

  datas.forEach((data) => console.log(data.id, data.name, data.age));
  const datas1 = datas.concat();
  const datas2 = datas.concat({ id: 4, name: "하태경4", age: 50 });
  datas2[0].name = "gkxorud";
  console.log(datas1);
  console.log(datas2);
};

const MapTest = () => {
  const datas = [
    { id: 1, name: "하태경1", age: 20 },
    { id: 2, name: "하태경2", age: 30 },
    { id: 3, name: "하태경3", age: 40 },
  ];

  const newDatas = datas.map((x, index) => {
    return Object.assign({}, x);
  });
  newDatas[0].name = "gkxorud";

  console.log(datas);
  console.log(newDatas);
};

const FilterTest = () => {
  const datas = [
    { id: 1, name: "하태경1", age: 20 },
    { id: 2, name: "하태경2", age: 30 },
    { id: 3, name: "하태경3", age: 40 },
  ];

  //filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  const filterDatas = datas.filter((item) => item.age === 40);
  console.log(filterDatas);

  //find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
  const findDatas = datas.find((item) => item.age === 40);
  console.log(findDatas);

  //findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
  const findIndex = datas.findIndex((item) => item.age === 40);
  console.log(findIndex);

  //indexOf(searchElement: T, fromIndex?: number): number;
  const indexOfData = datas.indexOf(datas.find((item) => item.age === 20));
  console.log(indexOfData);

  const datas1 = [
    { text: "운동을 하다" },
    { text: "수영을 하다" },
    { text: "저녁을 하다" },
    { text: "친구를 만나다" },
    { text: "저녁을 먹다" },
  ];

  const errorResult = datas1[0].text.indexOf("rk");
  console.log(errorResult);

  const searchResult = datas1.filter(
    (item) => item.text.indexOf("하다") !== -1
  );
  console.log(searchResult);

  const datas2 = {
    name: "치와와",
    age: 3,
  };
  //비구조 할당, 구조 분해
  const { name, age } = datas2;
  console.log(name);
  console.log(age);

  //key naming이랑 일치하지 않으면 undefined
  const { a, b, c } = datas2;
  console.log(a);
  console.log(b);
  console.log(c);
};

const SpreadTest = () => {
  const arr = ["강아지", "고양이", "토끼", "소"];
  const spreadArr = [...arr, "사자"];

  arr[0] = "갱쥐";

  console.log(arr);
  console.log(spreadArr);

  const dog = { name: "강아지", age: 2 };
  //수정, 갱신
  const dog1 = { ...dog, name: "치와와", age: 20 };
  console.log(dog1);
  console.log("//////////////////////////////////////");
};

const SpreadTest2 = () => {
  const datas = [
    { id: 1, name: "홍길동", age: 5 },
    { id: 2, name: "강호동", age: 15 },
    { id: 3, name: "최우식", age: 25 },
    { id: 4, name: "김다미", age: 35 },
    { id: 5, name: "이효리", age: 45 },
  ];

  const copyDatas = [...datas];
  //console.log(copyDatas);

  //유재석 추가
  const addDatas = [
    ...datas,
    {
      id: 6,
      name: "유재석",
      age: 16,
    },
  ];
  //문제 4번의 김다미를 전지현 35를 변경하기
  const updateDatas = copyDatas.map((item) =>
    item.id === 4 ? { ...item, name: "이효리", age: 35 } : item
  );
  
  console.log(updateDatas);
  console.log(datas);
  console.log(copyDatas);
};

export default VanillaJS;
