const Test2 = () => {
  //함수 영역 - 조건문, 제어문, 등등 가능
  let title = "신상명세서";
  const name = "홍길동";
  const age = 20;
  const tel = "010-0000-1111";
  const addr = "서울";
  
  return (
    <>
      <h2>JSX 영역</h2>
      <h3> {title}</h3>
      <ul>
          <li>이름: {name}</li>
          <li>나이: {age}</li>
          <li>주소: {tel}</li>
          <li>전화: {addr}</li>
      </ul>

      //한줄주석
      /*
      여러줄 주석 
      */
      {/* jsx식 주석 */}
      <p //한줄주석
      >
          안녕하세요
      </p>
    </>
  );
};

export default Test2;
