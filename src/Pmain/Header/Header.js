import React, {Component} from 'react'
import Nav from './Nav/Nav'
import './Header.sass'
import logo from './mrgol_logo.jpg'
import {BsSearch} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <div className="header body_width">
                    <img className="logo" src={logo}/>
                    <div className="input">
                        <input placeholder="جستجو..."/>
                        <button>
                            <BsSearch/>
                        </button>
                    </div>
                    <div className="user">
                        <span className="user_txt">حساب کاربری</span>
                        <span className="user_icon"><AiOutlineUser/></span>
                        <div className="box_user">
                            <span onClick={() => this.props.open_modal_signin()}>ورود به حساب</span>
                            <span onClick={() => this.props.open_modal_signup()}>ثبت نام</span>
                        </div>
                    </div>
                </div>
                <Nav/>
            </header>
        )
    }
}
