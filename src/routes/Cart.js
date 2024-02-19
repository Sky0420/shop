import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAge } from './../store/userData';
import { setCount } from './../store/cartData';
import { memo, useState } from 'react';

let Child = memo(function() {
    console.log('Rerendered')
    return <div>Children.</div>
})

function Cart() {

    let state = useSelector((state) => state)
    
    let dispatch = useDispatch()

    let [count, setCount] = useState(0);

    return (
        <>
        <Child count={count}></Child>
            <button onClick={()=>{ setCount(count++)}}>+</button>

        <h4>
            {state.user.name}의 장바구니
            Age : {state.user.age}
        </h4>
        <button onClick={()=>{
            dispatch(setAge(10))
        }}>Button</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{a.name}</td>
                                    <td>{a.count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(setCount(a.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Cart;