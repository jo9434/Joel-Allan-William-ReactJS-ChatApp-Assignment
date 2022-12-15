import React, { Component } from 'react';
import $ from 'jquery';
import './chat-app.css';

export default class ChatApp extends Component {
    componentDidMount = () => {
        // <i class="fa-solid fa-xmark"></i>
        $("#menuicon1").on("click", function () {
            $("#chatmenuarea").css("width", "15rem");
            $("#chatmenuarea").css("transition", "all 2s ease-in-out");
            $("#menuicon1").css("display", "none");
            $("#menuicon1").css("transition", "all 2s ease-in-out");
            $("#menuicon2").css("display", "block");
            $("#menuicon2").css("transition", "all 2s ease-in-out");
            $("#menutext").css("display", "block");
            $("#menutext").css("transition", "all 2s ease-in-out");
            $(".colbar2").css("width", "13.3rem");
            $(".colbar2").css("transition", "all 2s ease-in-out");
            $(".menulist").css("width", "12rem");
            for (let i = 0; i <= 2800; i++) {
                if (i < 1500 && i < 1900) {
                    setTimeout(() => {
                        $(".spinner-border").css("display", "none");
                        $(".menuitem").css("display", "none");
                        $(".chatuserarea").css("margin-left", "0");
                    }, i);
                }
                if (i === 2000) {
                    setTimeout(() => {
                        $(".spinner-border").css("display", "block");
                        $(".menuitem").css("display", "none");
                    }, i);
                }
                if (i === 2800) {
                    setTimeout(() => {
                        $(".spinner-border").css("display", "none");
                        $(".menuitem").css("display", "block");
                    }, i);
                }
            }
        });

        $("#menuicon2").on("click", function () {
            $("#chatmenuarea").css("width", "4rem");
            $("#chatmenuarea").css("transition", "all 2s ease-in-out");
            $("#menuicon1").css("display", "block");
            $("#menuicon1").css("transition", "all 2s ease-in-out");
            $("#menuicon2").css("display", "none");
            $("#menuicon2").css("transition", "all 2s ease-in-out");
            $("#menutext").css("display", "none");
            $("#menutext").css("transition", "all 2s ease-in-out");
            $(".colbar2").css("width", "2.4rem");
            $(".colbar2").css("transition", "all 2s ease-in-out");
            $(".menulist").css("width", "2.4rem");
            $(".menuitem").css("display", "none");
            for (let i = 0; i <= 1000; i++) {
                if (i === 1000) {
                    setTimeout(() => {
                        $(".chatuserarea").css("margin-left", "10.88rem");
                        $(".chatuserarea").css("transition", "all 2s ease-in-out");
                    }, i);
                }
            }
        });

        $("#btnclose2").on("mouseenter", function () {
            $("#btnclose2").addClass("changeBtn2");
        })

        $("#btnclose2").on("mouseleave", function () {
            $("#btnclose2").removeClass("changeBtn2");
        })

        $("#convlist1").on("click", function () {
            $("#convlist1").addClass("activegroup");
            $("#convlist2").removeClass("activegroup");
            $("#convlist3").removeClass("activegroup");
            $("#convsection1").css("display", "block");
            $("#convsection2").css("display", "none");
            $("#convsection3").css("display", "none");
        })
        $("#convlist2").on("click", function () {
            $("#convlist1").removeClass("activegroup");
            $("#convlist2").addClass("activegroup");
            $("#convlist3").removeClass("activegroup");
            $("#convsection1").css("display", "none");
            $("#convsection2").css("display", "block");
            $("#convsection3").css("display", "none");
        })
        $("#convlist3").on("click", function () {
            $("#convlist1").removeClass("activegroup");
            $("#convlist2").removeClass("activegroup");
            $("#convlist3").addClass("activegroup");
            $("#convsection1").css("display", "none");
            $("#convsection2").css("display", "none");
            $("#convsection3").css("display", "block");
        })

        // $(".message-input").on("keypress", function(event){
        //     if(event.key === "Enter") {
        //         event.preventDefault();
        //         // console.log("Enter Key is Pressed...");
        //         let messages = new Array([]);
        //         for(let i=0; i<=100; i++) {
        //             messages[i] = [""+$(".message-input").val()];
        //             localStorage.setItem("messages", JSON.stringify(messages[i]));
        //             i++;
        //         }
        //     }
        // })

        // Poland Office Group
        $("#emicon1").on("click", function(){
            $("#emicon1").css("display","none");
            $("#emicon2").css("display","block");
            $("#emlist1").css("display","block");
        });
        $("#emicon2").on("click", function(){
            $("#emicon1").css("display","block");
            $("#emicon2").css("display","none");
            $("#emlist1").css("display","none");
        });
        // Introductions Group
        $("#emicon3").on("click", function(){
            $("#emicon3").css("display","none");
            $("#emicon4").css("display","block");
            $("#emlist2").css("display","block");
        });
        $("#emicon4").on("click", function(){
            $("#emicon3").css("display","block");
            $("#emicon4").css("display","none");
            $("#emlist2").css("display","none");
        });
        // India Office Group
        $("#emicon5").on("click", function(){
            $("#emicon5").css("display","none");
            $("#emicon6").css("display","block");
            $("#emlist3").css("display","block");
        });
        $("#emicon6").on("click", function(){
            $("#emicon5").css("display","block");
            $("#emicon6").css("display","none");
            $("#emlist3").css("display","none");
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            clicks1: 0,
            clicks2: 0,
            show: true
        };
    }

    IncrementItem1 = () => {
        this.setState({ clicks1: this.state.clicks1 + 1 });
        if (this.state.clicks1 === 14) {
            this.setState({ clicks1: this.state.clicks1 });
        }
    }
    IncrementItem2 = () => {
        this.setState({ clicks2: this.state.clicks2 + 1 });
        if (this.state.clicks2 === 14) {
            this.setState({ clicks2: this.state.clicks2 });
        }
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        const locale = "en";
        const today = new Date();
        const time = today.toLocaleTimeString(locale, { hour12: true, hour: '2-digit', minute: '2-digit' });

        const system_message = ["Welcome to the Team Chat", ". Send a message now to start interacting with other users in the app."];

        const user_list = ["alan richard", "bob dylan", "carol peters", "dean williams", "elin gomes",
            "russell peters", "kirk .s", "carolina .p", "andrew simon", "peter gomes",
            "andrew richard", "simona .p", "carol pereira", "raj .s kapoor", "peter .a simmons",
            "regina johnson", "bob .h peters", "hobbs shaw", "andrew .s peters", "samantha .p cooper",
            "jack daniels", "peter .h simmonds", "grace williams", "serena simmonds", "ezekiel richardson", "mark k. johnson"];

        const user_message = ["Hey, everyone!", "Oh hi, Bob! Regina is around, too...",
            "Hey Guys, Regina here, we have new recruits - Mark, Simona, Raj, & Andrew, joining our team.",
            "Need blood work reports for patients, having done CBC Test with us. Passing on all the samples to Pathology team for analysis, Bob.",
            "Sure, Regina. Will get it done asap.", "Hi, everyone. I'm Andrew, joining as Intern - Research Nurse.",
            "Hi, guys! Mark here, teaming up with R&D. Great to be a part of your team.", "Hi, Regina. Here is the CBC Report Analysis of Patient ID: 28328 from India. Any clarifications, revert back.",
            "Thanks, Bob. Sure will do.", "Hi, I'm Simona, joining the Pathology Department as Lab Technician.", "Hi, guys! Raj here. Joining as Intern in Pathology Department. Hope to learn & work as a team.",
            "Welcome Aboard, guys. I'm Bob, managing Pathology Department. Hope to be a great influencer & support to my fellow teammates, Raj & Simona.",
            "Hi, Peter here. Welcome new recruits. I'm heading the R&D, & hope to work with Mark soon.", "Thank you everyone, with your warm welcome.", "It's great to be part of XYZ Co.",
            "Hope to learn new things & enrich my skills.", "It's great oppurtunity to learn more & progress.", "Hi, Regina here. Welcoming new recruits. It's great to be working with Andrew soon. Hope you learn a lot from me as well learn a lot from you.",
            "Hi, This is Grace. Welcome Aboard new recruits. I'm heading the Nursing Department. Assigning Regina, to train, mentor and work with you, Andrew.", "Thank You, Serena!"];

        const conv_group = ["poland office", "india office", "introductions"];

        const channel_desc = ["This Channel is For Company Wide Chatter"];

        return (
            <div className="d-flex">
                <div id='chatmenuarea' className='chatmenuarea' style={{ height: '34.73rem', background: 'var(--skyblue1)' }}>
                    <div className='d-flex'>
                        <i id='menuicon1' className='menuicon1 fa-solid fa-bars'></i>
                        <i id='menuicon2' className='menuicon2 fa-solid fa-xmark'></i>
                        <h4 id='menutext' style={{ display: 'none', textTransform: 'uppercase', fontSize: '1.6rem', marginTop: '0.17rem' }}>menu</h4>
                    </div>
                    <hr className='colbar2' style={{ borderWidth: '0.18rem', width: '2.48rem', borderRadius: '2rem', marginLeft: '-1.2rem', marginTop: '-1rem' }} />
                    <ul className='submenulist'>
                        <li className='menulist'><i id='sbmicon1' className="fa-solid fa-house"></i>
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span className='menuitem'>menu item 1</span>
                        </li>

                        <li className='menulist'><i id='sbmicon2' className="fa-solid fa-house"></i>
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span className='menuitem'>menu item 2</span>
                        </li>

                        <li className='menulist'><i id='sbmicon3' className="fa-solid fa-house"></i>
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span className='menuitem'>menu item 3</span>
                        </li>

                        <li className='menulist'><i id='sbmicon4' className="fa-solid fa-house"></i>
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span className='menuitem'>menu item 4</span>
                        </li>

                        <li className='menulist'><i id='sbmicon5' className="fa-solid fa-house"></i>
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span className='menuitem'>menu item 5</span>
                        </li>
                    </ul>
                </div>
                <div className='chatappinterface d-flex'>
                    <div className='chatuserarea' style={{ height: '30.88rem', width: '15rem', background: 'var(--skyblue1)' }}>
                        <section className='d-flex' style={{ display: 'flex' }}>
                            <div className='user-icon d-flex' style={{ display: 'flex' }}>
                                <p>rr</p>
                                <i style={{ marginTop: '1.2rem', marginLeft: '-0.68rem', color: 'lightgreen', height: '1.34rem', width: '1.34rem', border: '0.18rem solid var(--skyblue1)', borderRadius: '2.88rem' }} class="fa-solid fa-circle"></i>
                            </div>
                            <div className='d-inline' style={{ display: 'inline', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                <h6 className='user-name'>{user_list[15]}</h6>
                                <p className='user-role'>research nurse</p>
                            </div>
                        </section>
                        <section className='user-conv'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h6 style={{ textTransform: 'capitalize' }}>conversations</h6>
                                <i id='addConvGroup' class="iconadd fa-solid fa-plus" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#createconv"></i>
                            </div>

                            <section>
                                {/* To add new conversation group */}
                                {/* CreateConv Modal */}
                                <section className='modal fade' id='createconv' data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='navmsglabel'>
                                    <div className='modal-dialog'>
                                        <div className='createconv modal-content'>
                                            <button type="button" id='btnclose2' class="btnclose2 fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <h6 style={{ marginTop: '-2rem' }}>Create New Conversation</h6>
                                            <hr className='colbar3' />
                                            <form className='conv-form d-flex' style={{ marginTop: '-0.8rem' }}>
                                                <input className='conv-input' type='text' placeholder='Enter Conversation Group Title...' />
                                                <button className='btnsubmit' type='submit' style={{ textTransform: 'capitalize' }}>create conversation</button>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                                {/* CreateConv Modal */}

                                {/* After adding it gets created in .convlist */}
                                <ul className='convlist'>
                                    <li id='convlist1' className='activegroup d-flex' style={{ display: 'flex' }}>
                                        <p className='conv-icon fa-solid fa-hashtag'></p>
                                        <p id='convtitle1' className='conv-title'>{conv_group[0]}</p>
                                    </li>
                                    <li id='convlist2' className='d-flex' style={{ display: 'flex' }}>
                                        <p className='conv-icon fa-solid fa-hashtag'></p>
                                        <p id='convtitle2' className='conv-title'>{conv_group[2]}</p>
                                    </li>
                                    <li id='convlist3' className='d-flex' style={{ display: 'flex' }}>
                                        <p className='conv-icon fa-solid fa-hashtag'></p>
                                        <p id='convtitle3' className='conv-title'>{conv_group[1]}</p>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </div>

                    <div className='chatdisparea' style={{ background: 'var(--skyblue2)', height: '30.88rem', width: '47.68rem' }}>
                        <section id='convsection1' className='convsection'>
                            <section className='d-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.48rem' }}>
                                <div className='d-inline' style={{ display: 'inline' }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'capitalize' }}>{conv_group[0]}</h6>
                                    <p style={{ opacity: '60%', fontSize: '0.78rem' }}>{channel_desc[0]}</p>
                                </div>
                                <div className='d-flex' style={{ display: 'flex', marginTop: '0.4rem' }}>
                                    <p style={{ opacity: '60%', fontSize: '0.88rem', marginRight: '0.2rem' }}>14 | 100</p>
                                    <i className='fa-solid fa-user-group' style={{ opacity: '60%', fontSize: '1.2rem', transform: 'rotateY(180deg)' }}></i>
                                </div>
                            </section>
                            <hr style={{ border: '0.09rem solid var(--black)', background: 'var(--black)', borderRadius: '0.22rem', marginTop: '-0.48rem' }} />
                            <section className='messagebar'>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ch</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>chatapp bot</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='system-message'>
                                        {system_message[0]} <i class="iconhand fa-solid fa-hand"></i> <i class="iconhand fa-solid fa-hand"></i> {system_message[1]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>bd</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[1]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[7]}
                                    </p>
                                    <i id='iconlike1' className="iconLike fa-solid fa-thumbs-up" onClick={this.IncrementItem1}>{this.state.show ? <span id='iconbadge1' className="iconbadge badge"> {this.state.clicks1} </span> : ''}</i>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <p className='current-utime'>{time}</p>
                                            <h6 className='current-uname'>{user_list[15]}</h6>
                                        </div>
                                        <div className='current-uicon d-flex' style={{ display: 'flex' }}>
                                            <p>rj</p>
                                        </div>
                                    </section>
                                    <p className='current-umessage'>
                                        {user_message[8]}
                                    </p>
                                    <i id='iconlike2' className="iconLike fa-solid fa-thumbs-up" onClick={this.IncrementItem2}>{this.state.show ? <span id='iconbadge2' className="iconbadge badge"> {this.state.clicks2} </span> : ''}</i>
                                </section>
                            </section>
                            <div>
                                <input className='message-input' type='text' placeholder='Type Message [Press &#x23CE; to send message]' name='message' />
                                <section>
                                    <i id='emicon1' className="emojimenuicon1 fa-regular fa-face-smile"></i>
                                    <i id='emicon2' className="emojimenuicon2 fa-regular fa-face-smile-wink"></i>
                                </section>
                                <div id='emlist1' className="emojimenulist">
                                    <i className="iconemojis fa-solid fa-face-smile"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh"></i>
                                    <i className="iconemojis fa-solid fa-face-smile-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-wide"></i>
                                    <i className="iconemojis fa-solid fa-face-surprise"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-stars"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin"></i>
                                    <i className="iconemojis fa-solid fa-clock"></i>
                                    <i className="iconemojis fa-solid fa-circle-user"></i>
                                    <i className="iconemojis fa-solid fa-face-flushed"></i>
                                    <i className="iconemojis fa-solid fa-face-frown"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam-sweat"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-squint"></i>
                                </div>
                            </div>
                        </section>

                        <section id='convsection2' className='convsection'>
                            <section className='d-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.48rem' }}>
                                <div className='d-inline' style={{ display: 'inline' }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'capitalize' }}>{conv_group[2]}</h6>
                                    <p style={{ opacity: '60%', fontSize: '0.78rem' }}>{channel_desc[0]}</p>
                                </div>
                                <div className='d-flex' style={{ display: 'flex', marginTop: '0.4rem' }}>
                                    <p style={{ opacity: '60%', fontSize: '0.88rem', marginRight: '0.2rem' }}>26 | 100</p>
                                    <i className='fa-solid fa-user-group' style={{ opacity: '60%', fontSize: '1.2rem', transform: 'rotateY(180deg)' }}></i>
                                </div>
                            </section>
                            <hr style={{ border: '0.09rem solid var(--black)', background: 'var(--black)', borderRadius: '0.22rem', marginTop: '-0.48rem' }} />
                            <section className='messagebar'>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ch</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>chatapp bot</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='system-message'>
                                        {system_message[0]} <i class="iconhand fa-solid fa-hand"></i> <i class="iconhand fa-solid fa-hand"></i> {system_message[1]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>bd</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[1]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[0]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>eg</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[4]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[1]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <p className='current-utime'>{time}</p>
                                            <h6 className='current-uname'>{user_list[15]}</h6>
                                        </div>
                                        <div className='current-uicon d-flex' style={{ display: 'flex' }}>
                                            <p>rj</p>
                                        </div>
                                    </section>
                                    <p className='current-umessage'>
                                        {user_message[2]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>mj</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[25]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[6]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ps</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[14]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[12]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>mj</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[25]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[13]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>s</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[11]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[9]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>rk</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[13]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[10]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>bd</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[1]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[11]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>s</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[11]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[14]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>rk</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[13]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[15]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ap</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[18]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[5]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>gw</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[22]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[18]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <p className='current-utime'>{time}</p>
                                            <h6 className='current-uname'>{user_list[15]}</h6>
                                        </div>
                                        <div className='current-uicon d-flex' style={{ display: 'flex' }}>
                                            <p>rj</p>
                                        </div>
                                    </section>
                                    <p className='current-umessage'>
                                        {user_message[17]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ap</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[18]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[16]}
                                    </p>
                                </section>
                                {/* <input className='message-input' type='text' placeholder='Type Message [Press &#x23CE; to send message]' name='message' /> */}
                            </section>
                            <div>
                                <input className='message-input' type='text' placeholder='Type Message [Press &#x23CE; to send message]' name='message' />
                                <section>
                                    <i id='emicon3' className="emojimenuicon1 fa-regular fa-face-smile"></i>
                                    <i id='emicon4' className="emojimenuicon2 fa-regular fa-face-smile-wink"></i>
                                </section>
                                <div id='emlist2' className="emojimenulist">
                                    <i className="iconemojis fa-solid fa-face-smile"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh"></i>
                                    <i className="iconemojis fa-solid fa-face-smile-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-wide"></i>
                                    <i className="iconemojis fa-solid fa-face-surprise"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-stars"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin"></i>
                                    <i className="iconemojis fa-solid fa-clock"></i>
                                    <i className="iconemojis fa-solid fa-circle-user"></i>
                                    <i className="iconemojis fa-solid fa-face-flushed"></i>
                                    <i className="iconemojis fa-solid fa-face-frown"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam-sweat"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-squint"></i>
                                </div>
                            </div>
                        </section>

                        <section id='convsection3' className='convsection'>
                            <section className='d-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.48rem' }}>
                                <div className='d-inline' style={{ display: 'inline' }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'capitalize' }}>{conv_group[1]}</h6>
                                    <p style={{ opacity: '60%', fontSize: '0.78rem' }}>{channel_desc[0]}</p>
                                </div>
                                <div className='d-flex' style={{ display: 'flex', marginTop: '0.4rem' }}>
                                    <p style={{ opacity: '60%', fontSize: '0.88rem', marginRight: '0.2rem' }}>12 | 100</p>
                                    <i className='fa-solid fa-user-group' style={{ opacity: '60%', fontSize: '1.2rem', transform: 'rotateY(180deg)' }}></i>
                                </div>
                            </section>
                            <hr style={{ border: '0.09rem solid var(--black)', background: 'var(--black)', borderRadius: '0.22rem', marginTop: '-0.48rem' }} />
                            <section className='messagebar'>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ch</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>chatapp bot</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='system-message'>
                                        {system_message[0]} <i class="iconhand fa-solid fa-hand"></i> <i class="iconhand fa-solid fa-hand"></i> {system_message[1]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <p className='current-utime'>{time}</p>
                                            <h6 className='current-uname'>{user_list[15]}</h6>
                                        </div>
                                        <div className='current-uicon d-flex' style={{ display: 'flex' }}>
                                            <p>rj</p>
                                        </div>
                                    </section>
                                    <p className='current-umessage'>
                                        {user_message[3]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex' }}>
                                        <div className='user-icon2 d-flex' style={{ display: 'flex' }}>
                                            <p>ss</p>
                                        </div>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <h6 className='user-name2'>{user_list[23]}</h6>
                                            <p className='user-time'>{time}</p>
                                        </div>
                                    </section>
                                    <p className='user-message'>
                                        {user_message[4]}
                                    </p>
                                </section>
                                <section>
                                    <section className='d-flex' style={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                                        <div className='d-flex' style={{ display: 'flex', marginLeft: '0.68rem', marginTop: '0.24rem' }}>
                                            <p className='current-utime'>{time}</p>
                                            <h6 className='current-uname'>{user_list[15]}</h6>
                                        </div>
                                        <div className='current-uicon d-flex' style={{ display: 'flex' }}>
                                            <p>rj</p>
                                        </div>
                                    </section>
                                    <p className='current-umessage'>
                                        {user_message[19]}
                                    </p>
                                </section>
                                {/* <input className='message-input' type='text' placeholder='Type Message [Press &#x23CE; to send message]' name='message' /> */}
                            </section>
                            <div>
                                <input className='message-input' type='text' placeholder='Type Message [Press &#x23CE; to send message]' name='message' />
                                <section>
                                    <i id='emicon5' className="emojimenuicon1 fa-regular fa-face-smile"></i>
                                    <i id='emicon6' className="emojimenuicon2 fa-regular fa-face-smile-wink"></i>
                                </section>
                                <div id='emlist3' className="emojimenulist">
                                    <i className="iconemojis fa-solid fa-face-smile"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh"></i>
                                    <i className="iconemojis fa-solid fa-face-smile-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-wide"></i>
                                    <i className="iconemojis fa-solid fa-face-surprise"></i>
                                    <i className="iconemojis fa-solid fa-face-laugh-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-stars"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam"></i>
                                    <i className="iconemojis fa-solid fa-face-grin"></i>
                                    <i className="iconemojis fa-solid fa-clock"></i>
                                    <i className="iconemojis fa-solid fa-circle-user"></i>
                                    <i className="iconemojis fa-solid fa-face-flushed"></i>
                                    <i className="iconemojis fa-solid fa-face-frown"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-beam-sweat"></i>
                                    <i className="iconemojis fa-solid fa-face-grin-squint"></i>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}