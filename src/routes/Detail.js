import { useParams, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './../store/cartData';

function Detail(props) {

    let { id } = useParams();

    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id;
    });

    let [tab, setTab] = useState(0);

    let [fade, setFade] = useState('')

    let dispatch = useDispatch()

    let navigate = useNavigate();

    useEffect(()=>{
        let a = setTimeout(()=>{ setFade('end') }, 100)
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    },[])

    return (
        <>
            <div className={"container start " + fade}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{찾은상품.name}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger" onClick={()=>{
                            dispatch(addCart(찾은상품))
                            navigate('/cart')
                            console.log(찾은상품)
                        }}>주문하기</button>
                    </div>
                </div>
            </div>


            <Nav variant="tabs" defaultActiveKey="link0" className={"start " + fade}>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </>
    )
};

function TabContent({ tab }) {

    let [fade, setFade] = useState('')
    useEffect(()=>{
        let a = setTimeout(()=>{ setFade('end') }, 100)
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    },[tab])

    return (
        <div className={'start ' + fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default Detail; 