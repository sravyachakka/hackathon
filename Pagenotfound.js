import React from 'react';
import Logo from './newlogo.png';
import svecw from './svecw.jpeg';
import { useNavigate } from 'react-router-dom';
const Pagenotfound = () => {
    const nav = useNavigate()

    const handle = () => {
        nav('Home');
    }
    const handle1 = () => {
        nav('Warden');
    }

    return (
        <div>
            <div>
                <table align='center' >
                    <tr>
                        <td><img class="image" src={Logo} height={100} width={200} /></td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><h2>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN(AUTONOMOUS)<br /></h2>
                            <h3>Approved By AICTE, New Delhi., Affiliated to JNTUK, Kakinada.<br />
                                BHIMAVARAM - 534202 West Godavari District, Andhra Pradesh, India.<br />
                                Tel : 08816 - 250864
                            </h3></td>
                    </tr>
                </table>
                <img src={svecw} alt="image" id='img' class="center" />
                <div class="centered1">
                    <table align="center" className="t" border='1'>
                        <div className="login">

                            <br></br>
                            <tr>
                                <td>
                                    <h2>Student Login</h2>
                                    <form>
                                        <div className="text_area" align="center">
                                            <i class="user icon"></i><input
                                                type="text"
                                                placeholder="Username"
                                                className="text_input"

                                            />
                                        </div>
                                        <div className="text_area" align="center">
                                            <i class="lock icon"></i><input
                                                type="password"
                                                placeholder="Password"
                                                className="text_input"

                                            />
                                        </div>

                                        <button class="btn" onClick={handle}>Login</button>
                                    </form>

                                </td>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>
                                    <h2>Warden Login</h2>
                                    <form>
                                        <div className="text_area" align="center">
                                            <i class="user icon"></i><input
                                                type="text"
                                                placeholder="Username"
                                                className="text_input"

                                            />
                                        </div>
                                        <div className="text_area" align="center">
                                            <i class="lock icon"></i><input
                                                type="password"
                                                placeholder="Password"
                                                className="text_input"

                                            />
                                        </div>

                                        <button className='btn' onClick={handle1}>Login</button>
                                    </form>

                                </td>
                            </tr>


                        </div>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Pagenotfound;