import ChatApp from './components/chat-app/chat-app';
import $ from 'jquery';
import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount = () => {
    $("#btnclose").on("click", function () {
      $("#navmsg").css("display", "none");
    })

    $("#btnclose").on("mouseenter", function () {
      $("#btnclose").addClass("changeBtn");
    })

    $("#btnclose").on("mouseleave", function () {
      $("#btnclose").removeClass("changeBtn");
    })

    $("#navopt1").on("click", function () {
      $("#navmsg").css("display","none");
      window.location.href = "/";
    })

    $("#navopt2").on("click", function () {
      $("#navmsg").css("display","none");
      window.location.href = "/";
    })
  }

  render() {
    // React Hooks
    // function createConvGroup() {
    //   const [convgroup, setConvGroup] = useState();

    //   useEffect(() => {
    //     convgroup = "";
    //     setConvGroup(convgroup);
    //   })
    // }

    return (
      <>
        <header>
          <nav className='navbar'>
            <h6 className='navbar-brandname'>ChatApp.io</h6>
            <button className='btnlogout' data-bs-toggle="modal" data-bs-target="#navmsg">log out</button>
          </nav>
          {/* NavMsg Modal */}
          <div className='modal fade' id='navmsg' data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='navmsglabel'>
            <div className='modal-dialog'>
              <div className='navmsg modal-content'>
                <button type="button" id='btnclose' class="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                <div style={{marginTop: '-0.8rem' }}>
                  <h6>Do you want to Logout?</h6>
                  <hr className='colbar1' />
                  <div className='navoption'>
                    <h6 id='navopt1' className='navoptions'>yes</h6>
                    <h6 id='navopt2' className='navoptions'>no</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* NavMsg Modal */}
        </header>
        {/* borderBottom: '0.1rem solid var(--black)' */}
        <main style={{height: '32rem'}}>
          <ChatApp />
          <div className='msg-groups'>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="me-auto">message success</strong>
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* border: '0.1rem solid var(--black)' */}
        <footer className='footergroup' style={{textAlign: 'center',justifyContent: 'center', border: 'none', height: '2.68rem'}}>
          <h6 style={{padding: '0.8rem'}}>Powered by</h6>
          <a className='fgbrand' href="/">ChatApp.io</a>
        </footer>
      </>
    );
  }
}
// End of App.js