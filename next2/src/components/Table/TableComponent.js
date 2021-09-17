import React, { useEffect, useState } from 'react';

const TableComponent = (props) => {
    const [columns, setColumns] = useState([])
    return (
      <div class="col-xl-12 col-md-6">
        <div class="card Recent-Users">
          <div class="card-header">
            <h5>Recent Users</h5>
          </div>
          <div class="card-block px-0 py-3">
            <div class="table-responsive">
              <table class="table table-hover">
                <tbody>
                  <tr class="unread">
                    <td>
                      <img
                        class="rounded-circle"
                        style={{ width: "40px" }}
                        src="assets/images/user/avatar-1.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 class="mb-1">Isabella Christensen</h6>
                      <p class="m-0">Lorem Ipsum is simply…</p>
                    </td>
                    <td>
                      <h6 class="text-muted">
                        <i class="fas fa-circle text-c-green f-10 m-r-15"></i>11
                        MAY 12:56
                      </h6>
                    </td>
                    <td>
                      <a href="#!" class="label theme-bg2 text-white f-12">
                        Reject
                      </a>
                      <a href="#!" class="label theme-bg text-white f-12">
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr class="unread">
                    <td>
                      <img
                        class="rounded-circle"
                        style={{ width: "40px" }}
                        src="assets/images/user/avatar-2.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 class="mb-1">Mathilde Andersen</h6>
                      <p class="m-0">Lorem Ipsum is simply text of…</p>
                    </td>
                    <td>
                      <h6 class="text-muted">
                        <i class="fas fa-circle text-c-red f-10 m-r-15"></i>11
                        MAY 10:35
                      </h6>
                    </td>
                    <td>
                      <a href="#!" class="label theme-bg2 text-white f-12">
                        Reject
                      </a>
                      <a href="#!" class="label theme-bg text-white f-12">
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr class="unread">
                    <td>
                      <img
                        class="rounded-circle"
                        style={{ width: "40px" }}
                        src="assets/images/user/avatar-3.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 class="mb-1">Karla Sorensen</h6>
                      <p class="m-0">Lorem Ipsum is simply…</p>
                    </td>
                    <td>
                      <h6 class="text-muted">
                        <i class="fas fa-circle text-c-green f-10 m-r-15"></i>9
                        MAY 17:38
                      </h6>
                    </td>
                    <td>
                      <a href="#!" class="label theme-bg2 text-white f-12">
                        Reject
                      </a>
                      <a href="#!" class="label theme-bg text-white f-12">
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr class="unread">
                    <td>
                      <img
                        class="rounded-circle"
                        style={{ width: "40px" }}
                        src="assets/images/user/avatar-1.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 class="mb-1">Ida Jorgensen</h6>
                      <p class="m-0">Lorem Ipsum is simply text of…</p>
                    </td>
                    <td>
                      <h6 class="text-muted f-w-300">
                        <i class="fas fa-circle text-c-red f-10 m-r-15"></i>19
                        MAY 12:56
                      </h6>
                    </td>
                    <td>
                      <a href="#!" class="label theme-bg2 text-white f-12">
                        Reject
                      </a>
                      <a href="#!" class="label theme-bg text-white f-12">
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr class="unread">
                    <td>
                      <img
                        class="rounded-circle"
                        style={{ width: "40px" }}
                        src="assets/images/user/avatar-2.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 class="mb-1">Albert Andersen</h6>
                      <p class="m-0">Lorem Ipsum is simply dummy…</p>
                    </td>
                    <td>
                      <h6 class="text-muted">
                        <i class="fas fa-circle text-c-green f-10 m-r-15"></i>21
                        July 12:56
                      </h6>
                    </td>
                    <td>
                      <a href="#!" class="label theme-bg2 text-white f-12">
                        Reject
                      </a>
                      <a href="#!" class="label theme-bg text-white f-12">
                        Approve
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card chat-sanders">
            <div class="card-header  borderless">
              <h5 class="text-white">Chat with Kristina Sanders</h5>
            </div>
            <div class="card-block m-t-30 p-0">
              <div class="scroll-div" id="chat-scroll">
                <div style={{ padding: "0 30px 35px 30px" }}>
                  <p class="text-center text-muted">JUN 23 3:46PM</p>
                  <div class="row m-b-20 received-chat align-items-end">
                    <div class="col-auto p-r-0">
                      <h5 class="text-white d-flex align-items-center theme-bg2 justify-content-center">
                        k
                      </h5>
                    </div>
                    <div class="col">
                      <div class="msg">
                        <h6 class="m-b-0">How may i help you?</h6>
                      </div>
                    </div>
                  </div>
                  <div class="row m-b-20 send-chat align-items-end">
                    <div class="col text-right">
                      <div class="msg">
                        <h6 class="m-b-0 text-white">
                          I need support for my ticket XXX.
                        </h6>
                      </div>
                    </div>
                    <div class="col-auto p-l-0">
                      <h5 class="text-white d-flex align-items-center theme-bg justify-content-center">
                        Y
                      </h5>
                    </div>
                  </div>
                  <div class="row m-b-20 received-chat align-items-end">
                    <div class="col-auto p-r-0">
                      <h5 class="text-white d-flex align-items-center  theme-bg2 justify-content-center">
                        k
                      </h5>
                    </div>
                    <div class="col">
                      <div class="msg">
                        <h6 class="m-b-0">
                          Our support staff will contact you soon..
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="row m-b-0 send-chat align-items-end">
                    <div class="col text-right">
                      <div class="msg">
                        <h6 class="m-b-0 text-white">Nice to meet you!</h6>
                      </div>
                    </div>
                  </div>
                  <div class="right-icon-control border-top">
          <div class="input-group input-group-button p-10">
            <input
              type="text"
              class="form-control border-0 text-muted"
              placeholder="Write your message"
            />
            <div class="input-group-append">
              <button class="btn" type="button">
                <i class="fas f-20 fa-paper-plane"></i>
              </button>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </div>
        <div class="col-sm-4">
<div class="card">
<div class="card-header">
<h5>Carousel Controls</h5>
</div>
<div class="card-body">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img class="d-block w-100" src="../assets/images/slider/img-slide-4.jpg" alt="First slide"/>
</div>
<div class="carousel-item">
<img class="d-block w-100" src="../assets/images/slider/img-slide-3.jpg" alt="Second slide"/>
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>
</div>
</div>
</div>
</div>
      </div>
    );
};

export default TableComponent;