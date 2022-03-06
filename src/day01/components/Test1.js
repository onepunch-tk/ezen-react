
//jsx는 하나의 root element만 반환 할수 있다.(자식 요소는 div등으로 감싸서 ㄹ반환)
//최종적으로 div등 element가 남발되기 때문에 React.Fragment로 그룹핑해서 반환 할수 있다.
//다른 방법으로는 <> </>해당 빈 태그로 반환 할수 있다.
const Test1 = () => {
    return (
        <>
            <h2> JSX영역 - 문법 </h2>
            <p> 태그열면 반드시 닫기 </p>
            <img />
            <input />
            <br />
            <hr />
            <p>
                전체 영역 div는 한줄이상일때 반드시 있어야한ㄷ
                단 div, section, table, article도 가능
            </p>
        </>
    );
}
export default Test1;